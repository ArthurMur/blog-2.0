import React, { FC } from 'react';
import styles from './blog.module.sass';
import PostCard from '@/components/postCard/PostCard';
import { getPosts } from '@/lib/data';

// const getData = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   const data = await res.json();
//   return data
// }

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