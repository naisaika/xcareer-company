import { CloseButton } from "@/components/Button/closeButton/CloseButton";
import styles from "./SubmitModal.module.scss"
import Image from "next/image";
import { SUBMIT } from "@/data/data";

interface modalProps {
    modalCondition: boolean;
    onClick: () => void;
    success: boolean;
    failed: boolean;
}

export const SubmitModal = ({modalCondition, onClick, success, failed}: modalProps) => {

  const modalStatus = success? SUBMIT.find((modal) => modal.status === "success"): 
    failed? SUBMIT.find((modal) => modal.status === "failed") : null;

  return (
      <>
        {modalCondition && <div className={styles.modalBg} onClick={onClick}></div>}
          {modalStatus && (
            <div className={`${styles.modalSection} ${modalCondition? styles.modalSectionShow: ""}`} key={modalStatus.id}>
              <p className={styles.modalTitle}>{modalStatus.title}</p>
              <div className={styles.modalContents} key={modalStatus.id}>
                <Image src={modalStatus.img} alt={modalStatus.altImg} width={56} height={56} priority className={styles.modalImg}></Image>
                <p className={styles.modalText}>
                  {modalStatus.text}<br></br>
                  {modalStatus.text2}
                </p>
              </div>
              <div className={styles.closeBtnCont}>
                <CloseButton onClick={onClick} modalCondition={modalCondition} />
              </div>
            </div>
          )}
      </>
    )
}