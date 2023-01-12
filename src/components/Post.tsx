import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { FormEvent, useState } from "react";
import { TypeContent } from "../enums";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

type Author = {
  avatarUrl: string;
  name: string;
  role: string;
};

type Content = Array<{
  type: string;
  content: string;
}>;

type PostProps = {
  author: Author;
  publishedAt: Date;
  content: Content;
};

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState<string[]>([]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleNewCommentChange(newComment: string) {
    setNewCommentText(newComment);
  }

  function handleCreateNewComment(e: FormEvent) {
    e.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText("");
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeleteddOne = comments.filter(
      (comment) => comment !== commentToDelete
    );

    setComments(commentsWithoutDeleteddOne);
  }

  const isNewCommentEmpty = !!!newCommentText.length;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder source={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === TypeContent.PARAGRAPH) {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === TypeContent.LINK) {
            return (
              <p key={line.content}>
                <a href="">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form
        onSubmit={(e) => handleCreateNewComment(e)}
        className={styles.commentForm}
      >
        <strong>Deixe seu feedback</strong>
        <textarea
          value={newCommentText}
          onChange={(e) => handleNewCommentChange(e.target.value)}
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
