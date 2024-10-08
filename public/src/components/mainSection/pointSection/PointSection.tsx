import { TEXT_LIST } from "@/data/data"
import styles from "./PointSection.module.scss"
import { PointCard } from "./pointCard/PointCard";
import { Element } from "react-scroll";

const sectionId = 0; 
const titleText = TEXT_LIST.find((textId) => textId.id === sectionId);

export const PointSection = () => {

  return (

      <section className={styles.section} id="pointSection">
        <h2 className={styles.sectionTitle}>{titleText && titleText.title}</h2>
        <div className={styles.wrapper}>
            <p className={styles.sectionText}>Factor Xキャリアは、工場・製造業の企業様のための人材紹介サービスです。<br></br>
                専門のエージェントが貴社の採用課題に寄り添い、採用活動をご支援いたします。</p>
            <PointCard/>
        </div>
      </section>
  )
}