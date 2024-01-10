import React, { FC } from "react";
import Image from "next/image";
import styles from "./about.module.sass";

export const metadata = {
  title: "Страница О нас",
  description: "Описание страницы О нас",
};

const AboutPage: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Мы&nbsp;создаем цифровые идеи, которые больше, смелее, смелее и&nbsp;лучше.
        </h1>
        <p className={styles.desc}>
          Мы&nbsp;верим в&nbsp;хорошие идеи, гибкость и&nbsp;точность. 
          Наша специальная команда является лучшим в&nbsp;мире поставщиком консалтинговых и&nbsp;финансовых решений. 
          Широкий спектр услуг по&nbsp;разработке веб-сайтов и&nbsp;программного обеспечения.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10+</h1>
            <p>Лет опыта</p>
          </div>
          <div className={styles.box}>
            <h1>550+</h1>
            <p>Проектов запущено</p>
          </div>
          <div className={styles.box}>
            <h1>2 млн+</h1>
            <p>Аудитория активных проектов</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
