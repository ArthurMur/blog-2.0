import React, { FC, Suspense } from "react";
import styles from "./singlePost.module.sass";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";
import Loader from "@/components/UI/Loader/Loader";
import ImgCard from "@/components/imgCard/imgCard";

interface SinglePostPageProps {
  params: any;
}

const SinglePostPage: FC<SinglePostPageProps> = async ({ params }) => {
  const { id } = params;

  const post = await getPost(id);

  return (
    <div className={styles.container}>
      <ImgCard postImgUrl={post?.img || ''} />
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<Loader />}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.info}>
            <span className={styles.date}>Дата публикации:</span>
            <span className={styles.dateValue}>
              {post?.createdAt.toString().slice(4, 15)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post?.text}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
