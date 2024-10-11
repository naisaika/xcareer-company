"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.scss"
import { HeaderTitle } from "./headertitle/HeaderTitle"
import { Navi } from "./navi/Navi"

export const Header = () => {

  const [isNaviOpen, setIsNaviOpen] = useState(false);

  const naviClick = () => {
    setIsNaviOpen((prev) => !prev);
  }

  useEffect(() => {
    if (isNaviOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isNaviOpen]);

  return (
    <div className={styles.headerSec}>
      <HeaderTitle naviClick={naviClick} isNaviOpen={isNaviOpen} setIsNaviOpen={setIsNaviOpen}/>
      <Navi isNaviOpen={isNaviOpen} setIsNaviOpen={setIsNaviOpen}/>
    </div>
  )
}