import Image from "next/image"
import styles from "./TelSection.module.scss"

export const TelSection = () => {
  return (
    <div className={styles.telSection}>
        <div className={styles.telCont}>
            <Image src="/contact/telorange.png" alt="電話画像" width={25} height={28} priority className={styles.telImg}></Image>
            <p className={styles.telText}>0569-21-5539</p>
        </div>
        <p className={styles.telTime}>受付時間：平日9:00～17:00（土・日除く）</p>
    </div>
  )
}
