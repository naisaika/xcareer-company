"use client";

import { PointTitleParts } from "@/components/parts/pointTitleParts/PointTitleParts";
import { COST_TEXT } from "../../../../data/data"
import styles from "./CostCard.module.scss"
import { useInView } from "react-intersection-observer"

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

    const { ref, inView } = useInView({
        rootMargin: "0px", 
        threshold: 0.3, 
        triggerOnce: true,
    });

  return (
    <ul className={styles.cardCont} ref={ref}>
        {POINT_ID.map((point) => {

            const pointDetail = POINT_DETAIL[point.id]; 
            const matchedText = COST_TEXT.find((text) => text.id === point.id);

            return (
                <li className={`${styles.cardList} ${inView && styles.rotateIn}`} key={point.id}>
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