import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { UserTracker } from "@/components/user-tracker";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "HELICORP - PETKIT Pura Max",
  description:
    "Chăm mèo nhàn tênh thời đại công nghệ - Phân phối PETKIT chính hãng bởi HeLiCorp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={cn(
        "dark",
        "h-full",
        "antialiased",
        plusJakarta.variable,
        "font-sans",
        geist.variable,
      )}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() { try { var theme = localStorage.getItem('theme') || 'dark'; var root = document.documentElement; root.classList.remove('light', 'dark'); root.classList.add(theme); root.style.colorScheme = theme; } catch (e) {} })();`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-white text-slate-900 transition-colors duration-300 selection:bg-lime-400 selection:text-black dark:bg-[#0A0D14] dark:text-white">
        <ThemeProvider>{children}</ThemeProvider>
        <UserTracker />
      </body>
    </html>
  );
}
