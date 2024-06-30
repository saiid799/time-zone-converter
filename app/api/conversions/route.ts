// app/api/conversions/route.ts

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Import the Prisma client

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, from, to } = body;
    if (!userId || !from || !to) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    console.log("Attempting to create conversion:", { userId, from, to });
    const conversion = await prisma.conversion.create({
      data: { userId, from, to },
    });
    console.log("Conversion created:", conversion);
    return NextResponse.json(conversion);
  } catch (error) {
    console.error("Error in POST /api/conversions:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
