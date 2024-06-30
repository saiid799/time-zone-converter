import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  const conversions = await prisma.conversion.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  return NextResponse.json(conversions);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { userId, from, to } = body;

  if (!userId || !from || !to) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const conversion = await prisma.conversion.create({
    data: { userId, from, to },
  });

  return NextResponse.json(conversion);
}
