"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger client-side only
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ScrollytellingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Set up ScrollTriggers for the 7 scroll zones
      const trigger1 = containerRef.current.querySelector("#trigger-zone-1");
      const trigger2 = containerRef.current.querySelector("#trigger-zone-2");
      const trigger3 = containerRef.current.querySelector("#trigger-zone-3");
      const trigger4 = containerRef.current.querySelector("#trigger-zone-4");
      const trigger5 = containerRef.current.querySelector("#trigger-zone-5");
      const trigger6 = containerRef.current.querySelector("#trigger-zone-6");
      const trigger7 = containerRef.current.querySelector("#trigger-zone-7");

      const zones = [
        trigger1,
        trigger2,
        trigger3,
        trigger4,
        trigger5,
        trigger6,
        trigger7,
      ];

      zones.forEach((zone, index) => {
        if (!zone) return;
        ScrollTrigger.create({
          trigger: zone,
          start: "top 50%",
          end: "bottom 50%",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveStep(index);
            }
          },
        });
      });

      // 1. Parallax BG 1 - Light volumetric motion
      gsap.fromTo(
        ".parallax-bg-1",
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        },
      );

      // 2. Parallax BG 2 - Faster, counter-motion volumetric glow
      gsap.fromTo(
        ".parallax-bg-2",
        { yPercent: 10 },
        {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        },
      );

      // 3. Desktop-only Counter-Parallax
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        // Counter-Parallax Left Column (Text Container)
        gsap.fromTo(
          ".parallax-text-container",
          { y: -20 },
          {
            y: 20,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );

        // Counter-Parallax Right Column (Media Container)
        gsap.fromTo(
          ".parallax-media-container",
          { y: 30 },
          {
            y: -30,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      id="scrollytelling"
      className="dark:bg-background relative h-[560vh] w-full border-t border-slate-200 bg-white transition-colors duration-300 dark:border-slate-800/40"
    >
      {/* Background Parallax Ambient Glow Elements */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="parallax-bg-1 absolute top-[10%] left-[5%] h-87.5 w-87.5 rounded-full bg-lime-500/10 blur-3xl" />
        <div className="parallax-bg-2 absolute right-[5%] bottom-[15%] h-100 w-100 rounded-full bg-lime-400/10 blur-3xl" />
      </div>

      {/* 7 Invisible Tracker Zones in the scroll container */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-full">
        <div id="trigger-zone-1" className="h-[80vh]" />
        <div id="trigger-zone-2" className="h-[80vh]" />
        <div id="trigger-zone-3" className="h-[80vh]" />
        <div id="trigger-zone-4" className="h-[80vh]" />
        <div id="trigger-zone-5" className="h-[80vh]" />
        <div id="trigger-zone-6" className="h-[80vh]" />
        <div id="trigger-zone-7" className="h-[80vh]" />
      </div>

      {/* Sticky Viewport Container - Locks the grid centered on the screen */}
      <div className="sticky top-0 z-10 flex h-screen w-full items-center justify-center overflow-hidden">
        <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
          {/* Header Text */}
          <div className="mb-6 max-w-3xl text-left lg:mb-10">
            <span className="mb-2 block text-xs font-bold tracking-widest text-lime-400 uppercase">
              SO SÁNH CẢI TIẾN CHI TIẾT
            </span>
            <h2 className="lg:text-3.5xl mb-3 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Bảng so sánh nâng cấp công nghệ Pura Max 2
            </h2>
            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-zinc-400">
              Helicorp mang đến cái nhìn trực quan nhất về sự nâng cấp vượt bậc
              trên thế hệ cải tiến mới. Cuộn chuột để xem chi tiết so sánh từng
              công nghệ nâng cấp.
            </p>
          </div>

          {/* Dual Sticky Content Layout */}
          <div className="grid w-full grid-cols-1 items-center gap-4 lg:grid-cols-12 lg:gap-8">
            {/* Left Column: Descriptive Panels (5 cols) - In-place Cross-fading Stack */}
            {/* Left Column: Descriptive Panels (5 cols) - In-place Cross-fading Stack */}
            <div className="parallax-text-container relative order-last flex h-96 w-full flex-col justify-start pt-2 sm:h-110 lg:order-first lg:col-span-5 lg:h-137.5 lg:justify-center lg:pt-0">
              {/* Panel 1: Những điểm cải tiến */}
              <div
                className={`absolute inset-0 flex flex-col justify-start pt-2 transition-all duration-500 ease-in-out lg:justify-center lg:pt-0 ${
                  activeStep === 0
                    ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                    : activeStep < 0
                      ? "pointer-events-none -translate-y-4 scale-95 opacity-0"
                      : "pointer-events-none translate-y-4 scale-95 opacity-0"
                }`}
              >
                <span className="mb-1 block text-xs font-bold tracking-wider text-lime-400 uppercase lg:text-sm">
                  TỔNG HỢP CẢI TIẾN
                </span>
                <h3 className="mb-2 text-xl leading-tight font-extrabold text-slate-900 lg:text-2xl dark:text-white">
                  Những điểm cải tiến
                </h3>
                <p className="mb-2 text-sm leading-relaxed text-slate-600 lg:text-[15px] dark:text-zinc-400">
                  So với phiên bản 2024, máy dọn phân mèo PETKIT Pura Max 2 đã
                  nâng cấp thiết kế mới nhằm mang lại trải nghiệm sử dụng ổn
                  định và thông minh hơn:
                </p>
                <div className="grid max-h-45 scrollbar-thin grid-cols-1 gap-2 overflow-y-auto pr-1 text-xs leading-relaxed lg:max-h-none lg:overflow-visible lg:pr-0 lg:text-sm">
                  <div className="border-l-2 border-lime-500 pl-2">
                    <span className="font-bold text-slate-800 dark:text-zinc-200">
                      Nâng cấp lồng chứa cát:
                    </span>
                    <p className="mt-0.5 text-slate-600 dark:text-zinc-400">
                      Thiết kế mới giúp ngăn chặn rò rỉ nước tiểu, đồng thời dễ
                      dàng tháo lắp và vệ sinh hơn.
                    </p>
                  </div>
                  <div className="border-l-2 border-lime-500 pl-2">
                    <span className="font-bold text-slate-800 dark:text-zinc-200">
                      Trang bị tấm lót chống dính:
                    </span>
                    <p className="mt-0.5 text-slate-600 dark:text-zinc-400">
                      Hỗ trợ chống thấm, chống trầy xước và chống dính hiệu quả.
                      Phần vành tấm lót sử dụng cấu trúc viền liền mạch kết hợp
                      lớp silicon chống thấm ngăn nước tiểu rò rỉ ra ngoài.
                    </p>
                  </div>
                  <div className="border-l-2 border-lime-500 pl-2">
                    <span className="font-bold text-slate-800 dark:text-zinc-200">
                      Phiên bản sáp N50 2.0 mới:
                    </span>
                    <p className="mt-0.5 text-slate-600 dark:text-zinc-400">
                      Thiết kế bọc nhựa khay riêng giúp sạch tay khi thay thế,
                      mùi hương dễ chịu và hỗ trợ ngăn mùi hôi hiệu quả.
                    </p>
                  </div>
                  <div className="border-l-2 border-lime-500 pl-2">
                    <span className="font-bold text-slate-800 dark:text-zinc-200">
                      Tấm chắn xả cát nam châm:
                    </span>
                    <p className="mt-0.5 text-slate-600 dark:text-zinc-400">
                      Tấm chắn xả cát tích hợp nam châm từ tính giúp tháo lắp
                      nhanh chóng chỉ trong 1 giây, vô cùng thuận tiện khi vệ
                      sinh máy.
                    </p>
                  </div>
                  <div className="border-l-2 border-lime-500 pl-2">
                    <span className="font-bold text-slate-800 dark:text-zinc-200">
                      Nâng cấp hệ trục từ 2 lên 4 bánh:
                    </span>
                    <p className="mt-0.5 text-slate-600 dark:text-zinc-400">
                      Nâng cấp cơ trục lên 4 bánh xe đỡ lực phân bổ đều lồng
                      quay, giúp hoạt động êm ái, ổn định và trơn tru.
                    </p>
                  </div>
                </div>
              </div>

              {/* Panel 2: Phiên bản cải tiến */}
              <div
                className={`absolute inset-0 flex flex-col justify-start pt-2 transition-all duration-500 ease-in-out lg:justify-center lg:pt-0 ${
                  activeStep === 1
                    ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                    : activeStep < 1
                      ? "pointer-events-none -translate-y-4 scale-95 opacity-0"
                      : "pointer-events-none translate-y-4 scale-95 opacity-0"
                }`}
              >
                <span className="mb-1.5 block text-xs font-bold tracking-wider text-lime-400 uppercase lg:text-sm">
                  THẾ HỆ MỚI 2026
                </span>
                <h3 className="mb-3 text-xl font-extrabold text-slate-900 lg:text-2xl dark:text-white">
                  Phiên bản cải tiến
                </h3>
                <div className="mb-3 space-y-3 text-sm leading-relaxed text-slate-600 lg:text-[15px] dark:text-zinc-300">
                  <p>
                    Máy dọn phân mèo PETKIT Pura Max 2 là phiên bản cải tiến của
                    máy dọn vệ sinh mèo PETKIT Pura Max 2024. Sản phẩm được làm
                    từ chất liệu nhựa ABS cao cấp, giúp tăng độ bền và hạn chế
                    trầy xước trong quá trình sử dụng.
                  </p>
                  <p>
                    Kích thước cửa ra vào rộng rãi (25.5 x 20cm), giúp mèo dễ
                    dàng di chuyển, thuận tiện với các bé mèo chân ngắn. Đồng
                    thời, máy dọn phân mèo phù hợp cho cả mèo nhỏ lẫn mèo lớn có
                    trọng lượng từ 1.5 - 10 kg.
                  </p>
                </div>
                <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-2.5 text-xs text-yellow-600 lg:text-sm dark:text-yellow-400">
                  <strong>Lưu ý từ Helicorp:</strong> Với các bé mèo chân ngắn,
                  mèo con hoặc mèo đang có thai, bạn có thể trang bị thêm bậc
                  thang tăng chiều cao để hỗ trợ việc ra vào thuận tiện hơn.
                </div>
              </div>

              {/* Panel 3: Cabin & Waste Bin Capacity */}
              <div
                className={`absolute inset-0 flex flex-col justify-start pt-2 transition-all duration-500 ease-in-out lg:justify-center lg:pt-0 ${
                  activeStep === 2
                    ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                    : activeStep < 2
                      ? "pointer-events-none -translate-y-4 scale-95 opacity-0"
                      : "pointer-events-none translate-y-4 scale-95 opacity-0"
                }`}
              >
                <span className="mb-1.5 block text-xs font-bold tracking-wider text-lime-400 uppercase lg:text-sm">
                  DUNG TÍCH & KHÔNG GIAN
                </span>
                <h3 className="mb-3 text-xl font-extrabold text-slate-900 lg:text-2xl dark:text-white">
                  Dung tích cabin & Hộc chất thải
                </h3>
                <div className="mb-3 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800/40 dark:bg-[#131B2E]/40">
                    <span className="block text-lg font-extrabold text-lime-500 lg:text-xl">
                      76 LÍT
                    </span>
                    <span className="text-[10px] text-slate-500 lg:text-xs dark:text-zinc-400">
                      Dung tích cabin cực rộng
                    </span>
                  </div>
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800/40 dark:bg-[#131B2E]/40">
                    <span className="block text-lg font-extrabold text-lime-500 lg:text-xl">
                      7 LÍT
                    </span>
                    <span className="text-[10px] text-slate-500 lg:text-xs dark:text-zinc-400">
                      Hộp chứa chất thải lớn
                    </span>
                  </div>
                </div>
                <div className="space-y-2 text-sm leading-relaxed text-slate-600 lg:text-[15px] dark:text-zinc-300">
                  <p>
                    PETKIT Pura Max 2 sở hữu dung tích cabin lớn lên đến 76L,
                    mang lại không gian rộng rãi cho mèo. Bên cạnh đó, hộp chứa
                    chất thải có dung tích lớn 7L, đáp ứng tốt nhu cầu sử dụng
                    cho gia đình nuôi từ 3-5 bé mèo.
                  </p>
                  <p>
                    Trong trường hợp chỉ nuôi 1 bé, hộc chứa chất thải có thể sử
                    dụng liên tục khoảng 15 ngày mới cần đổ rác. Thuận tiện cho
                    những người nuôi bận rộn hoặc thường xuyên đi du lịch, đi
                    công tác xa.
                  </p>
                </div>
              </div>

              {/* Panel 4: Litter Compatibility */}
              <div
                className={`absolute inset-0 flex flex-col justify-start pt-2 transition-all duration-500 ease-in-out lg:justify-center lg:pt-0 ${
                  activeStep === 3
                    ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                    : activeStep < 3
                      ? "pointer-events-none -translate-y-4 scale-95 opacity-0"
                      : "pointer-events-none translate-y-4 scale-95 opacity-0"
                }`}
              >
                <span className="mb-1.5 block text-xs font-bold tracking-wider text-lime-400 uppercase lg:text-sm">
                  TƯƠNG THÍCH CÁT VỆ SINH
                </span>
                <h3 className="mb-2 text-xl font-extrabold text-slate-900 lg:text-2xl dark:text-white">
                  Loại cát tương thích
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-slate-600 lg:text-[15px] dark:text-zinc-300">
                  PETKIT Pura Max 2 được trang bị lưới lọc cát hạt nhuyễn nhằm
                  giữ lại cát sạch và loại bỏ chất thải hiệu quả. Máy sẽ hoạt
                  động tối ưu với các loại cát như cát khoáng, cát đất sét, cát
                  đậu nành hạt nhuyễn hoặc cát hỗn hợp. Ngoài ra, sản phẩm còn
                  đi kèm lưới lọc cát đa năng, phù hợp cho các loại cát hạt to
                  hơn dưới 12mm.
                </p>
                <div className="grid grid-cols-1 gap-3 text-xs md:grid-cols-2 lg:text-sm">
                  <div className="border-l-2 border-lime-500 pl-2.5">
                    <span className="font-bold text-lime-500">
                      Cát phù hợp:
                    </span>
                    <p className="mt-0.5 text-slate-600 dark:text-zinc-400">
                      Khoáng, đất sét, đậu nành hạt nhuyễn, cát hỗn hợp. Đi kèm
                      lưới lọc đa năng cho cát hạt to dưới 12mm.
                    </p>
                  </div>
                  <div className="border-l-2 border-amber-500 pl-2.5">
                    <span className="font-bold text-amber-500">
                      Lưu ý hạn chế:
                    </span>
                    <p className="mt-0.5 text-slate-600 dark:text-zinc-400">
                      Máy không thực sự phù hợp với cát gỗ, cát đậu nành hạt dài
                      và cát thủy tinh. Nếu dùng đậu nành nhỏ, đổ dưới vạch MAX
                      và dùng lưới lỗ to.
                    </p>
                  </div>
                </div>
              </div>

              {/* Panel 5: App Control & Noise Level */}
              <div
                className={`absolute inset-0 flex flex-col justify-start pt-2 transition-all duration-500 ease-in-out lg:justify-center lg:pt-0 ${
                  activeStep === 4
                    ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                    : activeStep < 4
                      ? "pointer-events-none -translate-y-4 scale-95 opacity-0"
                      : "pointer-events-none translate-y-4 scale-95 opacity-0"
                }`}
              >
                <span className="mb-1.5 block text-xs font-bold tracking-wider text-lime-400 uppercase lg:text-sm">
                  KẾT NỐI ĐIỀU KHIỂN & VẬN HÀNH
                </span>
                <h3 className="mb-3 text-xl font-extrabold text-slate-900 lg:text-2xl dark:text-white">
                  Điều khiển qua App & Độ ồn
                </h3>
                <div className="space-y-2 text-sm leading-relaxed text-slate-600 lg:text-[15px] dark:text-zinc-300">
                  <p>
                    PETKIT Pura Max 2 hỗ trợ kết nối ứng dụng PETKIT theo dõi từ
                    xa: ghi nhận cân nặng mèo, lịch sử và tần suất đi vệ sinh,
                    nhận cảnh báo khi cát vơi hoặc hộc chứa đầy.
                  </p>
                  <p>
                    Bạn có thể kích hoạt <strong>Kit Mode</strong> dành riêng
                    cho mèo con để máy chạy bán tự động, tăng tối đa an toàn.
                    Tính năng xả cát một chạm trên app giúp làm sạch toàn bộ cát
                    cũ nhanh chóng.
                  </p>
                  <p className="border-t border-slate-100 pt-2 text-xs font-semibold text-lime-500 lg:text-sm dark:border-slate-800/40">
                    Máy vận hành siêu êm ái với độ ồn chỉ khoảng 35dB, không làm
                    phiền sinh hoạt gia đình.
                  </p>
                </div>
              </div>

              {/* Panel 6: Deodorizer & Sterilization */}
              <div
                className={`absolute inset-0 flex flex-col justify-start pt-2 transition-all duration-500 ease-in-out lg:justify-center lg:pt-0 ${
                  activeStep === 5
                    ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                    : activeStep < 5
                      ? "pointer-events-none -translate-y-4 scale-95 opacity-0"
                      : "pointer-events-none translate-y-4 scale-95 opacity-0"
                }`}
              >
                <span className="mb-1.5 block text-xs font-bold tracking-wider text-lime-400 uppercase lg:text-sm">
                  CÔNG NGHỆ KHỬ MÙI KÉP
                </span>
                <h3 className="mb-3 text-xl font-extrabold text-slate-900 lg:text-2xl dark:text-white">
                  Hệ thống khử mùi & diệt khuẩn
                </h3>
                <div className="space-y-3 text-sm leading-relaxed text-slate-600 lg:text-[15px] dark:text-zinc-300">
                  <p>
                    Tích hợp máy xịt khử mùi{" "}
                    <strong>PETKIT Air Smart Spray</strong> tự động phun tinh
                    dầu thảo dược sau mỗi lần dọn phân, loại bỏ đến 99% vi khuẩn
                    và mùi hôi. Thiết kế đóng kín của hộc chứa hạn chế tối đa
                    mùi thoát ra ngoài.
                  </p>
                  <p>
                    Ngoài ra, máy nâng cấp sáp khử mùi <strong>N50 2.0</strong>{" "}
                    có hương thơm dịu nhẹ, đặt trong khay nhựa riêng giúp thay
                    thế sạch sẽ, không bẩn tay. Mỗi viên sáp hoạt động liên tục
                    đến 30 ngày.
                  </p>
                </div>
              </div>

              {/* Panel 7: 12 Safety Sensors */}
              <div
                className={`absolute inset-0 flex flex-col justify-start pt-2 transition-all duration-500 ease-in-out lg:justify-center lg:pt-0 ${
                  activeStep === 6
                    ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                    : activeStep < 6
                      ? "pointer-events-none -translate-y-4 scale-95 opacity-0"
                      : "pointer-events-none translate-y-4 scale-95 opacity-0"
                }`}
              >
                <span className="mb-1 block text-xs font-bold tracking-wider text-lime-400 uppercase lg:text-sm">
                  CẢM BIẾN AN TOÀN TOÀN DIỆN
                </span>
                <h3 className="mb-2 text-xl leading-tight font-extrabold text-slate-900 lg:text-2xl dark:text-white">
                  Hệ thống 12 cảm biến an toàn
                </h3>
                <p className="mb-2 text-sm leading-relaxed text-slate-600 lg:text-[15px] dark:text-zinc-400">
                  PETKIT Pura Max sở hữu hệ thống 12 cảm biến an toàn bao gồm
                  cảm biến trọng lượng, tiệm cận, hộp rác, Hall. Mỗi cảm biến
                  đảm nhận chức năng riêng biệt:
                </p>
                <div className="grid max-h-45 scrollbar-thin grid-cols-1 gap-2 overflow-y-auto pr-1 text-xs leading-relaxed lg:max-h-none lg:overflow-visible lg:pr-0 lg:text-sm">
                  <div className="border-l-2 border-lime-500 pl-2">
                    <span className="font-bold text-slate-800 dark:text-zinc-200">
                      Cảm biến tiệm cận:
                    </span>
                    <p className="mt-0.5 text-slate-600 dark:text-zinc-400">
                      Tự động dừng hoạt động khi phát hiện mèo hoặc vật thể tiến
                      lại gần. Đảm bảo an toàn cho mèo, tránh tình trạng kẹt
                      hoặc gây nguy hiểm cho bé.
                    </p>
                  </div>
                  <div className="border-l-2 border-lime-500 pl-2">
                    <span className="font-bold text-slate-800 dark:text-zinc-200">
                      Cảm biến trọng lượng:
                    </span>
                    <p className="mt-0.5 text-slate-600 dark:text-zinc-400">
                      Có khả năng nhận biết khi mèo bước vào hoặc rời khỏi máy
                      để kích hoạt quá trình dọn vệ sinh phù hợp. Ngoài ra, cảm
                      biến này còn giúp xác định cân nặng khi mèo vào máy, nhờ
                      đó có thể phân biệt và theo dõi sức khỏe của mèo.
                    </p>
                  </div>
                  <div className="border-l-2 border-lime-500 pl-2">
                    <span className="font-bold text-slate-800 dark:text-zinc-200">
                      Cảm biến hộc rác:
                    </span>
                    <p className="mt-0.5 text-slate-600 dark:text-zinc-400">
                      Chỉ mở khi máy thực hiện xong 1 quy trình dọn dẹp giúp
                      ngăn mùi hiệu quả.
                    </p>
                  </div>
                  <div className="border-l-2 border-lime-500 pl-2">
                    <span className="font-bold text-slate-800 dark:text-zinc-200">
                      Cảm biến Hall:
                    </span>
                    <p className="mt-0.5 text-slate-600 dark:text-zinc-400">
                      Kiểm tra tình trạng lắp đặt hộp rác. Nếu hộp rác chưa được
                      gắn đúng vị trí, thiết bị sẽ không vận hành để tránh sự cố
                      trong quá trình sử dụng.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Media Column (7 cols) - In-place Cross-fading Stack */}
            <div className="parallax-media-container relative flex h-44 w-full items-center justify-center sm:h-72 lg:col-span-7 lg:h-137.5">
              {/* 1. Real Product Image Overlay (Fades in based on activeStep) */}
              <div className="pointer-events-none absolute inset-0 z-10 mx-auto max-w-60 overflow-hidden rounded-2xl sm:max-w-112.5 lg:max-w-137.5">
                <Image
                  src="/nhungdiemcaitien.webp"
                  alt="PETKIT Pura Max 2 Những Điểm Cải Tiến"
                  fill
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 450px, 550px"
                  className={`absolute rounded-2xl object-contain transition-all duration-500 ${
                    activeStep === 0
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0"
                  }`}
                />
                <Image
                  src="/phienbancaitien.webp"
                  alt="PETKIT Pura Max 2 Cải Tiến ABS"
                  fill
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 450px, 550px"
                  className={`absolute rounded-2xl object-contain transition-all duration-500 ${
                    activeStep === 1
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0"
                  }`}
                />
                <Image
                  src="/76lit.webp"
                  alt="PETKIT Pura Max 2 Dung Tích Cabin 76L & Hộc Rác 7L"
                  fill
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 450px, 550px"
                  className={`absolute rounded-2xl object-contain transition-all duration-500 ${
                    activeStep === 2
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0"
                  }`}
                />
                <Image
                  src="/loaicattuongthich.jpg"
                  alt="PETKIT Pura Max 2 Loại Cát Tương Thích"
                  fill
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 450px, 550px"
                  className={`absolute rounded-2xl object-contain transition-all duration-500 ${
                    activeStep === 3
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0"
                  }`}
                />
                <Image
                  src="/nhatkymeo.webp"
                  alt="PETKIT Pura Max 2 Điều Khiển Qua App"
                  fill
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 450px, 550px"
                  className={`absolute rounded-2xl object-contain transition-all duration-500 ${
                    activeStep === 4
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0"
                  }`}
                />
                <Image
                  src="/khumuidietkhuan.webp"
                  alt="PETKIT Pura Max 2 Khử Mùi & Diệt Khuẩn"
                  fill
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 450px, 550px"
                  className={`absolute rounded-2xl object-contain transition-all duration-500 ${
                    activeStep === 5
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0"
                  }`}
                />
                <Image
                  src="/12cambien.webp"
                  alt="PETKIT Pura Max 12 Cảm Biến An Toàn"
                  fill
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 450px, 550px"
                  className={`absolute rounded-2xl object-contain transition-all duration-500 ${
                    activeStep === 6
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
