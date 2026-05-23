import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const data = await prisma.skill.findMany({
      orderBy: { order: "asc" },
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch skills" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = await prisma.skill.create({
      data: {
        name: body.name,
        category: body.category,
        icon: body.icon || "",
        proficiency: body.proficiency ? parseInt(body.proficiency) : 0,
        visible: body.visible ?? true,
        order: body.order ? parseInt(body.order) : 0,
      },
    });
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to create skill" }, { status: 500 });
  }
}
