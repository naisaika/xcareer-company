"use client";

import { useState, useRef } from "react";
import { PointTitleParts } from "@/components/parts/pointTitleParts/PointTitleParts"
import styles from "./Interview.module.scss"
import { InterviewPointParts } from "./interviewPointParts/InterviewPointParts"
import Image from "next/image"
import { DetailViewButton } from "@/components/Button/detailViewButton/DetailViewButton"
import { InterviewContents } from "./interviewContents/InterviewContents"

export const Interview = () => {

  const [isOpen, setIsOpen] = useState(false);
  const detailViewBtnRef = useRef<HTMLDivElement | null>(null);
  const previousScrollPos = useRef<number>(0); 

  const onClickShowDetail = () => {
    if (isOpen) {
      window.scrollTo({ top: previousScrollPos.current, behavior: "smooth" });
    } else {
      previousScrollPos.current = window.scrollY;
      if (detailViewBtnRef.current) {
        const rect = detailViewBtnRef.current.getBoundingClientRect();
        setTimeout(() => {
          window.scrollTo({ top: rect.top + window.scrollY, behavior: "smooth" });
        }, 100);
      }
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.interviewSection}>
      <div className={styles.wrapper}>
        <div className={styles.isView}>
          <div className={styles.imgCont}>
            <PointTitleParts>
              <InterviewPointParts/>
            </PointTitleParts>
            <Image src="/assets/voice/interview-img.png" alt="インタビュー画像" width={380} height={244} priority className={styles.img}></Image>
          </div>
          <div className={styles.titleCont}>
            <p className={styles.interviewTitle}>インタビューのタイトルをここに表示</p>
            <p className={styles.interviewSummary}>弊社の採用課題の解決のために手厚いサポートをしていただけました。<br></br>
                自社の力だけではできなかったこともFactor Xキャリアのエージェントの皆様のおかげで、今ではスムーズな採用を行えるようになりました。</p>
            <div className={styles.detailViewBtnCont}  id="viewDetail">
              <DetailViewButton onClick={onClickShowDetail} isOpen={isOpen}>
                {isOpen? "閉じる": "詳しく見る"}</DetailViewButton>
            </div>
          </div>
        </div>
        <div className={`${styles.detailCont} ${isOpen? styles.detailContShow: ""}`}>
          <InterviewContents 
            onClick={onClickShowDetail} isOpen={isOpen}/>
        </div>
    </div>
  </div>
  )
}
