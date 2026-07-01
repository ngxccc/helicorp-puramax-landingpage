"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// GSAP requires a client-side environment to access the DOM and window APIs.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface BulletPoint {
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

interface HighlightBox {
  strongText: string;
  text: string;
}

interface DualBox {
  title: string;
  text: string;
  borderColorClass: string;
  textColorClass: string;
}

interface ImageInfo {
  src: string;
  alt: string;
}

interface ScrollytellingStep {
  overheading: string;
  title: string;
  description?: string;
  paragraphs?: string[];
  bullets?: BulletPoint[];
  stats?: Stat[];
  highlightBox?: HighlightBox;
  dualBoxes?: DualBox[];
  footerNote?: string;
  image: ImageInfo;
}

const SCROLL_DATA: ScrollytellingStep[] = [
  {
    overheading: "TỔNG HỢP CẢI TIẾN",
    title: "Những điểm cải tiến",
    description: "So với phiên bản 2024, máy dọn phân mèo PETKIT Pura Max 2 đã nâng cấp thiết kế mới nhằm mang lại trải nghiệm sử dụng ổn định và thông minh hơn:",
    bullets: [
      {
        title: "Nâng cấp lồng chứa cát:",
        description: "Thiết kế mới giúp ngăn chặn rò rỉ nước tiểu, đồng thời dễ dàng tháo lắp và vệ sinh hơn.",
      },
      {
        title: "Trang bị tấm lót chống dính:",
        description: "Hỗ trợ chống thấm, chống trầy xước và chống dính hiệu quả. Phần vành tấm lót sử dụng cấu trúc viền liền mạch kết hợp lớp silicon chống thấm ngăn nước tiểu rò rỉ ra ngoài.",
      },
      {
        title: "Phiên bản sáp N50 2.0 mới:",
        description: "Thiết kế bọc nhựa khay riêng giúp sạch tay khi thay thế, mùi hương dễ chịu và hỗ trợ ngăn mùi hôi hiệu quả.",
      },
      {
        title: "Tấm chắn xả cát nam châm:",
        description: "Tấm chắn xả cát tích hợp nam châm từ tính giúp tháo lắp nhanh chóng chỉ trong 1 giây, vô cùng thuận tiện khi vệ sinh máy.",
      },
      {
        title: "Nâng cấp hệ trục từ 2 lên 4 bánh:",
        description: "Nâng cấp cơ trục lên 4 bánh xe đỡ lực phân bổ đều lồng quay, giúp hoạt động êm ái, ổn định và trơn tru.",
      },
    ],
    image: {
      src: "/nhungdiemcaitien.webp",
      alt: "PETKIT Pura Max 2 Những Điểm Cải Tiến",
    },
  },
  {
    overheading: "THẾ HỆ MỚI 2026",
    title: "Phiên bản cải tiến",
    paragraphs: [
      "Máy dọn phân mèo PETKIT Pura Max 2 là phiên bản cải tiến của máy dọn vệ sinh mèo PETKIT Pura Max 2024. Sản phẩm được làm từ chất liệu nhựa ABS cao cấp, giúp tăng độ bền và hạn chế trầy xước trong quá trình sử dụng.",
      "Kích thước cửa ra vào rộng rãi (25.5 x 20cm), giúp mèo dễ dàng di chuyển, thuận tiện với các bé mèo chân ngắn. Đồng thời, máy dọn phân mèo phù hợp cho cả mèo nhỏ lẫn mèo lớn có trọng lượng từ 1.5 - 10 kg.",
    ],
    highlightBox: {
      strongText: "Lưu ý từ Helicorp:",
      text: "Với các bé mèo chân ngắn, mèo con hoặc mèo đang có thai, bạn có thể trang bị thêm bậc thang tăng chiều cao để hỗ trợ việc ra vào thuận tiện hơn.",
    },
    image: {
      src: "/phienbancaitien.webp",
      alt: "PETKIT Pura Max 2 Cải Tiến ABS",
    },
  },
  {
    overheading: "DUNG TÍCH & KHÔNG GIAN",
    title: "Dung tích cabin & Hộc chất thải",
    stats: [
      {
        value: "76 LÍT",
        label: "Dung tích cabin cực rộng",
      },
      {
        value: "7 LÍT",
        label: "Hộp chứa chất thải lớn",
      },
    ],
    paragraphs: [
      "PETKIT Pura Max 2 sở hữu dung tích cabin lớn lên đến 76L, mang lại không gian rộng rãi cho mèo. Bên cạnh đó, hộp chứa chất thải có dung tích lớn 7L, đáp ứng tốt nhu cầu sử dụng cho gia đình nuôi từ 3-5 bé mèo.",
      "Trong trường hợp chỉ nuôi 1 bé, hộc chứa chất thải có thể sử dụng liên tục khoảng 15 ngày mới cần đổ rác. Thuận tiện cho những người nuôi bận rộn hoặc thường xuyên đi du lịch, đi công tác xa.",
    ],
    image: {
      src: "/76lit.webp",
      alt: "PETKIT Pura Max 2 Dung Tích Cabin 76L & Hộc Rác 7L",
    },
  },
  {
    overheading: "TƯƠNG THÍCH CÁT VỆ SINH",
    title: "Loại cát tương thích",
    paragraphs: [
      "PETKIT Pura Max 2 được trang bị lưới lọc cát hạt nhuyễn nhằm giữ lại cát sạch và loại bỏ chất thải hiệu quả. Máy sẽ hoạt động tối ưu với các loại cát như cát khoáng, cát đất sét, cát đậu nành hạt nhuyễn hoặc cát hỗn hợp. Ngoài ra, sản phẩm còn đi kèm lưới lọc cát đa năng, phù hợp cho các loại cát hạt to hơn dưới 12mm.",
    ],
    dualBoxes: [
      {
        title: "Cát phù hợp:",
        text: "Khoáng, đất sét, đậu nành hạt nhuyễn, cát hỗn hợp. Đi kèm lưới lọc đa năng cho cát hạt to dưới 12mm.",
        borderColorClass: "border-lime-400",
        textColorClass: "text-lime-400",
      },
      {
        title: "Lưu ý hạn chế:",
        text: "Máy không thực sự phù hợp với cát gỗ, cát đậu nành hạt dài và cát thủy tinh. Nếu dùng đậu nành nhỏ, đổ dưới vạch MAX và dùng lưới lỗ to.",
        borderColorClass: "border-amber-500",
        textColorClass: "text-amber-500",
      },
    ],
    image: {
      src: "/loaicattuongthich.jpg",
      alt: "PETKIT Pura Max 2 Loại Cát Tương Thích",
    },
  },
  {
    overheading: "KẾT NỐI ĐIỀU KHIỂN & VẬN HÀNH",
    title: "Điều khiển qua App & Độ ồn",
    paragraphs: [
      "PETKIT Pura Max 2 hỗ trợ kết nối ứng dụng PETKIT theo dõi từ xa: ghi nhận cân nặng mèo, lịch sử và tần suất đi vệ sinh, nhận cảnh báo khi cát vơi hoặc hộc chứa đầy.",
      "Bạn có thể kích hoạt **Kit Mode** dành riêng cho mèo con để máy chạy bán tự động, tăng tối đa an toàn. Tính năng xả cát một chạm trên app giúp làm sạch toàn bộ cát cũ nhanh chóng.",
    ],
    footerNote: "Máy vận hành siêu êm ái với độ ồn chỉ khoảng 35dB, không làm phiền sinh hoạt gia đình.",
    image: {
      src: "/nhatkymeo.webp",
      alt: "PETKIT Pura Max 2 Điều Khiển Qua App",
    },
  },
  {
    overheading: "CÔNG NGHỆ KHỬ MÙI KÉP",
    title: "Hệ thống khử mùi & diệt khuẩn",
    paragraphs: [
      "Tích hợp máy xịt khử mùi **PETKIT Air Smart Spray** tự động phun tinh dầu thảo dược sau mỗi lần dọn phân, loại bỏ đến 99% vi khuẩn và mùi hôi. Thiết kế đóng kín của hộc chứa hạn chế tối đa mùi thoát ra ngoài.",
      "Ngoài ra, máy nâng cấp sáp khử mùi **N50 2.0** có hương thơm dịu nhẹ, đặt trong khay nhựa riêng giúp thay thế sạch sẽ, không bẩn tay. Mỗi viên sáp hoạt động liên tục đến 30 ngày.",
    ],
    image: {
      src: "/khumuidietkhuan.webp",
      alt: "PETKIT Pura Max 2 Khử Mùi & Diệt Khuẩn",
    },
  },
  {
    overheading: "CẢM BIẾN AN TOÀN TOÀN DIỆN",
    title: "Hệ thống 12 cảm biến an toàn",
    description: "PETKIT Pura Max sở hữu hệ thống 12 cảm biến an toàn bao gồm cảm biến trọng lượng, tiệm cận, hộp rác, Hall. Mỗi cảm biến đảm nhận chức năng riêng biệt:",
    bullets: [
      {
        title: "Cảm biến tiệm cận:",
        description: "Tự động dừng hoạt động khi phát hiện mèo hoặc vật thể tiến lại gần. Đảm bảo an toàn cho mèo, tránh tình trạng kẹt hoặc gây nguy hiểm cho bé.",
      },
      {
        title: "Cảm biến trọng lượng:",
        description: "Có khả năng nhận biết khi mèo bước vào hoặc rời khỏi máy để kích hoạt quá trình dọn vệ sinh phù hợp. Ngoài ra, cảm biến này còn giúp xác định cân nặng khi mèo vào máy, nhờ đó có thể phân biệt và theo dõi sức khỏe của mèo.",
      },
      {
        title: "Cảm biến hộc rác:",
        description: "Chỉ mở khi máy thực hiện xong 1 quy trình dọn dẹp giúp ngăn mùi hiệu quả.",
      },
      {
        title: "Cảm biến Hall:",
        description: "Kiểm tra tình trạng lắp đặt hộp rác. Nếu hộp rác chưa được gắn đúng vị trí, thiết bị sẽ không vận hành để tránh sự cố trong quá trình sử dụng.",
      },
    ],
    image: {
      src: "/12cambien.webp",
      alt: "PETKIT Pura Max 12 Cảm Biến An Toàn",
    },
  },
];

export function ScrollytellingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const zones = gsap.utils.toArray<HTMLElement>(".trigger-zone", containerRef.current);

      zones.forEach((zone, index) => {
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

      const mm = gsap.matchMedia();
      // PERF: Layout switches to a single vertical column on mobile, so parallax column offset triggers are only active for desktops (>= 1024px) to prevent layout breakages.
      mm.add("(min-width: 1024px)", () => {
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

  const renderTextWithBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div
      ref={containerRef}
      id="scrollytelling"
      className="dark:bg-background relative h-[560vh] w-full border-t border-slate-200 bg-white transition-colors duration-300 dark:border-slate-800/40"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="parallax-bg-1 absolute top-[10%] left-[5%] h-87.5 w-87.5 rounded-full bg-lime-400/10 blur-3xl" />
        <div className="parallax-bg-2 absolute right-[5%] bottom-[15%] h-100 w-100 rounded-full bg-lime-400/10 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-full">
        {SCROLL_DATA.map((_, index) => (
          <div
            key={index}
            className="trigger-zone h-[80vh]"
          />
        ))}
      </div>

      <div className="sticky top-0 z-10 flex h-screen w-full items-center justify-center overflow-hidden">
        <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
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

          <div className="grid w-full grid-cols-1 items-center gap-4 lg:grid-cols-12 lg:gap-8">
            <div className="parallax-text-container relative order-last flex h-96 w-full flex-col justify-start pt-2 sm:h-110 lg:order-first lg:col-span-5 lg:h-137.5 lg:justify-center lg:pt-0">
              {SCROLL_DATA.map((step, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex flex-col justify-start pt-2 transition-all duration-500 ease-in-out lg:justify-center lg:pt-0 ${
                    activeStep === index
                      ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                      : activeStep < index
                        ? "pointer-events-none -translate-y-4 scale-95 opacity-0"
                        : "pointer-events-none translate-y-4 scale-95 opacity-0"
                  }`}
                >
                  <span className="mb-1.5 block text-xs font-bold tracking-wider text-lime-400 uppercase lg:text-sm">
                    {step.overheading}
                  </span>
                  <h3 className="mb-2 text-xl font-extrabold leading-tight text-slate-900 lg:text-2xl dark:text-white">
                    {step.title}
                  </h3>

                  {step.description && (
                    <p className="mb-2 text-sm leading-relaxed text-slate-600 lg:text-[15px] dark:text-zinc-400">
                      {step.description}
                    </p>
                  )}

                  {step.bullets && (
                    <div className="grid max-h-45 scrollbar-thin grid-cols-1 gap-2 overflow-y-auto pr-1 text-xs leading-relaxed lg:max-h-none lg:scrollbar-none lg:overflow-y-visible lg:pr-0 lg:text-sm">
                      {step.bullets.map((bullet, idx) => (
                        <div key={idx} className="border-l-2 border-lime-400 pl-2">
                          <span className="font-bold text-slate-800 dark:text-zinc-200">
                            {bullet.title}
                          </span>
                          <p className="mt-0.5 text-slate-600 dark:text-zinc-400">
                            {bullet.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {step.paragraphs && (
                    <div className="mb-3 space-y-3 text-sm leading-relaxed text-slate-600 lg:text-[15px] dark:text-zinc-300">
                      {step.paragraphs.map((p, idx) => (
                        <p key={idx}>{renderTextWithBold(p)}</p>
                      ))}
                    </div>
                  )}

                  {step.highlightBox && (
                    <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-2.5 text-xs text-yellow-600 lg:text-sm dark:text-yellow-400">
                      <strong>{step.highlightBox.strongText}</strong> {step.highlightBox.text}
                    </div>
                  )}

                  {step.stats && (
                    <div className="mb-3 grid grid-cols-2 gap-3">
                      {step.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800/40 dark:bg-[#131B2E]/40"
                        >
                          <span className="block text-lg font-extrabold text-lime-400 lg:text-xl">
                            {stat.value}
                          </span>
                          <span className="text-[10px] text-slate-500 lg:text-xs dark:text-zinc-400">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {step.dualBoxes && (
                    <div className="grid grid-cols-1 gap-3 text-xs md:grid-cols-2 lg:text-sm">
                      {step.dualBoxes.map((box, idx) => (
                        <div key={idx} className={`border-l-2 ${box.borderColorClass} pl-2.5`}>
                          <span className={`font-bold ${box.textColorClass}`}>
                            {box.title}
                          </span>
                          <p className="mt-0.5 text-slate-600 dark:text-zinc-400">
                            {box.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {step.footerNote && (
                    <p className="border-t border-slate-100 pt-2 text-xs font-semibold text-lime-400 lg:text-sm dark:border-slate-800/40">
                      {step.footerNote}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="parallax-media-container relative flex h-44 w-full items-center justify-center sm:h-72 lg:col-span-7 lg:h-137.5">
              <div className="pointer-events-none absolute inset-0 z-10 mx-auto max-w-60 overflow-hidden rounded-2xl sm:max-w-112.5 lg:max-w-137.5">
                {SCROLL_DATA.map((step, index) => (
                  <Image
                    key={index}
                    src={step.image.src}
                    alt={step.image.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 450px, 550px"
                    className={`absolute rounded-2xl object-contain transition-all duration-500 ${
                      activeStep === index
                        ? "scale-100 opacity-100"
                        : "scale-95 opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
