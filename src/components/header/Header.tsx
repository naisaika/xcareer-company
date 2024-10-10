"use client";

import { useState } from "react";
import styles from "./Header.module.scss"
import { HeaderTitle } from "./headertitle/HeaderTitle"
import { Navi } from "./navi/Navi"

export const Header = () => {

  const [isNaviOpen, setIsNaviOpen] = useState(false);

  const naviClick = () => {
    setIsNaviOpen(!isNaviOpen);
  }

  return (
    <div className={styles.headerSec}>
      <HeaderTitle naviClick={naviClick} isNaviOpen={isNaviOpen}/>
      <Navi isNaviOpen={isNaviOpen}/>
    </div>
  )
}