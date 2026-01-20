import { NextResponse } from "next/server";
import connect from "@/lib/dbconnect";

export async function GET() {
  try {
    const fruitsCollection = await connect("fruitsCall");
    const fruits = await fruitsCollection.find().limit(8).toArray();
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
export async function POST(req) {
  try {
    const body = await req.json();

    const fruitsCollection = await connect("fruitsCall");
    const result = await fruitsCollection.insertOne(body);

    return NextResponse.json(
      { success: true, insertedId: result.insertedId },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
