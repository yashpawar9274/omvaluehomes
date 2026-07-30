import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type AdminUser = {
  id: string;
  email: string;
  displayName: string;
};

export async function getAdminContext() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) return null;

  const { data: admin } = await supabase
    .from("admin_users")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!admin) return null;

  return {
    supabase,
    user: {
      id: user.id,
      email: user.email,
      displayName:
        String(user.user_metadata?.full_name ?? "").trim() || user.email,
    } satisfies AdminUser,
  };
}

export async function requireAdmin() {
  const context = await getAdminContext();
  if (!context) redirect("/admin/login");
  return context;
}
