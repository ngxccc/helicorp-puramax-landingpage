"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { useTheme } from "@/components/theme-provider";

export function TrialForm() {
  const { isDark } = useTheme();

  const [selectedChips, setSelectedChips] = useState<string[]>([
    "REFILL KHỬ MÙI",
    "TÚI RÁC PURA MAX",
  ]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    cats: "1",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleChip = (chip: string) => {
    setSelectedChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip],
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.warning("Vui lòng nhập Họ tên và Số điện thoại!");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        "Đăng ký dùng thử thành công! HeLiCorp sẽ gọi cho bạn ngay.",
      );
      setFormData({ name: "", phone: "", email: "", cats: "1" });
    }, 1200);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl border p-8 text-left shadow-xl transition-colors duration-300 lg:col-span-7 ${
        isDark
          ? "border-slate-800/80 bg-[#131B2E]/20"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Họ tên */}
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="mb-2 text-xs font-bold tracking-wider text-slate-900 uppercase opacity-80 dark:text-white"
          >
            Họ tên
          </label>
          <input
            type="text"
            id="name"
            required
            placeholder="Nguyễn An"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-all outline-none ${
              isDark
                ? "border-slate-800 bg-[#0A0D14] text-white focus:border-lime-400"
                : "border-slate-200 bg-slate-50 text-slate-900 focus:border-lime-500"
            }`}
          />
        </div>

        {/* Số điện thoại */}
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="mb-2 text-xs font-bold tracking-wider text-slate-900 uppercase opacity-80 dark:text-white"
          >
            Số điện thoại
          </label>
          <input
            type="tel"
            id="phone"
            required
            placeholder="090 000 0000"
            value={formData.phone}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                phone: e.target.value,
              }))
            }
            className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-all outline-none ${
              isDark
                ? "border-slate-800 bg-[#0A0D14] text-white focus:border-lime-400"
                : "border-slate-200 bg-slate-50 text-slate-900 focus:border-lime-500"
            }`}
          />
        </div>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Email */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-2 text-xs font-bold tracking-wider text-slate-900 uppercase opacity-80 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="ban@email.com"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-all outline-none ${
              isDark
                ? "border-slate-800 bg-[#0A0D14] text-white focus:border-lime-400"
                : "border-slate-200 bg-slate-50 text-slate-900 focus:border-lime-500"
            }`}
          />
        </div>

        {/* Số mèo */}
        <div className="flex flex-col">
          <label
            htmlFor="cats"
            className="mb-2 text-xs font-bold tracking-wider text-slate-900 uppercase opacity-80 dark:text-white"
          >
            Số mèo
          </label>
          <input
            type="number"
            id="cats"
            min="1"
            max="10"
            placeholder="2"
            value={formData.cats}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, cats: e.target.value }))
            }
            className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-all outline-none ${
              isDark
                ? "border-slate-800 bg-[#0A0D14] text-white focus:border-lime-400"
                : "border-slate-200 bg-slate-50 text-slate-900 focus:border-lime-500"
            }`}
          />
        </div>
      </div>

      {/* Chips select: Gói đi kèm */}
      <div className="mb-8 flex flex-col">
        <span className="mb-3 block text-xs font-bold tracking-wider text-slate-900 uppercase opacity-80 dark:text-white">
          Gói đi kèm
        </span>
        <div className="flex flex-wrap gap-2">
          {["REFILL KHỬ MÙI", "TÚI RÁC PURA MAX", "HỖ TRỢ LẮP ĐẶT"].map(
            (chip) => {
              const active = selectedChips.includes(chip);
              return (
                <button
                  type="button"
                  key={chip}
                  onClick={() => toggleChip(chip)}
                  className={`cursor-pointer rounded-lg border px-4 py-2.5 text-xs font-bold transition-all ${
                    active
                      ? "border-lime-400 bg-lime-400 text-black shadow-md"
                      : isDark
                        ? "border-slate-800 bg-[#0A0D14]/60 text-zinc-400 hover:text-white"
                        : "border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-black"
                  }`}
                >
                  {chip} {active && "✓"}
                </button>
              );
            },
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 cursor-pointer rounded-xl bg-lime-400 py-4 text-sm font-bold text-black shadow-[0_4px_20px_rgba(163,230,53,0.3)] transition-all hover:scale-[1.01] hover:shadow-[0_4px_25px_rgba(163,230,53,0.4)] active:scale-95 disabled:opacity-50"
        >
          {isSubmitting ? "Đang xử lý..." : "Đăng ký →"}
        </button>

        <a
          href="tel:19001234"
          onClick={(e) => {
            e.preventDefault();
            toast.info(
              "Đang gọi tổng đài hỗ trợ HeLiCorp (1900 1234)...",
            );
          }}
          className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-6 py-4 text-center text-sm font-bold transition-all ${
            isDark
              ? "border-slate-800 bg-[#131B2E]/60 text-white hover:bg-[#1E293B]"
              : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
          }`}
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Gọi ngay
        </a>
      </div>
    </form>
  );
}
