import connect from "@/lib/dbconnect";
import { ObjectId } from "mongodb";
const fruitsCollection = connect("fruitsCall");
export async function GET(req, { params }) {
  const { id } = await params;
  const result = await fruitsCollection.findOne({
    _id: new ObjectId(id),
  });
  return Response.json(result);
}
