import { getUser } from "@/lib/data";
import styles from "./postUser.module.sass";

// FETCH DATA WITH AN API
// const getData = async (userId) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}` ,{cache:"no-store"});

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const PostUser = async ({ userId }: any) => {
  // FETCH DATA WITH AN API
  // const user = await getData(userId);

  // FETCH DATA WITHOUT AN API
  const user = await getUser(userId);

  return (
    <div className={styles.info}>
      <span className={styles.author}>Автор:</span>
      <span className={styles.authorValue}>{user.username}</span>
  </div>
  )
}

export default PostUser;