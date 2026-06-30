"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const HeLiBot = dynamic(
  () =>
    import("@/features/chatbot/components/he-li-bot").then(
      (mod) => mod.HeLiBot,
    ),
  { ssr: false },
);

const ActivityTracker = dynamic(
  () =>
    import("@/components/activity-tracker").then((mod) => mod.ActivityTracker),
  { ssr: false },
);

export function ClientSideComponents() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const handle = window.requestIdleCallback
      ? window.requestIdleCallback(() => setShouldRender(true))
      : window.setTimeout(() => setShouldRender(true), 300);

    return () => {
      if (window.cancelIdleCallback && typeof handle === "number") {
        window.cancelIdleCallback(handle);
      } else {
        window.clearTimeout(handle);
      }
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <>
      <HeLiBot />
      <ActivityTracker />
    </>
  );
}
