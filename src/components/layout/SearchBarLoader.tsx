"use client";

import dynamic from "next/dynamic";

const SearchBar = dynamic(
  () => import("@/components/layout/SearchBar").then((m) => m.SearchBar),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-12 w-full max-w-xl animate-pulse rounded-pill bg-white/80"
        aria-hidden="true"
      />
    ),
  },
);

export function SearchBarLoader() {
  return <SearchBar />;
}
