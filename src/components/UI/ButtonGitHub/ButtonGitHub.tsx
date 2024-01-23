import React from 'react'
import styles from './ButtonGitHub.module.sass'

type Props = {
  text: string;
}

const ButtonGitHub = ({ text }: Props) => {
  return (
    <button className={styles.button}>{text}</button>
  )
}

export default ButtonGitHub