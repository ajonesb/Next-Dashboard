import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faRocket,
  faSignOutAlt,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";

function LeftNavbar() {
  return (
    <div className={styles.nav_container}>
      <div className={styles.logo}>
        <img
          src="../../../logo-large.png"
          alt="user"
          className={styles.profile_image}
        />
      </div>
      <div className={styles.nav_wrapper}>
        <ul className={styles.nav_items}>
          <li className={styles.nav_item}>
            <a href="/">
              <FontAwesomeIcon
                icon={faTachometerAlt}
                style={{ width: "18px", cursor: "pointer" }}
              />{" "}
            </a>

            <a className={styles.nav_item__link} href="/">
              Dashboard
            </a>
          </li>
          <li className={styles.nav_item}>
            <a href="/coin-system">
              <FontAwesomeIcon
                icon={faRocket}
                style={{ width: "18px", cursor: "pointer" }}
              />{" "}
            </a>
            <a className={styles.nav_item__link} href="/coin-system">
              Coin System
            </a>
          </li>

          <li className={styles.nav_item}>
            <a href="/settings">
              <FontAwesomeIcon
                icon={faCog}
                style={{ width: "18px", cursor: "pointer" }}
              />{" "}
            </a>

            <a className={styles.nav_item__link} href="/settings">
              {" "}
              Settings
            </a>
          </li>
          <li className={styles.nav_item}>
            <a href="/logout">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                style={{ width: "18px", cursor: "pointer" }}
              />{" "}
            </a>

            <a className={styles.nav_item__link} href="/logout">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftNavbar;
