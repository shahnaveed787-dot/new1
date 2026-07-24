"use client";

import { useCallback, useEffect, useState, type ComponentType } from "react";

/**
 * Defers SearchBar JS (and fuse.js) until idle or first focus —
 * keeps Total Blocking Time low on initial load.
 */
export function DeferredSearchBar() {
  const [SearchBar, setSearchBar] = useState<ComponentType | null>(null);

  const load = useCallback(() => {
    void import("@/components/layout/SearchBar").then((mod) => {
      setSearchBar(() => mod.SearchBar);
    });
  }, []);

  useEffect(() => {
    if (SearchBar) return;

    const w = window as Window & {
      requestIdleCallback?: (
        cb: IdleRequestCallback,
        opts?: IdleRequestOptions,
      ) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(() => load(), { timeout: 2500 });
      return () => w.cancelIdleCallback?.(id);
    }

    const id = window.setTimeout(load, 1800);
    return () => window.clearTimeout(id);
  }, [SearchBar, load]);

  if (SearchBar) {
    return <SearchBar />;
  }

  return (
    <div className="relative w-full max-w-xl">
      <label htmlFor="site-search-shell" className="sr-only">
        Search drawings
      </label>
      <div className="relative">
        <span
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted"
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path
              d="M20 20l-3.5-3.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <input
          id="site-search-shell"
          type="search"
          placeholder="What would you like to draw today?"
          readOnly
          onFocus={load}
          onPointerDown={load}
          className="touch-target w-full rounded-pill border-2 border-green/20 bg-white py-3 pl-12 pr-4 text-base text-ink shadow-soft placeholder:text-ink-muted/70 focus:border-sky focus:outline-none"
          aria-label="Search drawings"
        />
      </div>
    </div>
  );
}
