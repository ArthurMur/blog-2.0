import React from 'react'
import styles from './ButtonDelete.module.sass'

type Props = {
  text: string;
}

const ButtonDelete = ({ text }: Props) => {
  return (
    <button className={styles.button}>{text}</button>
  )
}

export default ButtonDelete