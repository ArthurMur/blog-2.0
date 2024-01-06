import React, { FC } from 'react';
import styles from './blog.module.sass';
import PostCard from '@/components/postCard/PostCard';

const BlogPage: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PostCard/>
      </div>
      <div className={styles.post}>
        <PostCard/>
      </div>
      <div className={styles.post}>
        <PostCard/>
      </div>
      <div className={styles.post}>
        <PostCard/>
      </div>
    </div>
  )
}

export default BlogPage;