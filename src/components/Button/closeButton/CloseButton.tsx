import styles from "./CloseButton.module.scss"

interface OnClickProps {
    modalCondition: boolean;
    onClick: () => void;
}

export const CloseButton = ({onClick}: OnClickProps) => {
  return (
    <button type="button" className={styles.closeBtn} onClick={onClick}>閉じる</button>
  )
}