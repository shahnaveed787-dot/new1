import type { Metadata } from "next";
import Link from "next/link";
import { LogoutButton } from "@/components/admin/LogoutButton";
import { getAdminSession } from "@/lib/admin-auth";

export const metadata: Metadata = {
  title: {
    absolute: "Admin Dashboard | TreeDraw",
  },
  robots: { index: false, follow: false },
};

export default async function AdminDashboardPage() {
  const session = await getAdminSession();

  return (
    <main id="main-content" className="bg-cream flex-1 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-accent-teal">
              TreeDraw admin
            </p>
            <h1 className="font-display text-4xl text-ink">Dashboard</h1>
            <p className="mt-2 text-ink-muted">
              Signed in as <strong className="text-ink">{session?.sub}</strong>
            </p>
          </div>
          <LogoutButton />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <section className="card-surface p-6">
            <h2 className="font-display text-2xl text-ink">Site status</h2>
            <p className="mt-2 text-ink-muted">
              Homepage and important pages are public. This dashboard is session-protected.
            </p>
            <Link
              href="/easy-and-simple-tree-drawing"
              className="mt-4 inline-flex font-bold text-green-dark underline decoration-sky underline-offset-2"
            >
              View public homepage
            </Link>
          </section>
          <section className="card-surface p-6">
            <h2 className="font-display text-2xl text-ink">Security controls</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-ink-muted">
              <li>Password stored as bcrypt hash only</li>
              <li>Signed JWT in HttpOnly cookie</li>
              <li>Login rate limited + same-origin check</li>
              <li>Security headers on every response</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
