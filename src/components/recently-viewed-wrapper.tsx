"use client";

import dynamic from "next/dynamic";

const RecentlyViewed = dynamic(
  () => import("./recently-viewed").then((mod) => mod.RecentlyViewed),
  {
    ssr: false,
    loading: () => (
      <div className="dark:bg-background h-100 w-full animate-pulse bg-slate-50" />
    ),
  },
);

export function RecentlyViewedWrapper() {
  return <RecentlyViewed />;
}
