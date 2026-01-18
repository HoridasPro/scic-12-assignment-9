import connect from "@/lib/dbconnect";
import { ObjectId } from "mongodb";

const fruitsColl = connect("fruitsCall");
export async function GET(req, { params }) {
  const { id } = await params;
  const result = await fruitsColl.findOne({
    _id: new ObjectId(id),
  });

  return Response.json(result);
}
