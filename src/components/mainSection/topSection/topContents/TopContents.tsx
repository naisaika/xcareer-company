"use client";

import styles from "./TopContents.module.scss"
import  { InquiryButton } from "@/components/Button/inquiryButton/InquiryButton"
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export const TopContents = () => {

    const { ref, inView } = useInView({
        rootMargin: "0px",
        triggerOnce: true
    });

    const hasReloaded = useRef(false);
    const [fadeInClass, setFadeInClass] = useState<string>("");

    useEffect(() => {
        const navigationEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
        const isReload = navigationEntries.length > 0 && navigationEntries[0].type === "reload";
    
        if (isReload) {
          hasReloaded.current = true;
        }
    
        if (inView && hasReloaded.current) {
          setFadeInClass(styles.fadeIn);
          hasReloaded.current = false;
        } else if (inView) {
          setFadeInClass(styles.fadeIn);
        } else {
          setFadeInClass("");
        }
      }, [inView]);

  return (
    <div className={`${styles.topSectionCont} ${fadeInClass}`} ref={ref}>
        <div className={styles.titleImgSection}>
            <div className={`${styles.titleCont} ${inView && styles.fadeIn}`}>
                <p className={styles.subTitle}>工場・製造業のための人材紹介サービス</p>
                <h1 className={styles.mainTitle}>
                    <Image src="assets/logo.png" alt={"Factor Xキャリアロゴ"} width={488} height={72} className={styles.titleImg}></Image>
                </h1>
            </div>
            <div className={`${styles.topImgCont} ${inView && styles.fadeInOpacity}`}>
                <Image src="/assets/top-img.png" alt={"トップ画像"} width={760} height={480} priority className={styles.topImg}></Image>
            </div>
        </div>
        <div className={`${styles.descriptionCont} ${inView && styles.fadeIn}`}>
            <p className={styles.description}>
                <span className={styles.textStrongCont}>
                <span className={styles.boxText}>求人募集</span>
                <span className={styles.textNomal}>・</span>
                <span className={styles.boxText}>人材採用</span>
                </span>
                <span className={styles.textNomalCont}>
                <span className={styles.textSmall}>の</span>
                <span className={styles.textNomal}>お困りごと解決！</span>
                </span>
            </p>
        </div>
        <div className={`${styles.inquryBtn} ${inView && styles.fadeIn}`}>
            <InquiryButton/>
        </div>
    </div>

  )
}
