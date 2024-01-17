"use client";
import React, { FC, useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { login } from '@/lib/action';

import styles from './loginForm.module.sass';
import Link from 'next/link';

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = () => {
  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter();

  // useEffect(() => {
  //   state?.login && router.push('/login');
  // }, [state?.login, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Имя" name="username" />
      <input type="password" placeholder="Пароль" name="password" />
      <button>Войти</button>
      {state?.error && <p className={styles.error}>{state.error}</p>}
      <Link href="/register" className={styles.registerBtn}>Зарегистрироваться</Link>
    </form>
  );
};

export default LoginForm;