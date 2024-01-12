import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/utils";
import { Post } from "@/lib/models";

export const GET = async (): Promise<NextResponse> => {
  try {
    connectToDb();

    const posts: Post[] = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
}