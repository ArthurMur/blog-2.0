"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";
import { signIn } from "@/lib/auth";

export const addPost = async (formData: any) => {

  const { title, text, id, userId } = Object.fromEntries(formData) as typeof formData;
  try {
    connectToDb();
    const newPost = new Post({
      title,
      text,
      id,
      userId,
    });
    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
  } catch (err) {
    console.log(err);
    return "Failed to connect to db";
  }
}

export const deletePost = async (formData: any) => {
  const { postId } 
  = Object.fromEntries(formData) as typeof formData;
  try {
    connectToDb();
    await Post.findByIdAndDelete(postId);
    console.log("deleted from db");
    revalidatePath("/blog");
  } catch (err) {
    console.log(err);
    return "Failed to connect to db";
  }
}

export const handleGithubLogin = async () => {
  await signIn("github");
}