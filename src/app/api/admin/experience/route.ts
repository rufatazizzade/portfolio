import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const data = await prisma.experience.findMany({
      orderBy: { order: "asc" },
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch experience" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = await prisma.experience.create({
      data: {
        company: body.company,
        position: body.position,
        location: body.location || "",
        startDate: body.startDate,
        endDate: body.endDate || "",
        description: body.description || "",
        visible: body.visible ?? true,
        order: body.order ? parseInt(body.order) : 0,
      },
    });
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to create experience" }, { status: 500 });
  }
}
