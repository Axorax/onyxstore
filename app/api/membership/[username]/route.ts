import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(
  request: Request,
  context: { params: Promise<{ username: string }> },
) {
  const { username } = await context.params;

  try {
    const client = await clientPromise;
    const db = client.db("onyx");
    const collection = db.collection("membership");

    const member = await collection.findOne(
      { username },
      { projection: { _id: 0, username: 1, name: 1 } },
    );

    if (!member) {
      return NextResponse.json({
        error: true,
        message: `No member found with username "${username}"`,
      });
    }

    return NextResponse.json({
      error: false,
      data: member,
    });
  } catch (error) {
    console.error("Error fetching member:", error);
    return NextResponse.json(
      { error: true, message: "Internal server error" },
      { status: 500 },
    );
  }
}
