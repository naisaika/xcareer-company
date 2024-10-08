import styles from "./ContactTitleParts.module.scss"

interface ChildrenProps {
    children: React.ReactNode;
}

export const ContactTitleParts = ({children}: ChildrenProps) => {
  return (
    <p className={styles.title}>{children}</p>
  )
}
