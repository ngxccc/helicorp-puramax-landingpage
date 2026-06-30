"use client";

import { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { BarChart } from "lucide-react";

interface LogEvent {
  id: string;
  text: string;
  time: string;
}

export function ActivityTracker() {
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
        if (
          buttonOrLink.closest("#tracker-toggle-btn") ||
          buttonOrLink.closest("#clear-tracker-btn")
        ) {
          return;
        }

        const text = buttonOrLink.textContent?.trim() || "";
        const type =
          buttonOrLink.tagName.toLowerCase() === "button"
            ? "Nút bấm"
            : "Liên kết";
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
      { threshold: 0.3 },
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-6 left-4 z-40 text-left font-sans">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            id="tracker-toggle-btn"
            variant="default"
            size="icon"
            className="h-12 w-12 bg-lime-400 text-black shadow-lg active:scale-95"
            title="Nhật ký hành vi thời gian thực"
            onClick={() => setIsOpen(!isOpen)}
          >
            <BarChart className="h-5 w-5" />
            {logs.length > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                {logs.length}
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          align="start"
          sideOffset={8}
          className="bg-popover text-popover-foreground flex max-h-80 w-72 flex-col overflow-hidden rounded-2xl border p-4 shadow-2xl dark:border-slate-800"
        >
          {/* Header */}
          <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2 shrink-0 self-center">
                <span className="absolute inset-0 inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
              </span>
              <span className="text-[10px] leading-none font-bold tracking-wider uppercase opacity-80">
                NHẬT KÝ HÀNH VI (LIVE)
              </span>
            </div>
            {logs.length > 0 && (
              <Button
                id="clear-tracker-btn"
                variant="ghost"
                onClick={() => setLogs([])}
                className="text-[9px] font-bold text-red-500 hover:text-red-400"
              >
                Xóa sạch
              </Button>
            )}
          </div>

          {/* Logs List */}
          <div className="flex max-h-56 flex-1 scrollbar-thin flex-col gap-2 overflow-y-auto pr-1 text-[11px] leading-relaxed">
            {logs.length === 0 ? (
              <div className="py-8 text-center text-zinc-500">
                Chưa ghi nhận hành vi nào. Cuộn chuột hoặc click nút để theo
                dõi.
              </div>
            ) : (
              logs.map((log) => (
                <div
                  key={log.id}
                  className="animate-fadeIn flex flex-col border-b border-slate-100 pb-1.5 last:border-b-0 dark:border-slate-800/40"
                >
                  <span className="text-[9px] font-medium text-zinc-500">
                    {log.time}
                  </span>
                  <span className="font-semibold">{log.text}</span>
                </div>
              ))
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
