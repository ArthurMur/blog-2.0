import React, { FC } from 'react';
import Image from 'next/image';
import styles from './contact.module.sass';

export const metadata = {
  title: "Страница контактов Блогосфера",
  description: "Описание страницы контактов",
};

const ContactPage: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        {/* <HydrationTestNoSSR/> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Имя и Фамилия" />
          <input type="text" placeholder="Электронная почта" />
          <input type="text" placeholder="Номер телефона (не обязательно)" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Сообщение"
          ></textarea>
          <button>Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;