import React from 'react'
import Links from '../links/Links'
import styles from './navbar.module.sass'
import Link from 'next/link'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>БЛОГОСФЕРА</Link>
      <div>
        <Links/>
      </div>
    </div>
    
  )
}