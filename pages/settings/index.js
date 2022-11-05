import React from "react";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Header from "../../src/components/Header/Header";
import View from "../../src/components/View/View";

function Settings() {
  return (
    <>
      <Head>
        <title>
          Alan Jones - Senior Frontend Software Engineer | Developer
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.2.0/css/all.css"
        />

        <link
          rel="stylesheet"
          href="https://static.fontawesome.com/css/fontawesome-app.css"
        />
      </Head>
      <View header={<Header />}>
        <div className={styles.content_container}>
          <div className={styles.content_wrapper}>
            <div className={styles.tabs}>
              <div className={styles.categories}>
                <h2 className={styles.categories_title}>Settings</h2>
              </div>
            </div>
          </div>
        </div>
      </View>
    </>
  );
}

export default Settings;
