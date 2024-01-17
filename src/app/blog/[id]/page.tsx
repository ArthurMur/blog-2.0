import React, { FC, Suspense } from 'react';
import styles from './singlePost.module.sass';
import Image from 'next/image';
import PostUser from '@/components/postUser/PostUser';
import { getPost } from '@/lib/data';
import { Post } from '@/lib/models';


export const generateMetadata =  async ({params}: {params: {id: any}}) => {
  const {id} = params;

  const post = await getPost(id);

  return {
    title: post?.title,
    desription: post?.text,
  }
};

interface SinglePostPageProps {
  params: any;
}

const getData = async (id: any) => {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data
}

const SinglePostPage: FC<SinglePostPageProps> = async ({params}) => {

  const {id} = params;

  const post = await getData(id);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={post.img} alt="image" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {post && <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId = {post.userId}/>
          </Suspense>}
          <div className={styles.info}>
            <span className={styles.date}>Дата публикации:</span>
            <span className={styles.dateValue}>{post.createdAt.toString().slice(0, 10)}</span>
          </div>
        </div>
        <div className={styles.content}>
          {post?.text}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage;