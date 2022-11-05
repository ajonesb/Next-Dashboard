import React from "react";
import styles from "./styles.module.css";

const View = ({ children, header }) => {
  return (
    <div className={styles.view}>
      <div className={styles.header}>{header}</div>

      <div>{children}</div>
    </div>
  );
};

export default View;
