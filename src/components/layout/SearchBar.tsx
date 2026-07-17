"use client";

import { useDeferredValue, useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { searchDataset, type SearchEntry } from "@/content/search";

export function SearchBar() {
  const listId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const deferredQuery = useDeferredValue(query);

  const fuse = useMemo(
    () =>
      new Fuse(searchDataset, {
        keys: ["title", "category", "keywords"],
        threshold: 0.35,
        includeScore: true,
      }),
    [],
  );

  const results = useMemo(() => {
    if (!deferredQuery.trim()) return [] as SearchEntry[];
    return fuse.search(deferredQuery).slice(0, 6).map((r) => r.item);
  }, [deferredQuery, fuse]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-xl">
      <label htmlFor="site-search" className="sr-only">
        Search drawings
      </label>
      <div className="relative">
        <span
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted"
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
        <input
          id="site-search"
          type="search"
          role="combobox"
          aria-expanded={open && results.length > 0}
          aria-controls={listId}
          aria-autocomplete="list"
          placeholder="What would you like to draw today?"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          className="touch-target w-full rounded-pill border-2 border-green/20 bg-white py-3 pl-12 pr-4 text-base text-ink shadow-soft placeholder:text-ink-muted/70 focus:border-sky focus:outline-none"
        />
      </div>
      {open && deferredQuery.trim() ? (
        <ul
          id={listId}
          role="listbox"
          className="absolute z-50 mt-2 max-h-72 w-full overflow-auto rounded-card border border-cream-dark bg-white p-2 shadow-lift"
        >
          {results.length === 0 ? (
            <li className="px-3 py-3 text-sm text-ink-muted">
              No matches yet — try “oak”, “pine”, or “treehouse”.
            </li>
          ) : (
            results.map((item) => (
              <li key={item.id} role="option">
                <Link
                  href={item.href}
                  className="block rounded-button px-3 py-3 hover:bg-green-light focus:bg-green-light"
                  onClick={() => setOpen(false)}
                >
                  <span className="block font-bold text-ink">{item.title}</span>
                  <span className="text-sm text-ink-muted">{item.category}</span>
                </Link>
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
}
