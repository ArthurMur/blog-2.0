import Image from "next/image";
import styles from "./home.module.sass";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Агенство творческих мыслей</h1>
        <p className={styles.description}>
          Создай свой уникальный блог с&nbsp;нами! Делись своим опытом,
          вдохновляй и&nbsp;будь частью нашего разнообразного сообщества. Добро
          пожаловать в&nbsp;мир твоих историй!
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Начать</button>
          <button className={styles.button}>Подробнее</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="brands"
            fill
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" alt="hero" fill className={styles.heroImg} />
      </div>
    </div>
  );
}
