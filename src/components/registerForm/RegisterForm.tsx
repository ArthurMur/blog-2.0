"use client";
import React, { FC, useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { register } from '@/lib/action';

import styles from './registerForm.module.sass';
import Link from 'next/link';
import Button from '../UI/Button/Button';

interface RegisterFormProps {}

const RegisterForm: FC<RegisterFormProps> = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push('/login');
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Имя" name="username" />
      <input type="email" placeholder="Почта" name="email" />
      <input type="password" placeholder="Пароль" name="password" />
      <input
        type="password"
        placeholder="Подтвердите пароль"
        name="passwordRepeat"
      />
      <Button text="Зарегистрироваться" />
      {state?.error && <p className={styles.error}>{state.error}</p>}
      <Link href="/login" className={styles.loginBtn}>Войти</Link>
      

    </form>
  );
};

export default RegisterForm;