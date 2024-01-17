import React, { FC } from "react";
import styles from "./register.module.sass";
import RegisterForm from "@/components/registerForm/RegisterForm";
const RegisterPage: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
