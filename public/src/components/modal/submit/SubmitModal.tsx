import { CloseButton } from "@/components/Button/closeButton/CloseButton";
import styles from "./SubmitModal.module.scss"
import Image from "next/image";
import { SUBMIT } from "@/data/data";

interface modalProps {
    modalCondition: boolean;
    onClick: () => void;
}

export const SubmitModal = ({modalCondition, onClick}: modalProps) => {
  return (
      <>
      {modalCondition && <div className={styles.modalBg} onClick={onClick}></div>}
          {SUBMIT.map((submit) => (
            <div className={`${styles.modalSection} ${modalCondition? styles.modalSectionShow: ""}`}>
              <p className={styles.modalTitle}>{submit.title}</p>
              <div className={styles.modalContents} key={submit.id}>
                <Image src={submit.img} alt={submit.altImg} width={56} height={56} priority className={styles.modalImg}></Image>
                <p className={styles.modalText}>
                  {submit.text}<br></br>
                  {submit.text2}
                </p>
              </div>
              <div className={styles.closeBtnCont}>
                <CloseButton onClick={onClick} modalCondition={modalCondition} />
              </div>
            </div>
          ))}
      </>
    )
}