// src/app/api/machine-specs/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "0", 10);

    const specs = await prisma.machineBasicSpec.findMany({
      take: limit || undefined, // limitが0の場合は全件取得
      orderBy: {
        id: "desc", // IDの降順で取得
      },
      select: {
        id: true,
        machineManufacturerId: true,
        machineManufacturerName: true,
        machineName: true,
        machineType: true,
      },
    });

    return NextResponse.json(specs);
  } catch (error) {
    console.error("データ取得エラー:", error);
    return NextResponse.json({ error: "データ取得エラー" }, { status: 500 });
  }
}
