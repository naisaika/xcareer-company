"use client";

import styles from "./TopContents.module.scss"
import  { InquiryButton } from "@/components/Button/inquiryButton/InquiryButton"
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { PR_POINTS } from "@/data/data";

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
                <p className={styles.subTitle}>製造業が運営する、製造業のための人材紹介サービス</p>
                <h1 className={styles.mainTitle}>
                  <Image src="https://www.factorx.jp/xcareercompany/assets/logo.png" alt="Factor Xキャリアロゴ" width={488} height={72} className={styles.titleImg}></Image>
                </h1>
            </div>
            <div className={`${styles.topImgCont} ${inView && styles.fadeInOpacity}`}>
              <div className={styles.topImgBox}>
                <Image src="https://www.factorx.jp/xcareercompany/assets/top-img.png" alt="トップ画像" width={760} height={480} priority className={styles.topImg}></Image>
                  <ul className={styles.pointList}>
                    {PR_POINTS.map((point) => 
                      <li key={point.id} className={styles.pointItem}>
                        <Image src="https://www.factorx.jp/xcareercompany/assets/check-icon.svg" alt="チェックアイコン" width={20} height={16} className={styles.pointIcon}></Image>
                        {point.text}
                      </li>
                    )}
                  </ul>
              </div>
            </div>
        </div>
        <div className={`${styles.descriptionCont} ${inView && styles.fadeIn}`}>
          <p className={styles.description}>
            <span className={styles.textYellow}>製造業</span>
            <span className={styles.textSmall}>の</span>
            <span className={styles.textWhite}>採用課題</span>
            <span className={styles.textSmall}>を</span>
            <span className={styles.textYellow}>製造業の力</span>
            <span className={styles.textSmall}>で</span>
            <span className={styles.textWhite}>解決！</span>
          </p>
        </div>
        <div className={`${styles.inquryBtn} ${inView && styles.fadeIn}`}>
            <InquiryButton/>
        </div>
    </div>

  )
}
