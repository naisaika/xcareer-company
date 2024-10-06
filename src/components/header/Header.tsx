import styles from "./Header.module.scss"
import { HeaderTitle } from "./headertitle/HeaderTitle"
import { Navi } from "./navi/Navi"

export const Header = () => {
  return (
    <div className={styles.headerSec}>
      <HeaderTitle/>
      <Navi/>
    </div>
  )
}
