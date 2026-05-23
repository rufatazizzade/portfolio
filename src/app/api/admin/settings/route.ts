import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const data = await prisma.setting.findMany();
    // Convert array to key-value object
    const settings = data.reduce((acc, curr) => {
      acc[curr.key] = curr.value;
      return acc;
    }, {} as Record<string, string>);
    
    return NextResponse.json(settings);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Body is expected to be an object of key-value pairs
    for (const [key, value] of Object.entries(body)) {
      if (typeof value === "string") {
        await prisma.setting.upsert({
          where: { key },
          update: { value },
          create: { key, value },
        });
      }
    }
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to save settings" }, { status: 500 });
  }
}
