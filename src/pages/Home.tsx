import { Sidebar } from "../components/Sidebar";
import { Post } from "../components/Post";
import { posts } from "../mocks/postsMock";

import styles from "./Home.module.css";

export function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              publishedAt={post.publishedAt}
              content={post.content}
            />
          ))}
        </main>
      </div>
    </>
  );
}
