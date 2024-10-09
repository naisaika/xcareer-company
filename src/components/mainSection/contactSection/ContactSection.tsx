import { TEXT_LIST } from "@/data/data"
import styles from "./ContactSection.module.scss"
import { ContactTitleParts } from "./contactTitleParts/ContactTitleParts";
import { FormSection } from "./formSection/FormSection";
import { TelSection } from "./telSection/TelSection";


const sectionId = 4; 
const titleText = TEXT_LIST.find((textId) => textId.id === sectionId);

export const ContactSection = () => {
  return (
    <section className={styles.section} id="contactSection">
        <h2 className={styles.sectionTitle}>{titleText && titleText.title}</h2>
        <div className={styles.wrapper}>
            <p className={styles.sectionText}>Factor Xキャリアへのお問い合わせは以下の入力フォームへ必要事項をご入力の上送信ください。</p>
            <ContactTitleParts>フォームでのお問い合わせ</ContactTitleParts>
            <FormSection/>
            <ContactTitleParts>お電話でのお問い合わせ</ContactTitleParts>
            <TelSection/>
        </div>
    </section>
  )
}