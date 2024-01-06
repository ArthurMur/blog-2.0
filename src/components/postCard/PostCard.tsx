import React from 'react';
import styles from './postCard.module.sass';
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

export default function PostCard({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/post.png" alt="image" fill className={styles.img} />
        </div>
        <span className={styles.date}>
          06.01.2024
        </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Lorem ipsum dolor</h1>
        <p className={styles.descr}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, totam?</p>
        <Link className={styles.link} href="/blog/post">Читать далее</Link>
      </div>
    </div>
  )
}