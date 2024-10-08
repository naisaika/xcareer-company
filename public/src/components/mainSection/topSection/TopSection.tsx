import Image from "next/image"
import styles from "./TopSection.module.scss"
import  { InquiryButton } from "@/components/Button/inquiryButton/InquiryButton"

export const TopSection = () => {
  return (
    <section className={styles.topSection}>
        <div className={styles.titleCont}>
            <p className={styles.subTitle}>工場・製造業のための人材紹介サービス</p>
            <h1 className={styles.mainTitle}>
                <Image src="/logo.png" alt={"Factor Xキャリアロゴ"}width={488} height={72} priority className={styles.titleImg}></Image>
            </h1>
        </div>
        <div className={styles.topImgCont}>
            <Image src="/top-img.png" alt={"トップ画像"} width={760} height={480} priority className={styles.topImg}></Image>
        </div>
        <div className={styles.descriptionCont}>
            <p className={styles.description}>
                <span className={styles.boxText}>求人募集</span>
                <span className={styles.textNomal}>・</span>
                <span className={styles.boxText}>人材採用</span>
                <span className={styles.textSmall}>の</span>
                <span className={styles.textNomal}>お困りごと解決！</span>
            </p>
        </div>
        <div className={styles.inquryBtn}>
            <InquiryButton/>
        </div>
    </section>
  )
}

