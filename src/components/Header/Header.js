import React from "react";
import styles from "./styles.module.css";
import LeftNavbar from "../LeftNavBar/LeftNavbar";

function Header() {
  return (
    <>
      <LeftNavbar />
      <div className={styles.header_container}>
        <div className={styles.header_wrapper}>
          <div className={styles.title_text__container}>
            <h2 className={styles.title}>
              Hello, <span classNAme={styles.title_user}>Alan</span>
            </h2>
            <p className={styles.title_text}>welcome to the Voyce.me board!</p>
          </div>
          <div className={styles.profile}>
            <img
              src="../../../assets/header/user.png"
              alt="user"
              className={styles.profile_image}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
