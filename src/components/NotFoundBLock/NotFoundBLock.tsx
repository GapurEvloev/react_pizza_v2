import React from "react";
import styles from "./styles.module.sass";

const NotFoundBLock: React.FC = () => {
  return (
    <h1 className={styles.root}>
      <span>😕</span>
      <br />
      Not found
    </h1>
  );
};

export default NotFoundBLock;
