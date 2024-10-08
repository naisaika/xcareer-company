import styles from "./GraphTitleParts.module.scss";

interface GraphTitlePartsProps {
    children: React.ReactNode;
}

export const GraphTitleParts = ({children}: GraphTitlePartsProps) => {
  return (
    <p className={styles.graphTitle}>{children}</p>
  )
}
