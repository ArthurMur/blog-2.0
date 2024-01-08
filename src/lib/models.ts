import mongoose, { Schema, Document } from "mongoose";

interface User extends Document {
  username: string;
  email: string;
  img?: string;
  password: string;
  isAdmin: boolean;
}

const userSchema: Schema<User> = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 2,
    max: 10
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  img: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    min: 6
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
}, {timestamps: true});

interface Post extends Document {
  title: string;
  text: string;
  img?: string;
  userId: string;
  id: string;
}

const postSchema: Schema<Post> = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
    unique: true
  },
}, {timestamps: true});

export const User = mongoose.models.User || mongoose.model<User>('User', userSchema);
export const Post = mongoose.models.Post || mongoose.model<Post>('Post', postSchema);