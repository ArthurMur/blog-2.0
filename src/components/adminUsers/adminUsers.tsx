import React from 'react'
import styles from './adminUsers.module.sass'
import { getUsers } from '@/lib/data'
import { deleteUser } from '@/lib/action';
import Image from 'next/image';
import ButtonDelete from '../UI/ButtonDelete/ButtonDelete';

type Props = {}

export default async function AdminUser({}: Props) {
  const users = await getUsers();
  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users.map((user) => (
        <div className={styles.user} key={user.id}>
          <div className={styles.detail}>
            <Image src={user.img || "/noAvatar.png"} alt="изображение" width={50} height={50} className={styles.img} />
            <span className={styles.userTitle}>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <ButtonDelete text="Удалить" />
          </form>
        </div>
      ))}
    </div>
  )
}