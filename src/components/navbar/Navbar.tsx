import React from 'react'
import Links from '../links/Links'
import styles from './navbar.module.sass'
import Link from 'next/link'
import { auth } from '@/lib/auth'

type Props = {}

export default async function Navbar({}: Props) {

  const session = await auth();

  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>БЛОГОСФЕРА</Link>
      <div>
        <Links session={session}/>
      </div>
    </div>
    
  )
}