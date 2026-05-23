import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const project = await prisma.project.update({
      where: { id },
      data: {
        title: body.title,
        description: body.description,
        content: body.content,
        category: body.category,
        techStack: body.techStack,
        imageUrl: body.imageUrl,
        projectUrl: body.projectUrl,
        githubUrl: body.githubUrl,
        demoUrl: body.demoUrl,
        featured: body.featured,
        visible: body.visible,
        order: body.order ? parseInt(body.order) : 0,
      },
    });
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await prisma.project.delete({
      where: { id },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
  }
}
