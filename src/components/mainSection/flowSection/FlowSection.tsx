import { TEXT_LIST } from "@/data/data";
import styles from "./FlowSection.module.scss";
import { FlowCard } from "./flowCard/FlowCard";

const sectionId = 2;
const sectionTitle = TEXT_LIST.find((text) => text.id === sectionId)

export const FlowSection = () => {
  return (
      <section className={styles.section} id="flowSection">
        <h2 className={styles.sectionTitle}>{sectionTitle && sectionTitle.title}</h2>
        <div className={styles.wrapper}>
            <p className={styles.sectionText}>Factor Xキャリアご利用における主な流れをご紹介します。</p>
            <FlowCard/>
        </div>
      </section>  

  )
}