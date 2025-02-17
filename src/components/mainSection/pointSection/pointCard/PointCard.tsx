import { POINT_IMG, POINT_TITLE_TEXT, POINT_TEXT } from "../../../../data/data"
import styles from "./PointCard.module.scss"
import { EachPointCard } from "./eachPointCard/EachPointCard";

export const PointCard = () => {

  return (
    <ul className={styles.pointListCont}>
        {POINT_IMG.map((img) => {

            const matchTitle = POINT_TITLE_TEXT.find((title) => title.id === img.id)?.title;
            const matchText = POINT_TEXT.find((text) => text.id === img.id)?.text;
            const matchText2 = POINT_TEXT.find((text2) => text2.id === img.id)?.text2;
            const matchText3 = POINT_TEXT.find((text3) => text3.id === img.id)?.text3;
            const matchText4 = POINT_TEXT.find((text4) => text4.id === img.id)?.text4;

            return (
              <EachPointCard 
                key={img.id} 
                id={img.id} 
                img={img.img} 
                title={matchTitle} 
                text={matchText}
                text2={matchText2}
                text3={matchText3}
                text4={matchText4}
              />
            )
        })}
    </ul>
  )
}
