"use client";

import dynamic from "next/dynamic";

const ScrollytellingSectionLazy = dynamic(
  () =>
    import("./scrollytelling-section").then((mod) => mod.ScrollytellingSection),
  { ssr: false },
);

export function ScrollytellingWrapper() {
  return <ScrollytellingSectionLazy />;
}
