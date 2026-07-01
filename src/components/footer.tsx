"use client";

import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./social-icons";
import { Box } from "lucide-react";

const NAV_LINKS = [
  { href: "#tong-quan", label: "Tổng quan" },
  { href: "#xsecure", label: "Công nghệ xSecure" },
  { href: "#thong-so", label: "Thông số kỹ thuật" },
  { href: "#dung-thu", label: "Đăng ký dùng thử" },
] as const;

const LEGAL_LINKS = [
  {
    href: "#",
    label: "Chính sách bảo mật",
    onClick: async (e: React.MouseEvent) => {
      e.preventDefault();
      const { toast } = await import("sonner");
      toast.info("Chính sách bảo mật đang được cập nhật!");
    },
  },
  {
    href: "#",
    label: "Điều khoản sử dụng",
    onClick: async (e: React.MouseEvent) => {
      e.preventDefault();
      const { toast } = await import("sonner");
      toast.info("Điều khoản sử dụng đang được cập nhật!");
    },
  },
] as const;

const SOCIAL_LINKS = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    Icon: FacebookIcon,
    hoverColor: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    Icon: InstagramIcon,
    hoverColor: "hover:text-pink-600 dark:hover:text-pink-400",
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    Icon: YoutubeIcon,
    hoverColor: "hover:text-red-600 dark:hover:text-red-400",
  },
] as const;

const linkClassName =
  "text-slate-600 transition-colors duration-200 hover:text-lime-600 dark:text-zinc-400 dark:hover:text-lime-400";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark:bg-background border-t border-slate-200 bg-white pt-16 pb-8 transition-colors duration-300 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand Info */}
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

          <div className="hidden md:col-span-1 md:block" />

          {/* Links Column 1: Navigation (3 cols) */}
          <div className="flex flex-col text-left md:col-span-3">
            <span className="mb-4 text-xs font-bold tracking-widest text-slate-600 uppercase dark:text-zinc-400">
              Sản phẩm
            </span>
            <ul className="flex flex-col gap-3 text-sm font-semibold">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClassName}>
                    {link.label}
                  </a>
                </li>
              ))}
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
                  onClick={LEGAL_LINKS[0].onClick}
                  className={linkClassName}
                >
                  {LEGAL_LINKS[0].label}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={LEGAL_LINKS[1].onClick}
                  className={linkClassName}
                >
                  {LEGAL_LINKS[1].label}
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
            {SOCIAL_LINKS.map(({ href, label, Icon, hoverColor }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-200 hover:bg-slate-100 active:scale-95 dark:border-slate-800 dark:bg-[#131B2E]/20 dark:text-zinc-400 dark:hover:bg-[#131B2E]/60 ${hoverColor}`}
                aria-label={label}
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
