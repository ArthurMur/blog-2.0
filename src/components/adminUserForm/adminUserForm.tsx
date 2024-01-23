"use client"

import React from "react";
import styles from "./adminUserForm.module.sass";
import { useFormState } from "react-dom";
import { addUser } from "@/lib/action";
import Button from "../UI/Button/Button";

export default function AdminUserForm() {

  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Добавить нового пользователя</h1>
      <input type="text" name="username" placeholder="Имя" />
      <input type="text" name="email" placeholder="Электронная почта" />
      <input type="password" name="password" placeholder="Пароль" />
      <input type="text" name="img" placeholder="Ссылка на аватар" />
      <select name="isAdmin">
        <option value="false">Это админ?</option>
        <option value="false">Нет</option>
        <option value="true">Да</option>
      </select>
      <Button text="Добавить" />
      {state?.error}
    </form>
  );
}
