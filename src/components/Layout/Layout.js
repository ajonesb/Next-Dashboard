import React from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";


export default function Layout(children) {
  return (
    <div className={styles.container}>
      {/* <Head>
        <title>Create dashboard</title>
        <meta name="description" content="Created by streamline" />
        <link rel="icon" href="/pro.ico" />
      </Head> */}
      <div className={styles.container}>
        <div>{children}</div>
      </div>
    </div>
  );
}
