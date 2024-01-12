import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async (): Promise<Post[]> => {
  try {
    connectToDb();
    const posts: Post[] = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch posts');
  }
}

export const getPost = async (id: string): Promise<Post | null> => {
  try {
    connectToDb();
    const post:  Post | null = await Post.findOne({ id });
    if (!post) {
      throw new Error('Post not found');
    }
    return post;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch post');
  }
}

export const getUser = async (id: string): Promise<User | null> => {
  noStore();
  try {
    connectToDb();
    const user: User | null = await User.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (err) {
    console.log(err);
    console.log(id);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async (): Promise< User[]> => {
  try {
    connectToDb();
    const users: User[] = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch users');
  }
}