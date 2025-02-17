
import { Footer } from "../footer/Footer"
import { ContactSection } from "./contactSection/ContactSection"
import { CostSection } from "./costSection/CostSection"
import { DataVoiceSection } from "./datavoiceSection/DataVoiceSection"
import { FlowSection } from "./flowSection/FlowSection"
import styles from "./MainSection.module.scss"
import  { PointSection } from "./pointSection/PointSection"
import { TopSection } from "./topSection/TopSection"

export const MainSection = () => {
  return (
    <main className={styles.mainSection}>
      <TopSection/>
      <PointSection/>
      <CostSection/>
      <FlowSection/>
      <DataVoiceSection/>
      <ContactSection/>
      <Footer/>
    </main>
  )
}