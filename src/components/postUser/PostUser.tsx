import { getUser } from "@/lib/data";
import styles from "./postUser.module.sass";
import Image from "next/image";

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
      <Image src={user.img ? user.img : "/noavatar.png"} alt="image" fill={false} width={49} height={49} className={styles.avatar} />
      <div className={styles.container}>
        <span className={styles.author}>Автор:</span>
        <span className={styles.authorValue}>{user.username}</span>
      </div>

  </div>
  )
}

export default PostUser;