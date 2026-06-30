"use client";

import { toast } from "sonner";
import { Box } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./social-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="dark:bg-background border-t border-slate-200 bg-white pt-16 pb-8 transition-colors duration-300 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand Info (5 cols) */}
          <div className="flex flex-col text-left md:col-span-5">
            <a
              href="#tong-quan"
              className="decoration-none mb-5 flex items-center gap-3 text-current"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400 text-black shadow-sm">
                <Box className="h-5.5 w-5.5" />
              </div>
              <span className="text-lg font-black tracking-[0.15em] text-slate-900 dark:text-white">
                HELICORP
              </span>
            </a>
            <p className="max-w-md text-sm leading-relaxed font-medium text-slate-500 dark:text-zinc-400">
              HeLiCorp phân phối PETKIT chính hãng tại Việt Nam. Sẵn hàng trải
              nghiệm thực tế, cung cấp phụ kiện túi rác, lõi refill chính hãng
              và hỗ trợ lắp đặt trọn gói tận nơi cho nhà riêng, chung cư và cơ
              sở nuôi thú cưng chuyên nghiệp.
            </p>
          </div>

          {/* Spacer on md */}
          <div className="hidden md:col-span-1 md:block" />

          {/* Links Column 1: Navigation (3 cols) */}
          <div className="flex flex-col text-left md:col-span-3">
            <span className="mb-4 text-xs font-bold tracking-widest text-slate-600 uppercase dark:text-zinc-400">
              Sản phẩm
            </span>
            <ul className="flex flex-col gap-3 text-sm font-semibold">
              <li>
                <a
                  href="#tong-quan"
                  className="text-slate-600 transition-colors duration-200 hover:text-lime-600 dark:text-zinc-400 dark:hover:text-lime-400"
                >
                  Tổng quan
                </a>
              </li>
              <li>
                <a
                  href="#xsecure"
                  className="text-slate-600 transition-colors duration-200 hover:text-lime-600 dark:text-zinc-400 dark:hover:text-lime-400"
                >
                  Công nghệ xSecure
                </a>
              </li>
              <li>
                <a
                  href="#thong-so"
                  className="text-slate-600 transition-colors duration-200 hover:text-lime-600 dark:text-zinc-400 dark:hover:text-lime-400"
                >
                  Thông số kỹ thuật
                </a>
              </li>
              <li>
                <a
                  href="#dung-thu"
                  className="text-slate-600 transition-colors duration-200 hover:text-lime-600 dark:text-zinc-400 dark:hover:text-lime-400"
                >
                  Đăng ký dùng thử
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Legal & Contact (3 cols) */}
          <div className="flex flex-col text-left md:col-span-3">
            <span className="mb-4 text-xs font-bold tracking-widest text-slate-600 uppercase dark:text-zinc-400">
              Thông tin & Pháp lý
            </span>
            <ul className="flex flex-col gap-3 text-sm font-semibold">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toast.info("Chính sách bảo mật đang được cập nhật!");
                  }}
                  className="text-slate-600 transition-colors duration-200 hover:text-lime-600 dark:text-zinc-400 dark:hover:text-lime-400"
                >
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toast.info("Điều khoản sử dụng đang được cập nhật!");
                  }}
                  className="text-slate-600 transition-colors duration-200 hover:text-lime-600 dark:text-zinc-400 dark:hover:text-lime-400"
                >
                  Điều khoản sử dụng
                </a>
              </li>
              <li className="pt-1 text-xs font-medium text-slate-600 dark:text-zinc-400">
                Hotline:{" "}
                <a
                  href="tel:19001234"
                  className="font-bold text-slate-700 hover:text-lime-600 dark:text-zinc-300 dark:hover:text-lime-400"
                >
                  1900 1234
                </a>
              </li>
              <li className="text-xs font-medium text-slate-600 dark:text-zinc-400">
                Email:{" "}
                <a
                  href="mailto:contact@helicorp.vn"
                  className="font-bold text-slate-700 hover:text-lime-600 dark:text-zinc-300 dark:hover:text-lime-400"
                >
                  contact@helicorp.vn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-slate-200/60 dark:border-slate-800/40" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-6 text-xs font-semibold sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <div className="text-left font-medium text-slate-600 dark:text-zinc-400">
            © {currentYear} HeLiCorp PETKIT Việt Nam. Tất cả quyền được bảo lưu.
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 hover:text-blue-600 active:scale-95 dark:border-slate-800 dark:bg-[#131B2E]/20 dark:text-zinc-400 dark:hover:bg-[#131B2E]/60 dark:hover:text-blue-400"
              aria-label="Facebook"
            >
              <FacebookIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 hover:text-pink-600 active:scale-95 dark:border-slate-800 dark:bg-[#131B2E]/20 dark:text-zinc-400 dark:hover:bg-[#131B2E]/60 dark:hover:text-pink-400"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 hover:text-red-600 active:scale-95 dark:border-slate-800 dark:bg-[#131B2E]/20 dark:text-zinc-400 dark:hover:bg-[#131B2E]/60 dark:hover:text-red-400"
              aria-label="YouTube"
            >
              <YoutubeIcon className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
