"use client";

import { toast } from "sonner";

export function ToastCommitmentCard() {
  return (
    <div
      onClick={() =>
        toast.success(
          "Toast minh hoạ hoạt động! Hệ thống thông báo thời gian thực.",
        )
      }
      className="group cursor-pointer rounded-2xl bg-black/5 p-1.5 ring-1 ring-black/5 transition-all duration-200 select-none active:scale-[0.98] dark:bg-white/5 dark:ring-white/10"
    >
      <div className="flex items-center justify-between rounded-[calc(1rem-0.375rem)] border border-slate-200/50 bg-white p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition-all group-hover:border-lime-400/40 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_12px_rgba(163,230,53,0.05)] dark:border-white/10 dark:bg-[#131B2E]/60 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:group-hover:border-lime-400/40 dark:group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_4px_12px_rgba(163,230,53,0.05)]">
        <div>
          <span className="mb-1 block text-[10px] font-bold text-slate-900 uppercase opacity-60 dark:text-white">
            Theo dõi hành vi
          </span>
          <span className="block text-sm font-bold text-slate-900 transition-colors group-hover:text-lime-400 sm:text-base dark:text-white">
            Toast minh hoạ
          </span>
        </div>
        <span className="rounded border border-lime-400/20 bg-lime-400/10 px-2 py-1 text-xs text-lime-400 transition-all duration-200 group-hover:bg-lime-400 group-hover:text-black">
          Bấm Test
        </span>
      </div>
    </div>
  );
}
