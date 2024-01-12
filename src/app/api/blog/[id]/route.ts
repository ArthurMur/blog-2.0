import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/utils";
import { Post } from "@/lib/models";

export const GET = async (request: Request, { params }: { params: { id: string } }): Promise<NextResponse> => {

  const {id} = params;
  try {
    connectToDb();

    const post: Post[] | null = await Post.findOne({id});
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post");
  }
}

export const DELETE = async (request: Request, { params }: { params: { id: string } }): Promise<NextResponse> => {

  const {id} = params;
  try {
    connectToDb();
    await Post.findOneAndDelete({ id });
    return NextResponse.json("Post deleted");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete post");
  }
}