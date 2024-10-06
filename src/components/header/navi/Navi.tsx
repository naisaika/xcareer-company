import styles from "./Navi.module.scss"
import { TEXT_LIST } from '../../../data/data'

export const Navi = () => {
  return (
    <nav className={styles.navi}>
      <ul className={styles.naviList}>
        {TEXT_LIST.map((navi) => {
            return (
                <li key={navi.id} className={styles.naviListDetail}>
                {navi.title}
            </li>
            )
        })}
      </ul>
    </nav>
  )
}


