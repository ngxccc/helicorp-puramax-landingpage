export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-12 transition-colors duration-300 dark:border-slate-800 dark:bg-[#0A0D14]">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        {/* Brand Info */}
        <div className="max-w-md text-left">
          <a
            href="#tong-quan"
            className="decoration-none mb-4 flex items-center gap-3 text-current"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-400 text-black">
              <svg
                className="h-5 w-5"
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
            <span className="text-base leading-none font-extrabold tracking-wider">
              HELICORP
            </span>
          </a>
          <p className="text-xs leading-relaxed font-semibold opacity-75">
            HeLiCorp phân phối PETKIT chính hãng tại Việt Nam. Sẵn hàng trải
            nghiệm thực tế, cung cấp phụ kiện túi rác, lõi refill chính hãng và
            hỗ trợ lắp đặt trọn gói tận nơi cho nhà riêng, chung cư và cơ sở
            nuôi thú cưng chuyên nghiệp.
          </p>
        </div>

        {/* Footer Links & Credits */}
        <div className="flex flex-col gap-4 text-xs font-semibold md:items-end">
          <div className="flex flex-wrap gap-6">
            <a
              href="#tong-quan"
              className="opacity-80 transition-all hover:text-lime-400 hover:opacity-100"
            >
              Tổng quan
            </a>
            <a
              href="#xsecure"
              className="opacity-80 transition-all hover:text-lime-400 hover:opacity-100"
            >
              xSecure
            </a>
            <a
              href="#thong-so"
              className="opacity-80 transition-all hover:text-lime-400 hover:opacity-100"
            >
              Thông số
            </a>
            <a
              href="#dung-thu"
              className="opacity-80 transition-all hover:text-lime-400 hover:opacity-100"
            >
              Dùng thử
            </a>
          </div>
          <div className="opacity-50">
            © {currentYear} HeLiCorp PETKIT Việt Nam. Bản quyền được bảo lưu.
          </div>
        </div>
      </div>
    </footer>
  );
}
