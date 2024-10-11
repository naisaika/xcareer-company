"use client";

import { PointTitleParts } from "@/components/parts/pointTitleParts/PointTitleParts"
import { PersonPicture } from "../personPicture/PersonPicture"
import styles from "./EachComment.module.scss"
import { useInView } from "react-intersection-observer"

interface EachCommentProps {
    img: string;
    companyText: string;
    depertmentText: string;
    personText: string;
    personText2: string;
    companyName: string;
    depertmentName: string;
    personName: string;
    comment: string;
}

export const EachComment = ({
    img, companyText, depertmentText, personText, personText2, companyName, depertmentName,
    personName, comment}: EachCommentProps) => {

    const { ref, inView } = useInView({
        rootMargin: "0px", 
        threshold: 0.3, 
        triggerOnce: true,
    });

  return (
    <li className={`${styles.commentList} ${inView && styles.rotateRightIn}`} ref={ref}>
        <PersonPicture pictureImg={img}></PersonPicture>
        <div>
        <div className={styles.commentListBox}>
            <PointTitleParts>{companyName && companyText}</PointTitleParts>
            <div className={styles.personInfo}>
                <span className={styles.personDepertment}>{depertmentName && depertmentText}</span>
                <p className={styles.personName}>{personName && personText}
                    <span className={styles.personName2}>{personName && personText2}</span>
                </p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.commentText}>{comment && comment}</div>
        </div>
        </div>

    </li>
  )
}