import React from 'react'
import styles from './footer.module.sass'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        БЛОГОСФЕРА
      </div>
      <div className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, totam?
      </div>
    </div>
  )
}