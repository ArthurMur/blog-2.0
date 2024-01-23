import React, { FC } from "react";
import { handleGithubLogin } from "@/lib/action";
import LoginForm from "@/components/loginForm/LoginForm";
import styles from "./login.module.sass";
import ButtonGitHub from "@/components/UI/ButtonGitHub/ButtonGitHub";

const LoginPage: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <ButtonGitHub text="Войти с помощью GitHub" />
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
