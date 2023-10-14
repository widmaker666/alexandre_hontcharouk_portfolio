import connectToMongoDB from "@/app/libs/mongodb";
import Projects from "@/app/models/projects";
import { NextResponse } from "next/server";

// - POST - //
export async function POST(request) {
  const {
    title,
    subTitle,
    entreprise,
    year,
    description,
    shortDescription,
    technologies,
    images,
  } = await request.json();
  await connectToMongoDB();
  await Projects.create({
    title,
    subTitle,
    entreprise,
    year,
    description,
    shortDescription,
    technologies,
    images,
  });
  return NextResponse.json(
    {
      message: "Project created successfully",
    },
    {
      status: 201,
    }
  );
}

// - GET - //
export async function GET(request) {
  await connectToMongoDB();
  const projects = await Projects.find();
  return NextResponse.json({ projects });
}


