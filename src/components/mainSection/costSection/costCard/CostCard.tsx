import { PointTitleParts } from "@/components/parts/pointTitleParts/PointTitleParts";
import { COST_TEXT } from "../../../../data/data"
import styles from "./CostCard.module.scss"

const POINT_ID = [
    { id: 0, text: "Point1"},
    { id: 1, text: "Point2"},
    { id: 2, text: "Point3"},
]

const POINT_DETAIL = [
    { id: 0, title: "初期費用", detail: "０円" },
    { id: 1, title: "求人掲載料", detail: "０円" },
    { id: 2, title: "早期退職による", detail: "返金あり" },
]

export const CostCard = () => {
  return (
    <ul className={styles.cardCont}>
        {POINT_ID.map((point) => {

            const pointDetail = POINT_DETAIL[point.id]; 
            const matchedText = COST_TEXT.find((text) => text.id === point.id);

            return (
                <li className={styles.cardList} key={point.id}>
                    <div className={styles.cardLeftCont}>
                        <PointTitleParts>{point.text}</PointTitleParts>
                        {pointDetail && 
                            <>
                                <p className={styles.cardSubPoint}>{pointDetail.title}</p>
                                <p className={styles.cardPoint}>{pointDetail.detail}</p>
                            </>
                        }
                    </div>
                    <div className={styles.cardLine}></div>
                    <div className={styles.cardRightCont}>
                        {matchedText && 
                        <p className={styles.cardText}>
                            {matchedText.text}
                        </p>}
                    </div>
                </li>
            )
        })}
    </ul>
  )
}