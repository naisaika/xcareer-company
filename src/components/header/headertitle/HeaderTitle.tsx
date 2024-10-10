import Image from "next/image"
import styles from "./HeaderTitle.module.scss"
import Link from 'next/link';

interface HeaderTitleProps {
  naviClick: () => void;
  isNaviOpen: boolean;
}

export const HeaderTitle = ({naviClick, isNaviOpen}: HeaderTitleProps) => {

  return (
    <div className={styles.headerTitleSec}>
        <Link href="#topSection" className={styles.headerTitleLink}>
          <Image src="/logo.png" alt={"Factor Xキャリアロゴ"}width={208} height={32} priority className={styles.headerTitle}></Image>
        </Link>
        <div className={`${styles.naviOpenCont} ${isNaviOpen ? styles.open : ''}`} onClick={naviClick}>
          <span className={`${isNaviOpen? styles.naviCloseLine1: styles.naviOpenLine}`}></span>
          <span className={`${isNaviOpen? styles.naviCloseLine2: styles.naviOpenLine}`}></span>
        </div>
    </div>
  )
}