import React, { FC } from "react";
import { handleGithubLogin } from "@/lib/action";
import LoginForm from "@/components/loginForm/LoginForm";
import styles from "./login.module.sass";

const LoginPage: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Войти с помощью GitHub</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
