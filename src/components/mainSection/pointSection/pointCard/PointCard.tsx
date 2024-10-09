import { POINT_IMG, POINT_TITLE_TEXT, POINT_TEXT } from "../../../../data/data"
import styles from "./PointCard.module.scss"
import { EachPointCard } from "./eachPointCard/EachPointCard";

export const PointCard = () => {

  return (
    <ul className={styles.pointListCont}>
        {POINT_IMG.map((img) => {

            const matchTitle = POINT_TITLE_TEXT.find((title) => title.id === img.id)?.title;
            const matchText = POINT_TEXT.find((text) => text.id === img.id)?.text;

            return (
                <EachPointCard key={img.id} id={img.id} img={img.img} title={matchTitle} text={matchText}></EachPointCard>
            )
        })}
    </ul>
  )
}
