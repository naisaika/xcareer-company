import styles from "./CompanyInfoModal.module.scss"
import { CloseButton } from "@/components/Button/closeButton/CloseButton"
import { CompanyInfoContents } from "./companyInfoContents/CompanyInfoContents"

interface modalProps {
    modalCondition: boolean;
 
    onClick: () => void;
  }

export const CompanyInfo = ({modalCondition, onClick}: modalProps) => {
  return (
    <>
      {modalCondition && <div className={styles.modalBg} onClick={onClick}></div>}
        <div className={`${styles.modalSection} ${modalCondition? styles.modalSectionShow: ""}`}>
          <p className={styles.modalTitle}>運営会社について</p>
          <CompanyInfoContents/>
          <div className={styles.closeBtnCont}>
            <CloseButton onClick={onClick} modalCondition={modalCondition} />
          </div>
        </div>
    </>
  )
}
