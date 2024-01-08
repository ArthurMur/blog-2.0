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
          <Image src={post.img} alt="image" fill className={styles.img} />
        </div>
        <span className={styles.date}>
          06.01.2024
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