import { FOOTER_TITLE, FOOTER_LINK } from "@/data/data"
import styles from "./Footer.module.scss"

export const Footer = () => {
  return (
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
                        <p className={styles.footerText2}>
                          <span className={styles.footerText3}>{link.text}</span>
                          <span className={styles.footerText4Cont}>
                            <span className={styles.footerText4}>{link.text2}</span>
                            <span className={styles.mark}></span>
                          </span>
                        </p>
                      ) : (
                        <p className={styles.footerText}>{link.text}
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
  );
};