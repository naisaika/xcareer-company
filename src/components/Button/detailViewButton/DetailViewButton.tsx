"use client";


import styles from "./DetailViewButton.module.scss"

interface childrenProps {
    children: React.ReactNode;
    onClick: () => void;
    isOpen: boolean;
}

export const DetailViewButton = ({children, onClick, isOpen}: childrenProps) => {


  return (
    <button type="button" className={`${styles.detailBtn} ${isOpen? styles.detailBtnClick: ""}`} onClick={onClick}>
        {children}
        <span className={`${styles.btnArrow} ${isOpen? styles.btnArrowOpen : ""}`}></span>
    </button>
  )
}
