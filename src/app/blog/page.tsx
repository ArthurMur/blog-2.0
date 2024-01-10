import React, { FC } from 'react';
import styles from './blog.module.sass';
import PostCard from '@/components/postCard/PostCard';
import { getPosts } from '@/lib/data';

export const metadata = {
  title: "Страница постов",
  description: "Описание страницы постов",
};

const BlogPage: FC = async () => {

  // const posts = await getData();
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post: { id: number }) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post}/>
        </div>
      ))}
      
    </div>
  )
}

export default BlogPage;