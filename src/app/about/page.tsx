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
          С&nbsp;нами легко: истории нашей жизни в&nbsp;каждом посте блога.
        </h1>
        <p className={styles.desc}>
          Добро пожаловать в&nbsp;наш увлекательный мир творчества!
          Мы&nbsp;&mdash; команда творческих энтузиастов, которые с&nbsp;любовью
          и&nbsp;страстью делятся своими историями, проектами
          и&nbsp;вдохновением. Здесь каждый пост&nbsp;&mdash; это кусочек нашей
          души, созданный с&nbsp;заботой и&nbsp;радостью. Присоединяйтесь
          к&nbsp;нашей истории, и&nbsp;давайте вместе раскроем бескрайний мир
          творческих возможностей!
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
