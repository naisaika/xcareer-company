"use client";

import { useState, useEffect } from 'react';
import { TEXT_LIST } from "@/data/data"
import styles from "./PointSection.module.scss"
import { PointCard } from "./pointCard/PointCard";

const sectionId = 0; 
const titleText = TEXT_LIST.find((textId) => textId.id === sectionId);

export const PointSection = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
      <section className={`${styles.section} ${isVisible ? styles.adjustOpacity : ''}`} id="pointSection" >
        <h2 className={styles.sectionTitle}>{titleText && titleText.title}</h2>
        <div className={styles.wrapper}>
            <p className={styles.sectionText}>
              <span>Factor Xキャリアは、工場・製造業の企業様のための人材紹介サービスです。</span>
              <span>専門のエージェントが貴社の採用課題に寄り添い、採用活動をご支援いたします。</span>
            </p>
            <PointCard/>
        </div>
      </section>
  )
}