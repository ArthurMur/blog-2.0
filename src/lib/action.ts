"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "@/lib/auth";
import bcrypt from "bcryptjs";

export const addPost = async (prevState: any, formData: any) => {
  const { title, text, id, userId, img } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = new Post({
      title,
      text,
      id,
      userId,
      img
    });
    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Failed to connect to db" };
  }
};

export const deletePost = async (formData: any) => {
  const { _id } = Object.fromEntries(formData);
  try {
    console.log("Deleting post with _id:", _id);
    connectToDb();
    await Post.findByIdAndDelete(_id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Failed to connect to db" };
  }
};

export const addUser = async (prevState: any, formData: any) => {
  const { username, email, password, img } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });
    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Failed to connect to db" };
  }
};

export const deleteUser = async (formData: any) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Failed to connect to db" };
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (previousState: any, formData: any) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Пароли не совпадают." };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Такой пользователь уже зарегистрирован." };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      password: hashedPassword,
      img,
      email,
    });

    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Failed to connect to db" };
  }
};

export const login = async (previousState: any, formData: any) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err: any) {
    console.log(err);
    if (err.message.includes("CredintialsSignin")) {
      return { error: "Неверное имя пользователя или пароль." };
    }
    throw err;
  }
};
