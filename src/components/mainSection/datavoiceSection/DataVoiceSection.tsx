import { TEXT_LIST } from "@/data/data";
import styles from "./DataVoiceSection.module.scss";
import { Voice } from "./voice/Voice";
import { GraphData } from "./graphData/GraphData";
import { DataTitleParts } from "./dataTitleParts/DataTitleParts";

const sectionId = 3;
const titleText = TEXT_LIST.find((textId) => textId.id === sectionId);

export const DataVoiceSection = () => {
  return (
    <section className={styles.section} id="dataVoiceSection">
      <h2 className={styles.sectionTitle}>{titleText && titleText.title}</h2>
      <div className={styles.wrapper}>
          <p className={styles.sectionText}>
            <span>Factor Xキャリアには、工場・製造業で働きたい人材が多数登録しております。</span>
            <span>貴社の求める条件にマッチした豊富な経験やスキルのある人材もご紹介可能です。</span>
            <span>実際にサービスをご利用いただいた企業様の声もご覧いただけます。</span>
            <span>専門のエージェントが貴社の採用課題に寄り添い、採用活動をご支援いたします。</span>
          </p>
          <div className={styles.dataSection}>
            <DataTitleParts>Factor Xキャリア登録人材について</DataTitleParts>
            <GraphData/>
          </div>
          <div className={styles.dataSection}>
            <DataTitleParts>Factor Xキャリア利用企業の声</DataTitleParts>
          </div>
      </div>
      <Voice/>
    </section>
  )
}