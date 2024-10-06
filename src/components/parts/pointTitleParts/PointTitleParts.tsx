import styles from "./PointTitleParts.module.scss";

interface childernProps {
    children: React.ReactNode;
}

export const PointTitleParts = ({children}: childernProps) => {
  return (
    <p className={styles.partsStyle}>{children}</p>
  )
}