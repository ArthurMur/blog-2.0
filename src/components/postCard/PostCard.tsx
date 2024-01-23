import React from 'react';
import styles from './postCard.module.sass';
import Image from 'next/image';
import Link from 'next/link';

type Props = {post: any}

export default function PostCard({post}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          {post.img ? <Image src={post.img} alt="image" layout="fill" objectFit="cover" fill className={styles.img} /> : <p className={styles.noImg}>Пост без изображения</p>}
        </div>
        <span className={styles.date}>
          {post.createdAt.toString().slice(0,10)}
        </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.descr}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.id}`}>Читать далее</Link>
      </div>
    </div>
  )
}