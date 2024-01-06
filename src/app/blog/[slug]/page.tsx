import React, { FC } from 'react';
import styles from './singlePost.module.sass';
import Image from 'next/image';

const SinglePostPage: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={"/post.png"} alt="image" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Lorem ipsum dolor</h1>
        <div className={styles.detail}>
          <Image src={"/avatar.png"} alt="image" fill className={styles.avatar} />
          <div className={styles.info}>
            <span className={styles.author}>Автор:</span>
            <span className={styles.date}>Имя Фамилия</span>
          </div>
          <div className={styles.info}>
            <span className={styles.author}>Дата публикации:</span>
            <span className={styles.date}>10.04.2020</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur exercitationem porro id necessitatibus nam. Dolore id similique quod, cupiditate explicabo non deleniti laudantium, odit, magni libero expedita? Sapiente, aliquid enim!
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage;