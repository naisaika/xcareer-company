"use client";

import Image from "next/image"
import styles from "./HeaderTitle.module.scss"
import Link from "next/link";

interface HeaderTitleProps {
  naviClick: () => void;
  setIsNaviOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isNaviOpen: boolean;
}

export const HeaderTitle = ({naviClick, isNaviOpen, setIsNaviOpen}: HeaderTitleProps) => {

  const handleLogoClick = () => {
    setIsNaviOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

  return (
    <div className={styles.headerTitleSec}>
        <Link href="#" className={styles.headerTitleLink}>
          <Image src="/logo.png" alt={"Factor Xキャリアロゴ"}width={208} height={32} priority className={styles.headerTitle} onClick={handleLogoClick}></Image>
        </Link>
        <div className={`${styles.naviOpenCont} ${isNaviOpen ? styles.open : ''}`} onClick={naviClick}>
          <span className={`${isNaviOpen? styles.naviCloseLine1: styles.naviOpenLine}`}></span>
          <span className={`${isNaviOpen? styles.naviCloseLine2: styles.naviOpenLine}`}></span>
        </div>
    </div>
  )
}