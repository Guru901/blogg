import User from "@/Models/userModel";
import { conn } from "@/dbConfig/connect";
import { NextResponse } from "next/server";

export async function POST(request) {
  conn();

  const req = await request.json();

  const { username, password } = req;

  const user = await User.findOne({ username: username });

  if (user.password === password) {
    const response = NextResponse.json({ login: true });
    return response;
  }

  return NextResponse.json("Nice");
}
