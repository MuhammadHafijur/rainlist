import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rain List | Home</title>
        <meta name="keywords" content="rains" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex incidunt,
          culpa fuga, ut eaque eius harum quisquam inventore ullam quibusdam
          eum. Atque exercitationem vel rerum quibusdam dolor sed, vero beatae.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex incidunt,
          culpa fuga, ut eaque eius harum quisquam inventore ullam quibusdam
          eum. Atque exercitationem vel rerum quibusdam dolor sed, vero beatae.
        </p>
        <Link href="/rains">
          <a className={styles.btn}>See Rain Listing</a>
        </Link>
      </div>
    </>
  );
}
