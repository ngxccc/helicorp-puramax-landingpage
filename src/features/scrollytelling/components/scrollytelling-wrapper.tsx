"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ScrollytellingSectionLazy = dynamic(
  () =>
    import("./scrollytelling-section").then((mod) => mod.ScrollytellingSection),
  { ssr: false },
);

export function ScrollytellingWrapper() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const handle = window.requestIdleCallback
      ? window.requestIdleCallback(() => setShouldRender(true))
      : window.setTimeout(() => setShouldRender(true), 200);

    return () => {
      if (window.cancelIdleCallback && typeof handle === "number") {
        window.cancelIdleCallback(handle);
      } else {
        window.clearTimeout(handle);
      }
    };
  }, []);

  if (!shouldRender) {
    return <div className="min-h-screen w-full bg-transparent" />;
  }

  return <ScrollytellingSectionLazy />;
}
