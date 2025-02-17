import Image from "next/image"
import styles from "./TelSection.module.scss"

export const TelSection = () => {
  return (
    <div className={styles.telSection}>
        <div className={styles.telCont}>
            <p>＼今すぐのご相談はこちら／</p>
            <div className={styles.telNumber}>
              <Image src="https://www.factorx.jp/xcareercompany/assets/contact/tel-icon.svg" alt="電話画像" width={25} height={28} priority className={styles.telImg}></Image>
              <p className={styles.telText}>0569-21-5539</p>
            </div>
        </div>
        <p className={styles.telTime}>
          <span className={styles.acceptTimetitle}>受付時間：</span>
          <span className={styles.acceptTimeCont}>
            <span className={styles.acceptTime}>平日9:00～17:00</span>
            <span className={styles.acceptTime}>（土・日除く）</span>
          </span>
        </p>
    </div>
  )
}
