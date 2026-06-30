"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function TrialForm() {
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
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    cats: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleChip = (chip: string) => {
    setSelectedChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Client-side Validation
    const newErrors = {
      name: "",
      phone: "",
      email: "",
      cats: "",
    };
    let hasError = false;

    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = "Họ tên phải có ít nhất 2 ký tự!";
      hasError = true;
    }

    const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
    const cleanPhone = formData.phone.replace(/\s/g, "");
    if (!formData.phone || !phoneRegex.test(cleanPhone)) {
      newErrors.phone = "Số điện thoại không hợp lệ! (Ví dụ: 0901234567)";
      hasError = true;
    }

    if (formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Email không hợp lệ!";
        hasError = true;
      }
    }

    const numCats = parseInt(formData.cats, 10);
    if (isNaN(numCats) || numCats < 1 || numCats > 10) {
      newErrors.cats = "Số mèo phải từ 1 đến 10 bé!";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      toast.error("Vui lòng kiểm tra lại thông tin đăng ký!");
      return;
    }

    setErrors({ name: "", phone: "", email: "", cats: "" });
    setIsSubmitting(true);
    try {
      // 2. Send data to webhook
      const response = await fetch("/api/webhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          selectedChips,
        }),
      });

      const resData = (await response.json()) as {
        success: boolean;
        error?: string;
      };

      if (!response.ok || !resData.success) {
        throw new Error(resData.error ?? "Gửi thông tin thất bại!");
      }

      toast.success(
        "Đăng ký dùng thử thành công! Dữ liệu đã gửi về Webhook hợp lệ.",
      );
      setFormData({ name: "", phone: "", email: "", cats: "1" });
    } catch (error) {
      const errMsg =
        error instanceof Error ? error.message : "Gửi dữ liệu thất bại!";
      toast.error(errMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200/80 bg-white/70 p-6 text-left shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] backdrop-blur-md transition-all duration-300 sm:p-8 lg:col-span-7 dark:border-white/10 dark:bg-[#131B2E]/40 dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)]"
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
            placeholder="Nguyễn An"
            value={formData.name}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, name: e.target.value }));
              if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
            }}
            className={`dark:bg-background rounded-xl border bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 placeholder-slate-400 transition-all duration-200 outline-none dark:text-white dark:placeholder-slate-500 ${
              errors.name
                ? "border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 dark:border-red-500/80"
                : "border-slate-200 focus:border-lime-500 focus:ring-4 focus:ring-lime-500/10 dark:border-slate-800 dark:focus:border-lime-400 dark:focus:ring-lime-400/10"
            }`}
          />
          {errors.name && (
            <span className="mt-1.5 text-xs font-semibold text-red-500 transition-all duration-200 dark:text-red-400">
              {errors.name}
            </span>
          )}
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
            placeholder="090 000 0000"
            value={formData.phone}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, phone: e.target.value }));
              if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
            }}
            className={`dark:bg-background rounded-xl border bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 placeholder-slate-400 transition-all duration-200 outline-none dark:text-white dark:placeholder-slate-500 ${
              errors.phone
                ? "border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 dark:border-red-500/80"
                : "border-slate-200 focus:border-lime-500 focus:ring-4 focus:ring-lime-500/10 dark:border-slate-800 dark:focus:border-lime-400 dark:focus:ring-lime-400/10"
            }`}
          />
          {errors.phone && (
            <span className="mt-1.5 text-xs font-semibold text-red-500 transition-all duration-200 dark:text-red-400">
              {errors.phone}
            </span>
          )}
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
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, email: e.target.value }));
              if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
            }}
            className={`dark:bg-background rounded-xl border bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 placeholder-slate-400 transition-all duration-200 outline-none dark:text-white dark:placeholder-slate-500 ${
              errors.email
                ? "border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 dark:border-red-500/80"
                : "border-slate-200 focus:border-lime-500 focus:ring-4 focus:ring-lime-500/10 dark:border-slate-800 dark:focus:border-lime-400 dark:focus:ring-lime-400/10"
            }`}
          />
          {errors.email && (
            <span className="mt-1.5 text-xs font-semibold text-red-500 transition-all duration-200 dark:text-red-400">
              {errors.email}
            </span>
          )}
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
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, cats: e.target.value }));
              if (errors.cats) setErrors((prev) => ({ ...prev, cats: "" }));
            }}
            className={`dark:bg-background rounded-xl border bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 placeholder-slate-400 transition-all duration-200 outline-none dark:text-white dark:placeholder-slate-500 ${
              errors.cats
                ? "border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 dark:border-red-500/80"
                : "border-slate-200 focus:border-lime-500 focus:ring-4 focus:ring-lime-500/10 dark:border-slate-800 dark:focus:border-lime-400 dark:focus:ring-lime-400/10"
            }`}
          />
          {errors.cats && (
            <span className="mt-1.5 text-xs font-semibold text-red-500 transition-all duration-200 dark:text-red-400">
              {errors.cats}
            </span>
          )}
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
                <Button
                  type="button"
                  key={chip}
                  variant={active ? "default" : "outline"}
                  onClick={() => toggleChip(chip)}
                  className={`text-xs font-bold ${active ? "bg-lime-400 text-black shadow-md" : ""}`}
                >
                  {chip} {active && "✓"}
                </Button>
              );
            },
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="group flex flex-1 cursor-pointer items-center justify-between rounded-xl bg-lime-400 py-2 pr-2 pl-6 text-sm font-bold text-black shadow-[0_4px_20px_rgba(163,230,53,0.3)] transition-all duration-200 select-none hover:shadow-[0_4px_25px_rgba(163,230,53,0.4)] active:translate-y-px active:scale-[0.97] disabled:opacity-50"
        >
          <span>{isSubmitting ? "Đang xử lý..." : "Đăng ký dùng thử"}</span>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/10 transition-transform duration-200 group-hover:translate-x-0.5">
            <ArrowRight className="h-4 w-4" />
          </span>
        </Button>

        <a
          href="tel:19001234"
          onClick={(e) => {
            e.preventDefault();
            toast.info("Đang gọi tổng đài hỗ trợ HeLiCorp (1900 1234)...");
          }}
          className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-4 text-slate-800 transition-all duration-200 select-none hover:bg-slate-50 active:translate-y-px active:scale-[0.97] dark:border-slate-800 dark:bg-[#131B2E]/60 dark:text-white dark:hover:bg-[#1E293B]"
        >
          <Phone className="h-4 w-4" />
          Gọi ngay
        </a>
      </div>
    </form>
  );
}
