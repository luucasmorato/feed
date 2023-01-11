import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

type CommentProps = {
  content: string;
  onDeleteComment: (comment: string) => void;
};

export function Comment({ content, onDeleteComment }: CommentProps) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar source="https://github.com/luucasmorato.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Morato</strong>
              <time
                title="11 de Março às 13:15h"
                dateTime="2022-03-11 13:15:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp /> Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
