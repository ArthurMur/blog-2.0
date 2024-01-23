"use client";

import React from "react";
import styles from "./adminPostForm.module.sass";
import { useFormState } from "react-dom";
import { addPost } from "@/lib/action";
import Button from "../UI/Button/Button";

type Props = {
  userId: string | undefined;
};
export default function AdminPostForm({ userId }: Props) {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Добавить новый пост</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Заголовок поста" />
      <input type="text" name="id" placeholder="id поста" />
      <input type="text" name="img" placeholder="Ссылка на картинку" />
      <textarea name="text" placeholder="Описание" rows={10} />
      <Button text="Добавить" />
      {state?.error}
    </form>
  );
}
