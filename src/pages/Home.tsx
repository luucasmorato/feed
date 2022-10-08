import { Sidebar } from "../components/Sidebar";
import styles from "./Home.module.css";

export function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <Sidebar />

        <main>main</main>
      </div>
    </>
  );
}
