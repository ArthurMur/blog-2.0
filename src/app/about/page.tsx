import React, { FC } from 'react';
import Image from 'next/image';
import styles from './about.module.sass';

const AboutPage: FC = () => {
  return (
    <div>
      <h1>About Page</h1>
      <div className={styles.imgContainer}>
        <Image src="/about.png " alt="about" fill/>
      </div>
    </div>
  )
}

export default AboutPage;