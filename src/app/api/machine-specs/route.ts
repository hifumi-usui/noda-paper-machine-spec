// src/app/api/machine-specs/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const specs = await prisma.MachineBasicSpec.findMany();
    return NextResponse.json(specs);
  } catch (error) {
    return NextResponse.json({ error: "データ取得エラー" }, { status: 500 });
  }
}
