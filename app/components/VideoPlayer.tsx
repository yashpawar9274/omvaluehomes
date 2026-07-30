import type { VideoItem } from "@/lib/videos";
import { getVideoEmbedUrl, isDirectVideo } from "@/lib/videos";

export function VideoPlayer({ video }: { video: VideoItem }) {
  const embedUrl = getVideoEmbedUrl(video.videoUrl);

  return (
    <div className={`video-player-shell ${video.orientation === "vertical" ? "vertical" : ""}`}>
      {embedUrl ? (
        <iframe
          src={embedUrl}
          title={video.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : isDirectVideo(video.videoUrl) ? (
        <video controls preload="metadata" poster={video.posterUrl || undefined}>
          <source src={video.videoUrl} />
          Your browser does not support this video.
        </video>
      ) : (
        <div className="video-player-fallback">
          <strong>{video.label} flat tour</strong>
          <p>This video opens on its original platform.</p>
        </div>
      )}
      <a className="video-open-link" href={video.videoUrl} target="_blank" rel="noreferrer">
        Video load na ho to yahan dekhein ↗
      </a>
    </div>
  );
}
