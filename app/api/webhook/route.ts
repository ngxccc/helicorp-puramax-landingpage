import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const REGISTRATIONS_FILE = path.join(DATA_DIR, "registrations.json");
const TRACKING_FILE = path.join(DATA_DIR, "tracking.json");

// Helper to ensure data directory and files exist
async function ensureDataSetup() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

// Helper to read, append, and save data to JSON file
async function saveRecord(filePath: string, record: unknown) {
  await ensureDataSetup();
  let data: unknown[] = [];
  try {
    const fileContent = await fs.readFile(filePath, "utf8");
    data = JSON.parse(fileContent);
    if (!Array.isArray(data)) {
      data = [];
    }
  } catch (error) {
    data = [];
  }
  data.push(record);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
}

interface WebhookRequestBody {
  name?: string;
  phone?: string;
  email?: string;
  cats?: string;
  selectedChips?: string[];
  type?: string;
  eventName?: string;
  metadata?: Record<string, unknown>;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as WebhookRequestBody;
    const { name, phone, email, cats, selectedChips, type, eventName } = body;

    // If it's a user behavior tracking event, log it and return success
    if (type === "track") {
      const trackingRecord = {
        id: "tr_" + Date.now().toString(36) + Math.random().toString(36).substring(2, 5),
        timestamp: new Date().toISOString(),
        eventName,
        metadata: body.metadata ?? {}
      };

      await saveRecord(TRACKING_FILE, trackingRecord);

      console.log(
        `[Behavior Tracking Webhook]: Event "${eventName}" recorded at ${trackingRecord.timestamp}`
      );
      return NextResponse.json({
        success: true,
        message: "Tracking event received and stored",
      });
    }

    // Server-side validation for form inputs
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Họ tên phải có ít nhất 2 ký tự!" },
        { status: 400 },
      );
    }

    // Vietnamese phone number regex: starts with 0 or +84, followed by 9 digits
    const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
    const cleanPhone = phone ? phone.replace(/\s/g, "") : "";
    if (!phone || !phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Số điện thoại không hợp lệ! Vui lòng nhập số điện thoại Việt Nam (ví dụ: 0901234567).",
        },
        { status: 400 },
      );
    }

    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { success: false, error: "Email không hợp lệ!" },
          { status: 400 },
        );
      }
    }

    const numCats = parseInt(cats ?? "", 10);
    if (isNaN(numCats) || numCats < 1 || numCats > 10) {
      return NextResponse.json(
        { success: false, error: "Số mèo phải từ 1 đến 10 bé!" },
        { status: 400 },
      );
    }

    const registrationRecord = {
      id: "reg_" + Date.now().toString(36) + Math.random().toString(36).substring(2, 5),
      timestamp: new Date().toISOString(),
      name,
      phone,
      email,
      cats,
      selectedChips
    };

    await saveRecord(REGISTRATIONS_FILE, registrationRecord);

    console.log("Webhook Received and Saved Valid Form Registration:", registrationRecord);

    return NextResponse.json({
      success: true,
      message: "Đăng ký thành công! Dữ liệu đã được lưu trữ hợp lệ vào cơ sở dữ liệu dự án.",
    });
  } catch (error) {
    console.error("Webhook route error:", error);
    return NextResponse.json(
      { success: false, error: "Lỗi xử lý máy chủ Webhook" },
      { status: 500 },
    );
  }
}
