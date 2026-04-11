import { NextRequest, NextResponse } from "next/server";
import { sendProposalEmail } from "@/lib/email";

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 3; // max proposals per window
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const {
      fullName,
      company,
      email,
      proposalType,
      budgetRange,
      timeline,
      message,
      honeypot,
    } = body;

    // Honeypot anti-spam
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    // Validation
    if (!fullName || !email || !proposalType || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    await sendProposalEmail({
      fullName,
      company: company || "",
      email,
      proposalType,
      budgetRange: budgetRange || "",
      timeline: timeline || "",
      message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Proposal form error:", error);
    return NextResponse.json(
      { error: "Failed to send proposal. Please try again later." },
      { status: 500 }
    );
  }
}
