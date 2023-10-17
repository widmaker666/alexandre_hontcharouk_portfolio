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
    siteWeb,
    image1,
    image2,
    image3,
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
    siteWeb,
    image1,
    image2,
    image3,

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
 try {
  await connectToMongoDB()
  const project = await Projects.find()
  return NextResponse.json(project)
  
 } catch (error) {
  console.log(error)
 }
}


