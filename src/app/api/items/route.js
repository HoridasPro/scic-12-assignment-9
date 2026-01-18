import { NextResponse } from "next/server";
import connect from "@/lib/dbconnect";

export async function GET() {
  try {
    const fruitsCollection = await connect("fruitsCall");
    const fruits = await fruitsCollection.find().toArray();
    console.log(fruits);

    return NextResponse.json({ success: true, data: fruits }, { status: 200 });
  } catch (error) {
    console.error("GET fruits error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
