import { NextRequest, NextResponse } from "next/server";
import { getPool } from "@/lib/db";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { source, name, phone, mobile, email, course, subject, message, pageUrl } =
    body as Record<string, unknown>;

  if (typeof source !== "string" || !source) {
    return NextResponse.json({ error: "Missing form source." }, { status: 400 });
  }

  const phoneNumber =
    (typeof phone === "string" && phone) || (typeof mobile === "string" && mobile) || null;

  try {
    const pool = getPool();
    await pool.execute(
      `INSERT INTO form_submissions (source, name, phone, email, course, subject, message, page_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        source,
        typeof name === "string" ? name : null,
        phoneNumber,
        typeof email === "string" ? email : null,
        typeof course === "string" ? course : null,
        typeof subject === "string" ? subject : null,
        typeof message === "string" ? message : null,
        typeof pageUrl === "string" ? pageUrl : null,
      ],
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Enquiry insert failed:", error);
    return NextResponse.json(
      { error: "Could not save your enquiry. Please try again." },
      { status: 500 },
    );
  }
}
