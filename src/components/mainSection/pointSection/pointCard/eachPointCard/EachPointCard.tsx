"use client";

import styles from "./EachPointCard.module.scss"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

interface EachPointCardProps {
    id: number;
    img: string;
    title?: string;
    text?: string;
    text2?: string;
    text3?: string;
    text4?: string;
}

export const EachPointCard = ({ id, img, title, text, text2, text3, text4 }: EachPointCardProps) => {
    const { ref, inView } = useInView({
      rootMargin: "0px", 
      threshold: 0.3, 
      triggerOnce: true,
    });
  
    return (
      <li key={id} className={`${styles.pointList} ${inView && styles.delayFadeIn}`} ref={ref}>
        {title && <p className={styles.pointTitle}>{title}</p>}
        <div className={styles.pointListCont}>
          <Image
            src={img}
            alt={`ポイント画像${id}`}
            width={280}
            height={180}
            className={styles.pointImg}
          />
          <div className={styles.pointTextCont}>
            {text && <p className={styles.pointText}>{text}</p>}
            {text2 && <p className={styles.pointText}>{text2}</p>}
            {text3 && <p className={styles.pointText}>{text3}</p>}
            {text4 && <p className={styles.pointText}>{text4}</p>}
          </div>
        </div>
      </li>
    );
  };
