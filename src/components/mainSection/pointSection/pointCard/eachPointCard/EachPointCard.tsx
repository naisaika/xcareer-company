"use client";

import styles from "./EachPointCard.module.scss"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

interface EachPointCardProps {
    id: number;
    img: string;
    title?: string;
    text?: string;
}

export const EachPointCard = ({ id, img, title, text }: EachPointCardProps) => {
    const { ref, inView } = useInView({
      rootMargin: "0px", 
      threshold: 0.3, 
      triggerOnce: true,
    });
  
    return (
      <li key={id} className={`${styles.pointList} ${inView && styles.delayFadeIn}`} ref={ref}>
        <Image
          src={img}
          alt={`ポイント画像${id}`}
          width={280}
          height={180}
          className={styles.pointImg}
        />
        <div className={styles.pointTextCont}>
          {title && <p className={styles.pointTitle}>{title}</p>}
          {text && <p className={styles.pointText}>{text}</p>}
        </div>
      </li>
    );
  };
