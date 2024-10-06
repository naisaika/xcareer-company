import { PERSON_PICTURE, COMPANY_NAME, DEPERTMENT_NAME, PERSON_NAME, COMMENT } from "@/data/data";
import { PointTitleParts } from "@/components/parts/pointTitleParts/PointTitleParts"
import styles from "./Comment.module.scss"
import { PersonPicture } from "./personPicture/PersonPicture";


export const Comment = () => {

    return (
        <div className={styles.commentSection}>
            <div className={styles.wrapper}>
                <ul className={styles.commentCont}>
                    {PERSON_PICTURE.map((picture) => {
                        
                        const companyName = COMPANY_NAME.find((company) => company.id === picture.id)
                        const depertmentName = DEPERTMENT_NAME.find((depertment) => depertment.id === picture.id);
                        const personName =  PERSON_NAME.find((person) => person.id === picture.id);
                        const comment = COMMENT.find((comment) => comment.id === picture.id);
            
                        return (
                            <li key={picture.id} className={styles.commentList}>
                                <PersonPicture pictureImg={picture.img}></PersonPicture>
                                <div className={styles.commentListBox}>
                                    <PointTitleParts>{companyName && companyName.text}</PointTitleParts>
                                    <div className={styles.personInfo}>
                                        <span className={styles.personDepertment}>{depertmentName && depertmentName.text}</span>
                                        <p className={styles.personName}>{personName && personName.text}
                                            <span className={styles.personName2}>{personName && personName.text2}</span>
                                        </p>
                                    </div>
                                    <div className={styles.line}></div>
                                    <div className={styles.commentText}>{comment && comment.text}</div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
