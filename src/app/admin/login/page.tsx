import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/components/admin/LoginForm";
import { isAdminConfigured } from "@/lib/admin-auth";

export const metadata: Metadata = {
  title: {
    absolute: "Admin Login | TreeDraw",
  },
  robots: { index: false, follow: false },
};

type Props = {
  searchParams: Promise<{ next?: string }>;
};

export default async function AdminLoginPage({ searchParams }: Props) {
  const params = await searchParams;
  const nextPath =
    typeof params.next === "string" && params.next.startsWith("/admin")
      ? params.next
      : "/admin";
  const configured = isAdminConfigured();

  return (
    <main id="main-content" className="bg-hero-gradient flex flex-1 flex-col px-4 py-16">
      <div className="mx-auto w-full max-w-md text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-accent-teal">
          Secure admin area
        </p>
        <h1 className="mt-2 font-display text-4xl text-ink">Admin login</h1>
        <p className="mt-3 text-ink-muted">
          Protected with a hashed password and a signed HttpOnly session cookie.
        </p>
      </div>

      <div className="mt-8">
        {configured ? (
          <LoginForm nextPath={nextPath} />
        ) : (
          <div className="card-surface mx-auto max-w-md p-6 text-left">
            <h2 className="font-display text-2xl text-ink">Setup required</h2>
            <p className="mt-3 text-ink-muted">
              Admin credentials are not configured yet. In the project folder run:
            </p>
            <pre className="mt-4 overflow-x-auto rounded-button bg-ink px-4 py-3 text-sm text-cream">
              npm run setup:admin
            </pre>
            <p className="mt-3 text-sm text-ink-muted">
              Then restart the server. The script prints your username and password once.
            </p>
          </div>
        )}
      </div>

      <p className="mt-8 text-center">
        <Link
          href="/"
          className="font-bold text-green-dark underline decoration-sky underline-offset-2"
        >
          Back to site
        </Link>
      </p>
    </main>
  );
}
