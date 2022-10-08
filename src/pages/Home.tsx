import { Sidebar } from "../components/Sidebar";
import { Post } from "../components/Post";
import styles from "./Home.module.css";

export function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post />
        </main>
      </div>
    </>
  );
}
