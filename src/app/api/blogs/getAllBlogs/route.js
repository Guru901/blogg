import Blog from "@/Models/blogModel";
import { conn } from "@/dbConfig/connect";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    conn();
    const blogs = await Blog.find({});
    const response = NextResponse.json(blogs);
    return response;
  } catch (error) {
    console.log("error");
  }
}
