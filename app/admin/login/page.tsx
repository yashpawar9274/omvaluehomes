import Link from "next/link";
import { redirect } from "next/navigation";
import { getAdminContext } from "@/lib/admin-auth";
import { login } from "./actions";

export const dynamic = "force-dynamic";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  if (await getAdminContext()) redirect("/admin");
  const { error } = await searchParams;

  return (
    <main className="admin-login-page">
      <div className="admin-login-card panel">
        <Link className="brand admin-login-brand" href="/">
          <span className="brand-mark">B</span>
          <span>
            <strong>BudgetHomes</strong>
            <small>Marketing CMS</small>
          </span>
        </Link>
        <span className="eyebrow">Secure admin</span>
        <h1>Content dashboard login</h1>
        <p>Supabase Auth email aur password se sign in karein.</p>
        <form action={login} className="admin-login-form">
          <label>
            <span>Email</span>
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            <span>Password</span>
            <input
              name="password"
              type="password"
              required
              autoComplete="current-password"
            />
          </label>
          <button className="button button-primary" type="submit">
            Sign in
          </button>
          {error && <p className="form-error">{error}</p>}
        </form>
        <Link className="text-link" href="/">← Back to website</Link>
      </div>
    </main>
  );
}
