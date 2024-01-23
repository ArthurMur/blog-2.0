"use client";
import Image from "next/image";
import styles from "./home.module.sass";
import Button from "@/components/UI/Button/Button";
import ButtonLight from "@/components/UI/ButtonLight/ButtonLight";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <motion.div className={styles.mask}>
          <h1 className={styles.title}>Агенство творческих мыслей</h1>
        </motion.div>
        <h1 className={styles.title}>Агенство творческих мыслей</h1>
        <p className={styles.description}>
          Создай свой уникальный блог с&nbsp;нами! Делись своим опытом,
          вдохновляй и&nbsp;будь частью нашего разнообразного сообщества. Добро
          пожаловать в&nbsp;мир твоих историй!
        </p>
        <div className={styles.buttons}>
          <Button text="Начать" />
          <ButtonLight text="Подробнее" />
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
