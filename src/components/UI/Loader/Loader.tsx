import React from "react";
import styles from "./Loader.module.sass";

const Loader: React.FC = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner} />
    </div>
  );
};

export default Loader;
