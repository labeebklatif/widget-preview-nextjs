import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          This is AWAY PAGE
          <br />
          Go <Link href="/">HOME</Link>
        </h1>
      </main>
    </div>
  );
}
