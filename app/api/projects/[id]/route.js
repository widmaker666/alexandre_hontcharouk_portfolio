import connectToMongoDB from "@/app/libs/mongodb";
import Projects from "@/app/models/projects";
import { NextResponse } from "next/server";

// - GET by /params(id) - //
export async function GET(request, { params }) {
  const { id } = params;
  await connectToMongoDB();
  const projects = await Projects.findOne({ _id: id });
  return NextResponse.json(
    { projects },
    { message: "project id already found" },
    { status: 200 }
  );
}
