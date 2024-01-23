import React from 'react'
import styles from './ButtonLight.module.sass'

type Props = {
  text: string;
}

const ButtonLight = ({ text }: Props) => {
  return (
    <button className={styles.button}>{text}</button>
  )
}

export default ButtonLight