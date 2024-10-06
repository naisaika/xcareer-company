import styles from "./DataTitleParts.module.scss"

interface DataTitlePartsProps {
    children: React.ReactNode;
}

export const DataTitleParts = ({children}: DataTitlePartsProps) => {
  return (
    <h3 className={styles.dataTitle}>{children}</h3>
  )
}
