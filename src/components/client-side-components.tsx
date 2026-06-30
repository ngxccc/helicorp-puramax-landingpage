"use client";

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
  return (
    <>
      <HeLiBot />
      <ActivityTracker />
    </>
  );
}
