import { NextResponse } from "next/server";

// Sends quote requests through Resend (https://resend.com) when RESEND_API_KEY is set.
// QUOTE_TO_EMAIL defaults to info@uasecurities.com; QUOTE_FROM_EMAIL must be a sender on a domain verified in Resend.
export async function POST(req: Request) {
  const data = (await req.json().catch(() => null)) as Record<string, string> | null;
  if (!data) return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  if (data.website) return NextResponse.json({ ok: true }); // spam trap filled

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Name and a valid email are required" }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) return NextResponse.json({ fallback: true }, { status: 503 });

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${data.phone || "-"}`,
    `Company / property: ${data.company || "-"}`,
    `Service: ${data.service || "-"}`,
    "",
    (data.details || "").slice(0, 5000),
  ];

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.QUOTE_FROM_EMAIL || "UA Securities Website <quotes@uasecurities.com>",
      to: [process.env.QUOTE_TO_EMAIL || "info@uasecurities.com"],
      reply_to: email,
      subject: `Quote request: ${data.service || "Security"} (${name})`,
      text: lines.join("\n"),
    }),
  });

  if (!res.ok) return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
