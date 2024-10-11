"use client";

import { TEXT_LIST } from "@/data/data"
import styles from "./CostSection.module.scss"
import Image from "next/image";
import { CostCard } from "./costCard/CostCard";
import { InquiryButton } from "@/components/Button/inquiryButton/InquiryButton";
import { useInView } from "react-intersection-observer"

const sectionId = 1;
const sectionTitle = TEXT_LIST.find((title) => title.id === sectionId)

export const CostSection = () => {

    const { ref, inView } = useInView({
        rootMargin: "0px", 
        threshold: 0.3, 
        triggerOnce: true,
    });

  return (
    <section className={styles.section} id="costSection">
        <h2 className={styles.sectionTitle}>{sectionTitle && sectionTitle.title}</h2>
        <div className={styles.wrapper}>
            <div className={styles.prPointCont}>
                <p className={styles.prPointNomal}>Factor Xキャリアは</p>
                <p className={`${styles.prPointStrong} ${inView && styles.scale}`} ref={ref}>
                    <span className={styles.prPointStrongBlack}>＼業界最安水準／</span>
                    <span className={styles.prPointStrongOrange}>完全成果報酬型</span>
                </p>
                <p className={styles.prPointNomal2}>のサービスです。</p>
            </div>
            <div className={styles.prSubPointCont}>
                <p className={styles.prSubPointNomal}>人材採用が決定するまで</p>
                <p className={styles.prSubPointStrong}>料金は一切かかりません！</p>
            </div>
            <div className={styles.cardSection}>
                <Image src="/cost/money.png" alt="無料画像" width={240} height={240} priority className={styles.costImg}></Image>
                <CostCard/>
            </div>
        </div>
        <div className={styles.contactBtnCont}>
            <p className={styles.contactText}>＼まずはお気軽にお問い合わせください！／</p>
            <InquiryButton/>
        </div>
    </section>
  )
}