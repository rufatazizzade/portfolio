import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const data = await prisma.education.update({
      where: { id },
      data: {
        school: body.school,
        degree: body.degree,
        field: body.field,
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
    return NextResponse.json({ error: error.message || "Failed to update education" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await prisma.education.delete({
      where: { id },
    });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to delete education" }, { status: 500 });
  }
}
