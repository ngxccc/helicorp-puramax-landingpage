"use client";

import { useEffect, useRef, useCallback } from "react";
import { toast } from "sonner";

export function UserTracker() {
  const trackedDepths = useRef<Record<number, boolean>>({
    25: false,
    50: false,
    75: false,
  });

  const sendEventToWebhook = useCallback(async (
    eventName: string,
    metadata: Record<string, unknown> = {},
  ) => {
    try {
      await fetch("/api/webhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "track",
          eventName,
          metadata: {
            ...metadata,
            viewportWidth:
              typeof window !== "undefined" ? window.innerWidth : 0,
            viewportHeight:
              typeof window !== "undefined" ? window.innerHeight : 0,
            userAgent:
              typeof navigator !== "undefined" ? navigator.userAgent : "unknown",
          },
        }),
      });
    } catch {
      // Fail silently in the background
    }
  }, []);

  const logTrack = useCallback((
    message: string,
    eventName: string,
    metadata: Record<string, unknown> = {},
  ) => {
    // Show a user-friendly toast notification
    toast.info(`[Hành vi] ${message}`, {
      description: "Ghi nhận hành vi người dùng tại website",
      duration: 1800,
    });
    // Send event to the webhook route
    void sendEventToWebhook(eventName, metadata);
  }, [sendEventToWebhook]);

  const scrollHeightRef = useRef<number>(0);

  // Cache scroll height calculation to prevent forced reflows on scroll
  useEffect(() => {
    const updateScrollHeight = () => {
      if (typeof document !== "undefined" && typeof window !== "undefined") {
        scrollHeightRef.current =
          document.documentElement.scrollHeight - window.innerHeight;
      }
    };

    updateScrollHeight();

    window.addEventListener("resize", updateScrollHeight);
    return () => window.removeEventListener("resize", updateScrollHeight);
  }, []);

  // 1. Track Scroll Depths (25%, 50%, 75%)
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = scrollHeightRef.current;

      if (scrollHeight <= 0) return;

      const percent = Math.round((scrollTop / scrollHeight) * 100);

      // Check thresholds
      [25, 50, 75].forEach((depth) => {
        if (percent >= depth && !trackedDepths.current[depth]) {
          trackedDepths.current[depth] = true;
          logTrack(
            `Người dùng cuộn trang đạt ${depth}% chiều dài website`,
            `Scroll Depth ${depth}%`,
            { percentScrolled: percent },
          );
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logTrack]);

  // 2. Track Clicks on Buttons and Links (CTAs)
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickableElement = target.closest("button, a");

      if (clickableElement) {
        // Skip clicking chatbot or toggle buttons to prevent tracking spam
        if (
          clickableElement.closest("#tracker-toggle-btn") ||
          clickableElement.closest("#clear-tracker-btn")
        ) {
          return;
        }

        const text = clickableElement.textContent?.trim() || "";
        const tag = clickableElement.tagName.toLowerCase();
        const type = tag === "button" ? "Nút bấm" : "Liên kết";
        const label = text.length > 20 ? `${text.substring(0, 20)}...` : text;

        logTrack(`Click: ${type} "${label || "Không nhãn"}"`, `Click Element`, {
          elementTag: tag,
          elementText: text,
          elementId: clickableElement.id || "none",
          elementClass: clickableElement.className || "none",
        });
      }
    };

    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, [logTrack]);

  // This component runs in the background and has no visible markup
  return null;
}
