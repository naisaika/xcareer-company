import Image from "next/image"
import styles from "./HeaderTitle.module.scss"

export const HeaderTitle = () => {
  return (
    <div className={styles.headerTitleSec}>
        <Image src="/logo.png" alt={"Factor Xキャリアロゴ"}width={208} height={32} priority className={styles.headerTitle}></Image>
    </div>
  )
}
