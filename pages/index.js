import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Running-passion</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Mariusz Golik</h1>
        <h3>Full stack JavaScript Developer</h3>
        <p>Here will be a page about running with passion </p>
      </main>
    </div>
  );
}
