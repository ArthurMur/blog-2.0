import React from "react";
import Link from "next/link";
import styles from "./adminPosts.module.sass";
import { getPosts } from "@/lib/data";
import Image from "next/image";
import { deletePost } from "@/lib/action";
import ButtonDelete from "../UI/ButtonDelete/ButtonDelete";

type Props = { 
};

export default async function AdminPosts({}: Props) {
  "use server"
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <Link href={`/blog/${post.id}`}>
            <div className={styles.detail}>
              <Image
                src={post.img || "/noAvatar.png"}
                alt="изображение"
                width={50}
                height={50}
                className={styles.img}
              />
              <span className={styles.postTitle}>{post.title}</span>
            </div>
          </Link>
          <form action={deletePost}>
            <input type="hidden" name="_id" value={post._id.toString()} />
            <ButtonDelete text="Удалить" />
          </form>
        </div>
      ))}
    </div>
  );
}
