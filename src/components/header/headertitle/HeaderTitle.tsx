import Image from "next/image"
import styles from "./HeaderTitle.module.scss"
import Link from 'next/link';

export const HeaderTitle = () => {
  return (
    <div className={styles.headerTitleSec}>
        <Link href="#topSection" className={styles.headerTitleLink}>
          <Image src="/logo.png" alt={"Factor Xキャリアロゴ"}width={208} height={32} priority className={styles.headerTitle}></Image>
        </Link>
    </div>
  )
}