import styles from "./TopSection.module.scss"
import { TopContents } from "./topContents/TopContents";

export const TopSection = () => {

  return (
    <section className={styles.topSection} id="topSection">
      <TopContents/>
    </section>
  )
}