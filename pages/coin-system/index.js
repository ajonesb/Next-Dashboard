import React from "react";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Header from "../../src/components/Header/Header";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import View from "../../src/components/View/View";
import introData from "../api/coin-system/introData";
import data1 from "../api/coin-system/data1";

function CoinSystem() {
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
                <h2 className={styles.categories_title}>Total Sales</h2>
              </div>
            </div>
            <div className={styles.tabs}>
              <div className={styles.categories}>
              <h2 className={styles.categories_title}>Customers</h2>
              </div>
            </div>
            <div className={styles.tabs}>
              <div className={styles.categories}>
              <h2 className={styles.categories_title}>Users</h2>
              </div>
            </div>
            <div className={styles.tabs}>
              <div className={styles.categories}>
              <h2 className={styles.categories_title}>Projects</h2>
              </div>
            </div>
          </div>
          {/* Charts  */}
          <div className={styles.charts_container}>
            <div className={styles.bar_graph_wrapper}>
              <h2 className={styles.bar_graph_title}>Coin System Sales</h2>
              <Line data={introData} width={400} height={400} />
            </div>
            <div className={styles.circle_graph_wrapper}>
              <h2 className={styles.circle_graph_title}>Coin System Customers Arrived</h2>
              <Doughnut data={data1} width={400} height={400} />
            </div>
          </div>
        </div>
      </View>
    </>
  );
}

export default CoinSystem;
