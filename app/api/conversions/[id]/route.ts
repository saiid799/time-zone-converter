import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  try {
    await prisma.conversion.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Conversion deleted successfully" });
  } catch (error) {
    console.error("Error deleting conversion:", error);
    return NextResponse.json(
      { error: "Failed to delete conversion" },
      { status: 500 }
    );
  }
}
