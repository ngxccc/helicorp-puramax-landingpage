"use client";

import { toast } from "sonner";

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
                <svg
                  className="h-5.5 w-5.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
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
              <svg
                className="h-4.5 w-4.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 hover:text-pink-600 active:scale-95 dark:border-slate-800 dark:bg-[#131B2E]/20 dark:text-zinc-400 dark:hover:bg-[#131B2E]/60 dark:hover:text-pink-400"
              aria-label="Instagram"
            >
              <svg
                className="h-4.5 w-4.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 hover:text-red-600 active:scale-95 dark:border-slate-800 dark:bg-[#131B2E]/20 dark:text-zinc-400 dark:hover:bg-[#131B2E]/60 dark:hover:text-red-400"
              aria-label="YouTube"
            >
              <svg
                className="h-4.5 w-4.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
