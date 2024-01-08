// const users = [
//   {
//     id: 1,
//     username: 'Artur',
//   },
//   {
//     id: 2,
//     username: 'Alex',
//   }
// ];

import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// interface Post {
//   id: number;
//   title: string;
//   userId: number;
//   body: string;
// }

// const posts: Post[] = [
//   {
//     id: 1,
//     title: 'post 1',
//     userId: 1,
//     body: 'post post'
//   },
//   {
//     id: 2,
//     title: 'post 2',
//     userId: 1,
//     body: 'post post'
//   },
//   {
//     id: 3,
//     title: 'post 3',
//     userId: 2,
//     body: 'post post'
//   },
//   {
//     id: 4,
//     title: 'post 4',
//     userId: 2,
//     body: 'post post'
//   },
// ]


export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch posts');
  }
}

export const getPost = async (id: string) => {
  try {
    connectToDb();
    const post = await Post.findOne({id});
    return post;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch post');
  }
}

export const getUser = async (id: any) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    console.log(id);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch users');
    }
}
