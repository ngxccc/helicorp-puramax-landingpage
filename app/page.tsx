import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/features/hero/components/hero-section";
import { DeviceMockup } from "@/features/hero/components/device-mockup";
import { XSecureSection } from "@/features/xsecure/components/x-secure-section";
import { SpecsSection } from "@/features/specs/components/specs-section";
import { TrialSection } from "@/features/trial/components/trial-section";
import { HeLiBot } from "@/features/chatbot/components/he-li-bot";
import { ChatProvider } from "@/components/chat-context";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <ThemeProvider>
      <ChatProvider>
        <div className="relative min-h-screen bg-[#F8FAFC] font-sans text-slate-900 transition-colors duration-300 dark:bg-[#0A0D14] dark:text-white">
          {/* Toaster */}
          <Toaster position="top-right" />
          {/* Navigation Bar */}
          <Navbar />

          {/* Hero Section Container */}
          <section
            id="tong-quan"
            className="xl:max-w-8xl relative mx-auto max-w-7xl px-4 pt-12 pb-24 sm:px-6 md:py-32 lg:px-8"
          >
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
              {/* Left Column (Server component) */}
              <HeroSection />

              {/* Right Column (Client component) */}
              <DeviceMockup />
            </div>

            {/* Hero Bottom Horizontal Cards (2 Cards side by side) */}
            <div className="relative z-10 mt-16 grid grid-cols-1 gap-6 text-left md:grid-cols-2">
              {/* Card 1: Cuộn kể chuyện */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-800 shadow-sm transition-all hover:scale-[1.01] dark:border-slate-800/80 dark:bg-[#131B2E]/40 dark:text-white">
                <span className="mb-2 block text-[10px] font-bold tracking-widest text-lime-400 uppercase">
                  Cuộn kể chuyện
                </span>
                <h3 className="mb-2 text-xl font-bold">Mở lớp máy</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                  Khi cuộn trang, lớp vỏ tách ra để lộ lồng xoay, lưới mềm, bình
                  xịt và thùng chứa, mô phỏng sinh động từng chi tiết thiết kế
                  bên trong thiết bị.
                </p>
              </div>

              {/* Card 2: Tương tác */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-800 shadow-sm transition-all hover:scale-[1.01] dark:border-slate-800/80 dark:bg-[#131B2E]/40 dark:text-white">
                <span className="mb-2 block text-[10px] font-bold tracking-widest text-lime-400 uppercase">
                  Tương tác
                </span>
                <h3 className="mb-2 text-xl font-bold">Radar cảm biến</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                  Hotspot phát sáng mô phỏng vùng quét cảm biến, kiểm tra trọng
                  lượng thông minh và logic chống kẹp độc quyền hoạt động theo
                  thời gian thực.
                </p>
              </div>
            </div>
          </section>

          {/* xSecure Section */}
          <XSecureSection />

          {/* Specifications Section */}
          <SpecsSection />

          {/* Register Trial Section */}
          <TrialSection />

          {/* Footer Section */}
          <Footer />

          {/* Floating HeLiBot Chatbot */}
          <HeLiBot />
        </div>
      </ChatProvider>
    </ThemeProvider>
  );
}
