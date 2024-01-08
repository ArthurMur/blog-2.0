import React, { FC, Suspense } from 'react';
import styles from './singlePost.module.sass';
import Image from 'next/image';
import PostUser from '@/components/postUser/PostUser';
import { getPost } from '@/lib/data';

interface SinglePostPageProps {
  params: any;
}

// const getData = async (id: any) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   const data = await res.json();
//   return data
// }

const SinglePostPage: FC<SinglePostPageProps> = async ({params}) => {

  const {id} = params;

  // const post = await getData(id);
  const post = await getPost(id) ;

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={post.img} alt="image" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Image src={'https://i.pinimg.com/originals/4b/c0/0c/4bc00c178c7d8b0493e1e83d244780aa.jpg'} alt="image" fill={false} width={49} height={49} className={styles.avatar} />
          {post && <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId = {post.userId}/>
          </Suspense>}
          <div className={styles.info}>
            <span className={styles.date}>Дата публикации:</span>
            <span className={styles.dateValue}>06.01.2024</span>
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