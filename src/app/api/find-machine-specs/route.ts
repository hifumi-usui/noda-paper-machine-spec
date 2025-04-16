// src/app/api/find-machine-specs/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { Prisma } from "@/generated/prisma"; // Prismaの型をインポート

export async function GET(request: Request) {
  try {
    // URLから検索パラメータを取得
    const { searchParams } = new URL(request.url);
    const searchQuery = searchParams.get("q") || "";

    // 検索条件を作成
    let where: Prisma.MachineBasicSpecWhereInput = {};

    if (searchQuery) {
      where = {
        OR: [
          {
            machineManufacturerId: {
              contains: searchQuery,
              mode: Prisma.QueryMode.insensitive,
            },
          },
          {
            machineManufacturerName: {
              contains: searchQuery,
              mode: Prisma.QueryMode.insensitive,
            },
          },
          {
            machineName: {
              contains: searchQuery,
              mode: Prisma.QueryMode.insensitive,
            },
          },
          {
            machineType: {
              contains: searchQuery,
              mode: Prisma.QueryMode.insensitive,
            },
          },
        ],
      };
    }

    // 検索実行と必要なフィールドの選択
    const specs = await prisma.machineBasicSpec.findMany({
      where,
      select: {
        id: true,
        machineManufacturerId: true,
        machineManufacturerName: true,
        machineName: true,
        machineType: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return NextResponse.json(specs);
  } catch (error) {
    console.error("検索エラー:", error);
    return NextResponse.json(
      { error: "データ検索中にエラーが発生しました" },
      { status: 500 }
    );
  }
}
