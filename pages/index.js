import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          This is HOME PAGE
          <br />
          Go <Link href="/away">AWAY</Link>
        </h1>
      </main>
    </div>
  );
}
