
import Link from "next/link"
import styles from "./InquiryButton.module.scss"

export const InquiryButton = () => {
  return (
    <Link href="#contactSection">
        <button type="button" className={styles.inquiryBtn}>お問い合わせはこちら</button>
    </Link>
  )
}
