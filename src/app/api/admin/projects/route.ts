import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { order: "asc" },
    });
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const project = await prisma.project.create({
      data: {
        title: body.title,
        description: body.description,
        content: body.content || "",
        category: body.category || "",
        techStack: body.techStack || "",
        imageUrl: body.imageUrl || "",
        projectUrl: body.projectUrl || "",
        githubUrl: body.githubUrl || "",
        demoUrl: body.demoUrl || "",
        featured: body.featured ?? false,
        visible: body.visible ?? true,
        order: body.order ? parseInt(body.order) : 0,
      },
    });
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}
