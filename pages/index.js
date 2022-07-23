import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Next Js Tutorial</title>
      </Head>
      <Link href="/about">About</Link>
      <h1>NEXT LEVEL HOMEPAGE</h1>
    </div>
  );
}
