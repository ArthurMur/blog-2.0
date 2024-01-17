import { getUser } from "@/lib/data";
import styles from "./postUser.module.sass";
import Image from "next/image";

const PostUser = async ({ userId }: any) => {
  const user = await getUser(userId);

  return (
    <div className={styles.info}>
      <Image src={user?.img ? user.img : "/noavatar.png"} alt="image" fill={false} width={49} height={49} className={styles.avatar} />
      <div className={styles.container}>
        <span className={styles.author}>Автор:</span>
        <span className={styles.authorValue}>{user?.username}</span>
      </div>

  </div>
  )
}

export default PostUser;