"use client";

import { useInView } from "react-intersection-observer"
import styles from "./EachRowFlowCard.module.scss"
import Image from "next/image";
import { FlowCardBtn } from "../flowCardBtn/FlowCardBtn";

interface EachRowFlowCard {
    id: number;
    img: string;
    title?: string | undefined;
    text?: string | undefined;
    text2?: string | undefined;
    text3?: string | undefined;
}

export const EachRowFlowCard = ({id, img, title, text, text2, text3}:EachRowFlowCard) => {

    const { ref, inView } = useInView({
        rootMargin: "0px", 
        threshold: 0.3, 
        triggerOnce: true,
    });

  return (
    <li key={id} className={`${styles.flowList} ${inView && styles.delayFadeIn}`} ref={ref}>
        <Image src={img} alt={"流れカード画像"} width={208} height={132} priority className={styles.flowListImg}></Image>
        <p className={styles.flowListTitle}>{title && `${id + 1} . ${title}`}</p>
        <div className={styles.flowListTextCont}>
            {text &&(
                <p className={styles.flowListText}>
                    {text}
                    {id === 0 && (
                        <span className={styles.flowListText}>
                            <FlowCardBtn>{text2}</FlowCardBtn>
                            {text3}
                        </span>
                    )}
                </p>
            )}
        </div>
    </li>
  )
}
