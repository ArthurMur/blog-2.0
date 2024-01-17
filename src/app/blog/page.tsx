import React, { FC } from 'react';
import styles from './blog.module.sass';
import PostCard from '@/components/postCard/PostCard';

export const metadata = {
  title: "Страница постов",
  description: "Описание страницы постов",
};

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/blog', {next: {revalidate: 3600}});

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
}

const BlogPage: FC = async () => {

  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post: { id: string }) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post}/>
        </div>
      ))}
      
    </div>
  )
}

export default BlogPage;