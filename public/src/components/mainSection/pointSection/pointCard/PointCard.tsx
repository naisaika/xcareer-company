import Image from "next/image"
import { POINT_IMG, POINT_TITLE_TEXT, POINT_TEXT } from "../../../../data/data"
import styles from "./PointCard.module.scss"

export const PointCard = () => {

  return (
    <ul className={styles.pointListCont}>
        {POINT_IMG.map((img) => {

            const matchTitle = POINT_TITLE_TEXT.find((title) => title.id === img.id);
            const matchText = POINT_TEXT.find((text) => text.id === img.id)

            return (
                <li key={img.id} className={styles.pointList}>
                    <Image src={img.img} alt={`ポイント画像${img.id}`} width={280} height={180} className={styles.pointImg}></Image>
                    <div className={styles.pointTextCont}>
                        {matchTitle && <p className={styles.pointTitle}>{matchTitle.title}</p>}
                        {matchText && <p className={styles.pointText}>{matchText.text}</p>}
                    </div>
                </li>
            )
        })}
    </ul>
  )
}
