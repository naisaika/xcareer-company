import { CloseButton } from "@/components/Button/closeButton/CloseButton"
import styles from "./PrivacyPolicy.module.scss"
import { PrivacyPolicyText } from "./privacyPolicyText/PrivacyPolicyText"

interface modalProps {
  modalCondition: boolean;
  onClick: () => void;
}

export const PrivacyPolicyModal = ({modalCondition, onClick}: modalProps) => {
  return (
    <>
    {modalCondition && <div className={styles.modalBg} onClick={onClick}></div>}
      <div className={`${styles.modalSection} ${modalCondition? styles.modalSectionShow: ""}`}>
        <p className={styles.modalTitle}>プライバシーポリシー</p>
        <PrivacyPolicyText/>
        <div className={styles.closeBtnCont}>
          <CloseButton onClick={onClick} modalCondition={modalCondition} />
        </div>
      </div>
    </>
  )
}
