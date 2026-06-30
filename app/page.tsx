import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/features/hero/components/hero-section";
import { DeviceMockup } from "@/features/hero/components/device-mockup";
import { XSecureSection } from "@/features/xsecure/components/x-secure-section";
import { SpecsSection } from "@/features/specs/components/specs-section";
import { TrialSection } from "@/features/trial/components/trial-section";
import { ChatProvider } from "@/components/chat-context";
import { Toaster } from "@/components/ui/sonner";
import { ScrollytellingWrapper } from "@/features/scrollytelling/components/scrollytelling-wrapper";
import { ClientSideComponents } from "@/components/client-side-components";

export default function Home() {
  return (
    <ChatProvider>
      <div className="bg-background relative min-h-screen overflow-x-clip font-sans text-slate-900 transition-colors duration-300 dark:text-white">
        {/* Toaster */}
        <Toaster position="top-right" />
        {/* Navigation Bar */}
        <Navbar />

        <main>
          {/* Hero Section Container */}
          <section
          id="tong-quan"
          className="xl:max-w-8xl relative mx-auto max-w-7xl px-4 pt-6 pb-12 sm:px-6 md:pt-10 md:pb-16 lg:px-8 lg:pt-12 lg:pb-20"
        >
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left Column (Server component) */}
            <HeroSection />

            {/* Right Column (Client component) */}
            <DeviceMockup />
          </div>

          {/* Hero Bottom Horizontal Cards (2 Cards side by side) */}
          <div className="relative z-10 mt-10 grid grid-cols-1 gap-6 text-left md:grid-cols-2">
            {/* Card 1: Cuộn kể chuyện */}
            <div className="group rounded-3xl bg-slate-100/80 p-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.02)] ring-1 ring-slate-200/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgb(0,0,0,0.04)] dark:bg-white/5 dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] dark:ring-white/10 dark:hover:shadow-[0_12px_40px_rgb(0,0,0,0.3)]">
              <div className="h-full rounded-[1.125rem] border border-slate-200/30 bg-white p-6 dark:border-slate-800/40 dark:bg-[#131B2E]/40">
                <span className="mb-2.5 inline-flex rounded-full bg-lime-400/10 px-3 py-1 text-[10px] font-bold tracking-widest text-lime-600 uppercase dark:text-lime-400">
                  Cuộn kể chuyện
                </span>
                <h2 className="mb-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Mở lớp máy
                </h2>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  Khi cuộn trang, lớp vỏ tách ra để lộ lồng xoay, lưới mềm, bình
                  xịt và thùng chứa, mô phỏng sinh động từng chi tiết thiết kế
                  bên trong thiết bị.
                </p>
              </div>
            </div>

            {/* Card 2: Tương tác */}
            <div className="group rounded-3xl bg-slate-100/80 p-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.02)] ring-1 ring-slate-200/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgb(0,0,0,0.04)] dark:bg-white/5 dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] dark:ring-white/10 dark:hover:shadow-[0_12px_40px_rgb(0,0,0,0.3)]">
              <div className="h-full rounded-[1.125rem] border border-slate-200/30 bg-white p-6 dark:border-slate-800/40 dark:bg-[#131B2E]/40">
                <span className="mb-2.5 inline-flex rounded-full bg-lime-400/10 px-3 py-1 text-[10px] font-bold tracking-widest text-lime-600 uppercase dark:text-lime-400">
                  Tương tác
                </span>
                <h2 className="mb-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Radar cảm biến
                </h2>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  Hotspot phát sáng mô phỏng vùng quét cảm biến, kiểm tra trọng
                  lượng thông minh và logic chống kẹp độc quyền hoạt động theo
                  thời gian thực.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Scrollytelling Section */}
        <ScrollytellingWrapper />

        {/* xSecure Section */}
        <XSecureSection />

        {/* Specifications Section */}
        <SpecsSection />

        {/* Register Trial Section */}
          <TrialSection />
        </main>
        {/* Footer Section */}
        <Footer />

        {/* Floating HeLiBot & Activity Tracker (loaded client-side dynamically) */}
        <ClientSideComponents />
      </div>
    </ChatProvider>
  );
}
