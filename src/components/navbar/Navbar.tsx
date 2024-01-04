import React from 'react'
import Links from '../links/Links'
import styles from './navbar.module.sass'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>BLOG</div>
      <div>
        <Links/>
      </div>
    </div>
    
  )
}