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
      className="group flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md dark:border-slate-800 dark:bg-[#131B2E]/40 p-4 transition-all hover:border-lime-400/40"
    >
      <div>
        <span className="mb-1 block text-[10px] font-bold text-slate-900 uppercase opacity-60 dark:text-white">
          Theo dõi hành vi
        </span>
        <span className="block text-sm font-bold text-slate-900 transition-colors group-hover:text-lime-400 sm:text-base dark:text-white">
          Toast minh hoạ
        </span>
      </div>
      <span className="rounded border border-lime-400/20 bg-lime-400/10 px-2 py-1 text-xs text-lime-400 transition-all group-hover:scale-105">
        Bấm Test
      </span>
    </div>
  );
}
