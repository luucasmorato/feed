import styles from "./Avatar.module.css";

type AvatarProps = {
  source: string;
  hasBorder?: boolean;
};

export function Avatar({ source, hasBorder }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={source}
    />
  );
}
