import Blog from "@/Models/blogModel";
import { conn } from "@/dbConfig/connect";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    conn();

    const req = await request.json();

    const { blogId } = req;

    const blogs = await Blog.findById(blogId);
    const response = NextResponse.json(blogs);
    return response;
  } catch (error) {
    console.log("error");
  }
}
