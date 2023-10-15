import connectToMongoDB from "@/app/libs/mongodb";
import UserAdmin from "@/app/models/userAdmin";
import { NextResponse } from "next/server";

// - GET - //
export async function GET(request) {
    await connectToMongoDB();
    const userAdmin = await UserAdmin.find();
    return NextResponse.json({ userAdmin });
  }