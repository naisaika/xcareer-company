import styles from "./sectionTitleLabel.module.scss"
import { TEXT_LIST } from "@/data/data"

export const sectionTitleLabel = () => {
  return (
    <div>
        <ul className={styles.titleiList}>
          {TEXT_LIST.map((title) => {
              return (
                <li key={title.id} className={styles.titleListDetail}>
                  {title.title}
                </li>
              )
          })}
        </ul>
    </div>
  )
}

