"use client";

import * as tus from "tus-js-client";
import { createClient } from "@/lib/supabase/client";

const BUCKET = "budgethomes-media";
const STANDARD_UPLOAD_LIMIT = 6 * 1024 * 1024;

function safeName(name: string) {
  const parts = name.toLowerCase().split(".");
  const ext = parts.length > 1 ? `.${parts.pop()!.replace(/[^a-z0-9]/g, "")}` : "";
  const base = parts
    .join("-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 70);
  return `${base || "media"}${ext}`;
}

function projectId() {
  const hostname = new URL(process.env.NEXT_PUBLIC_SUPABASE_URL!).hostname;
  return hostname.split(".")[0];
}

async function resumableUpload(file: File, objectKey: string) {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) throw new Error("Admin session expired. Please sign in again.");

  await new Promise<void>((resolve, reject) => {
    const upload = new tus.Upload(file, {
      endpoint: `https://${projectId()}.storage.supabase.co/storage/v1/upload/resumable`,
      retryDelays: [0, 3000, 5000, 10000, 20000],
      headers: {
        authorization: `Bearer ${session.access_token}`,
        "x-upsert": "false",
      },
      uploadDataDuringCreation: true,
      removeFingerprintOnSuccess: true,
      chunkSize: 6 * 1024 * 1024,
      metadata: {
        bucketName: BUCKET,
        objectName: objectKey,
        contentType: file.type,
        cacheControl: "3600",
      },
      onError: reject,
      onSuccess: () => resolve(),
    });

    upload.findPreviousUploads().then((previousUploads) => {
      if (previousUploads.length) upload.resumeFromPreviousUpload(previousUploads[0]);
      upload.start();
    }).catch(reject);
  });
}

export async function uploadMedia(
  file: File,
  folder: "content" | "videos",
  altText = "",
) {
  const isImage = file.type.startsWith("image/");
  const isVideo = file.type.startsWith("video/");
  if (!isImage && !isVideo) {
    throw new Error("Only image and video files are allowed.");
  }
  if (isImage && file.size > 10 * 1024 * 1024) {
    throw new Error("Image must be under 10 MB.");
  }
  if (isVideo && file.size > 50 * 1024 * 1024) {
    throw new Error("Video must be under 50 MB on Supabase Free.");
  }

  const supabase = createClient();
  const objectKey = `${folder}/${Date.now()}-${safeName(file.name)}`;

  if (file.size > STANDARD_UPLOAD_LIMIT) {
    await resumableUpload(file, objectKey);
  } else {
    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(objectKey, file, {
        cacheControl: "3600",
        contentType: file.type,
        upsert: false,
      });
    if (error) throw error;
  }

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(objectKey);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  await supabase.from("media_assets").insert({
    object_key: objectKey,
    url: data.publicUrl,
    file_name: file.name,
    content_type: file.type,
    alt_text: altText,
    uploaded_by: user?.email ?? "admin",
  });

  return { url: data.publicUrl, objectKey };
}
