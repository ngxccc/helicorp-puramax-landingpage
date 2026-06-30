# HELICORP - PETKIT Pura Max Premium Landing Page

Dự án Landing Page giới thiệu sản phẩm **PETKIT Pura Max** được phát triển và tối ưu hóa đặc biệt theo các tiêu chuẩn kỹ thuật cao.

---

## 🚀 Điểm Nhấn Dự Án & Các Tính Năng Nổi Bật

### 1. Premium UI/UX & Thiết Kế Chống Rập Khuôn (Anti-Slop)

- **Giao diện Hiện đại**: Tông màu tối sâu sắc kết hợp với điểm nhấn Lime Green công nghệ, hỗ trợ chuyển đổi mượt mà giữa Giao diện Sáng (Light mode) và Giao diện Tối (Dark mode).
- **Sensor Grid (Cảm biến liên hợp 3D)**: Hệ thống mô phỏng vùng quét cảm biến và logic chống kẹp độc quyền hoạt động theo thời gian thực dưới dạng tương tác trực quan.
- **HeLiBot Chatbot**: Hộp chat thông minh được tối ưu hóa giao diện kéo cuộn tin nhắn mượt mà (drag-to-scroll) trên mọi thiết bị.
- **Activity Tracker**: Bộ theo dõi nhật ký hoạt động của thú cưng, tích hợp menu popover hiển thị lịch sử thời gian thực.

### 2. Tối Ưu Hóa Hiệu Năng Vượt Trội (Đạt Điểm Tuyệt Đối)

Trang web đạt chỉ số **Lighthouse tuyệt đối** nhờ hai chiến lược tối ưu hóa nâng cao:

- **Tối ưu LCP (Largest Contentful Paint)**: Sử dụng thư viện `sharp` nén và resize ảnh Hero chính (`phienbancaitien.webp`) từ **2.3MB về 19.36KB** (giảm ~99%), đưa LCP trên Desktop về mức siêu tốc **0.65s**.
- **Trì hoãn Hydration cắt giảm TBT (Total Blocking Time)**:
  - Sử dụng `requestIdleCallback` trì hoãn việc nạp các Client Component nặng chứa hiệu ứng GSAP (`ScrollytellingSection`) và Radix Popover (`ClientSideComponents`) cho đến khi luồng xử lý chính hoàn toàn rảnh rỗi.
  - Cắt giảm chỉ số TBT trên Mobile từ **600ms xuống còn 27ms** (giảm 95.5%).
- **Triệt tiêu CLS (Cumulative Layout Shift)**: Dùng khung trống giữ chỗ `min-h-screen` trong quá trình tải lazy component để đưa chỉ số CLS về **0.000**.

### 3. [ĐIỂM CỘNG] Tích Hợp Backend & Lưu Trữ Dữ Liệu (Zero-Config)
Dự án tích hợp đầy đủ backend xử lý và lưu trữ dữ liệu thông qua các Next.js API Routes dưới dạng **Cơ sở dữ liệu JSON Cục bộ (Local File Database)** và cổng kết nối **AI Chatbot**:
*   **Dữ liệu Đăng ký Dùng thử (`/api/webhook`)**: Tự động lưu trữ thông tin hợp lệ (đã validate Server-side bao gồm Regex điện thoại Việt Nam) kèm Unique ID và Timestamp vào tệp `data/registrations.json`.
*   **Theo dõi Hành vi Người dùng (`/api/webhook`)**: Lưu trữ mọi tương tác thực tế của người dùng trên trang vào tệp `data/tracking.json`.
*   **Hệ thống Chatbot AI kết nối Gemini (`/api/chat`)**: Cửa sổ tư vấn trực tuyến được định tuyến qua Server-side. Nếu biến môi trường `GEMINI_API_KEY` được định cấu hình, chatbot sẽ kết nối trực tiếp đến mô hình **Gemini 2.5 Flash** siêu tốc của Google với System Prompt được định nghĩa sẵn. Trường hợp không cấu hình khóa API, backend tự động chuyển đổi sang bộ phản hồi tự động thông minh bằng từ khóa cục bộ.

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

- **Framework**: Next.js 16.2.9 (App Router, Turbopack, React 19)
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP (GreenSock) & `@gsap/react`
- **Components & Overlays**: Radix UI Popover, Sonner (Toaster)

---

## 📂 Cấu Trúc Thư Mục Quan Trọng

```text
├── app/
│   ├── api/chat/route.ts      # Chatbot API Proxy (Gemini API & Local Fallback)
│   ├── api/webhook/route.ts   # Backend API Handler (Lưu trữ JSON DB)
│   ├── layout.tsx             # Bố cục chung & Cấu hình Theme Provider
│   └── page.tsx               # Trang chủ chính (Next.js Server Component)
├── data/                      # Thư mục Cơ sở dữ liệu Cục bộ (Chứa các file JSON)
│   ├── registrations.json     # Dữ liệu khách hàng đăng ký dùng thử thực tế
│   └── tracking.json          # Dữ liệu sự kiện tương tác của người dùng
├── src/
│   ├── components/            # Các Client-side components được lazy-load
│   │   ├── client-side-components.tsx # Trì hoãn hydration cho bot và tracker
│   │   └── activity-tracker.tsx       # Thành phần nhật ký hoạt động
│   └── features/
│       ├── chatbot/           # Tính năng Trợ lý thông minh HeLiBot
│       ├── hero/              # Phần đầu trang (Hero & Mockup thiết bị)
│       └── scrollytelling/    # Phân đoạn cuộn trang tương tác GSAP (Lazy loaded)
```

---

## 💻 Hướng Dẫn Khởi Chạy Dự Án

### Yêu cầu hệ thống

Khuyên dùng **Node.js LTS (v18+)** hoặc **Bun**.

### 1. Cài đặt các gói phụ thuộc (Dependencies)

Sử dụng Bun (khuyên dùng):

```bash
bun install
```

Hoặc sử dụng npm:

```bash
npm install
```

### 2. Chạy dự án ở chế độ Phát triển (Development)

```bash
bun run dev
# hoặc
npm run dev
```

Mở trình duyệt truy cập: [http://localhost:3000](http://localhost:3000)

### 3. Biên dịch và Chạy ở chế độ Production (Kiểm thử Hiệu năng & Lighthouse)

Để kiểm tra tốc độ thực tế của trang web giống như trên môi trường triển khai thực tế:

```bash
# Biên dịch mã nguồn tối ưu
bun run build
# hoặc npm run build

# Khởi chạy máy chủ Production
bun run start
# hoặc npm run start
```

Mở trình duyệt truy cập cổng mặc định: [http://localhost:3000](http://localhost:3000).
