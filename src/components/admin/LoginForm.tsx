"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { withBasePath } from "@/lib/paths";

type Props = {
  nextPath?: string;
};

export function LoginForm({ nextPath = "/admin" }: Props) {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(withBasePath("/api/admin/login"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setError(data.error || "Login failed.");
        setLoading(false);
        return;
      }

      router.replace(nextPath.startsWith("/admin") ? nextPath : "/admin");
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="card-surface mx-auto grid w-full max-w-md gap-4 p-6">
      <div>
        <label htmlFor="admin-username" className="mb-1 block text-sm font-bold text-ink">
          Username
        </label>
        <input
          id="admin-username"
          name="username"
          autoComplete="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="touch-target w-full rounded-button border-2 border-green/15 bg-cream px-4 py-2.5 text-ink focus:border-sky focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="admin-password" className="mb-1 block text-sm font-bold text-ink">
          Password
        </label>
        <input
          id="admin-password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="touch-target w-full rounded-button border-2 border-green/15 bg-cream px-4 py-2.5 text-ink focus:border-sky focus:outline-none"
        />
      </div>
      {error ? (
        <p className="rounded-button bg-accent-coral-light px-3 py-2 text-sm font-semibold text-accent-coral-dark" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={loading}
        className="touch-target rounded-button bg-green px-6 py-3 font-bold text-white transition-colors hover:bg-green-dark disabled:opacity-60"
      >
        {loading ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
