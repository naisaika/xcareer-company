"use client";

import { FOOTER_TITLE, FOOTER_LINK } from "@/data/data"
import styles from "./Footer.module.scss"
import { CompanyInfo } from "../modal/companyInfo/CompanyInfoModal";
import { useState } from "react";
import { PrivacyPolicyModal } from "../modal/privacyPolicy/PrivacyPolicyModal";

export const Footer = () => {

  const [isModalOpen, setIsModalOpen] = useState<number | false>(false);

  const openModal = (linkId: number) => {
    if (linkId === 2) {
      window.open("https://www.factorx.jp/", "_blank", "noopener noreferrer");
    } else {
      setIsModalOpen(linkId);
      document.body.classList.add(styles.bodyFixed);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove(styles.bodyFixed);
  }

  return (
    <>
      <div className={styles.footerSection}>
        {FOOTER_TITLE.map((title) => {
          let linkText;

          if (title.id === 0) {
            linkText = FOOTER_LINK.filter((link) => link.id === 0 || link.id === 1);
          } 
          else if (title.id === 1) {
            linkText = FOOTER_LINK.filter((link) => link.id === 2);
          }

          return (
      
              <div className={styles.footerCont} key={title.id}>
                <div className={styles.footerContents}>
                  <p className={styles.footerTitle}>{title.title}</p>
                  <ul className={styles.footerList}>
                    {linkText && linkText.map((link) => (
                      <li key={link.id} className={styles.footerListText}>
                        {link.id === 2 ? (
                          <p className={styles.footerText2} onClick={() => openModal(link.id)}>
                            <span className={styles.footerText3}>{link.text}</span>
                            <span className={styles.footerText4Cont}>
                              <span className={styles.footerText4}>{link.text2}</span>
                              <span className={styles.mark}></span>
                            </span>
                          </p>
                        ) : (
                          <p className={styles.footerText} onClick={() => openModal(link.id)}>{link.text}
                            <span className={styles.mark}></span>
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                {title.id === 0 && <div className={styles.line}></div>}
              </div>
          );
        })}
    </div>
    {isModalOpen === 0 && (
      <CompanyInfo onClick={closeModal} modalCondition={true} />
    )}
    {isModalOpen === 1 && (
      <PrivacyPolicyModal onClick={closeModal} modalCondition={true} />
    )}
    </>
  );
};