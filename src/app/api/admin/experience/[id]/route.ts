import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const data = await prisma.experience.update({
      where: { id },
      data: {
        company: body.company,
        position: body.position,
        location: body.location,
        startDate: body.startDate,
        endDate: body.endDate,
        description: body.description,
        visible: body.visible,
        order: body.order ? parseInt(body.order) : 0,
      },
    });
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to update experience" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await prisma.experience.delete({
      where: { id },
    });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to delete experience" }, { status: 500 });
  }
}
