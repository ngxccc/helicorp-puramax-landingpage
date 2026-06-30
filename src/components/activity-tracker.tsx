"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/theme-provider";

interface LogEvent {
  id: string;
  text: string;
  time: string;
}

export function ActivityTracker() {
  const { isDark } = useTheme();
  const [logs, setLogs] = useState<LogEvent[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addLog = (text: string) => {
    const now = new Date();
    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const newLog = {
      id: Math.random().toString(36).substring(2, 9),
      text,
      time,
    };

    setLogs((prev) => [newLog, ...prev.slice(0, 19)]); // Keep last 20 logs

  };

  // 1. Track Clicks
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const buttonOrLink = target.closest("button, a");

      if (buttonOrLink) {
        // Skip clicking tracker button itself to avoid infinite feedback loop
        if (buttonOrLink.closest("#tracker-toggle-btn") || buttonOrLink.closest("#clear-tracker-btn")) {
          return;
        }

        const text = buttonOrLink.textContent?.trim() || "";
        const type = buttonOrLink.tagName.toLowerCase() === "button" ? "Nút bấm" : "Liên kết";
        const label = text.length > 20 ? `${text.substring(0, 20)}...` : text;
        addLog(`Click: ${type} "${label || "Không nhãn"}"`);
      }
    };

    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, []);

  // 2. Track Scrolls (using IntersectionObserver)
  useEffect(() => {
    const sections = [
      { id: "tong-quan", label: "Tổng quan Hero" },
      { id: "scrollytelling", label: "So sánh Scrollytelling" },
      { id: "xsecure", label: "Cảm biến xSecure" },
      { id: "thong-so", label: "Thông số kỹ thuật" },
      { id: "dung-thu", label: "Đăng ký dùng thử" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const section = sections.find((s) => s.id === id);
            if (section) {
              addLog(`Xem phần: "${section.label}"`);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-40 text-left font-sans">
      {/* Toggle Button */}
      <button
        id="tracker-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-lime-400 text-black shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all"
        title="Nhật ký hành vi thời gian thực"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M12 20h9M3 20v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8M3 20h6M13 20v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
        </svg>
        {logs.length > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white animate-pulse">
            {logs.length}
          </span>
        )}
      </button>

      {/* Logs Drawer */}
      {isOpen && (
        <div
          className={`absolute bottom-14 left-0 flex w-72 max-h-80 flex-col overflow-hidden rounded-2xl border p-4 shadow-2xl transition-all duration-300 ${
            isDark
              ? "border-slate-800 bg-[#131B2E]/95 text-white"
              : "border-slate-200 bg-white/95 text-slate-800"
          }`}
        >
          {/* Header */}
          <div className="mb-3 flex items-center justify-between border-b pb-2 dark:border-slate-800 border-slate-100">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-[10px] font-bold tracking-wider uppercase opacity-80">
                NHẬT KÝ HÀNH VI (LIVE)
              </span>
            </div>
            {logs.length > 0 && (
              <button
                id="clear-tracker-btn"
                onClick={() => setLogs([])}
                className="text-[9px] cursor-pointer font-bold text-red-500 hover:text-red-400"
              >
                Xóa sạch
              </button>
            )}
          </div>

          {/* Logs List */}
          <div className="flex-1 overflow-y-auto scrollbar-thin pr-1 text-[11px] leading-relaxed flex flex-col gap-2 max-h-56">
            {logs.length === 0 ? (
              <div className="py-8 text-center text-zinc-500">
                Chưa ghi nhận hành vi nào. Cuộn chuột hoặc click nút để theo dõi.
              </div>
            ) : (
              logs.map((log) => (
                <div
                  key={log.id}
                  className="flex flex-col border-b border-slate-100 dark:border-slate-800/40 pb-1.5 last:border-b-0 animate-fadeIn"
                >
                  <span className="text-[9px] text-zinc-500 font-medium">
                    {log.time}
                  </span>
                  <span className="font-semibold">{log.text}</span>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
