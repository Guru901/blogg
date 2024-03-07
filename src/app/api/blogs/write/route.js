import Blog from "@/Models/blogModel";
import { conn } from "@/dbConfig/connect";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    conn();

    const req = await request.json();

    const { title, des, body, image } = req;

    console.log(req);

    const blog = await Blog.create({
      title,
      body,
      des,
      image,
    });
    const response = NextResponse.json({ success: true });
    return response;
  } catch (error) {
    console.log("error");
    return NextResponse.json("ERROR");
  }
}
