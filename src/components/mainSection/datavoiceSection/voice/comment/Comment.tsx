import { PERSON_PICTURE, COMPANY_NAME, DEPERTMENT_NAME, PERSON_NAME, COMMENT } from "@/data/data";
import styles from "./Comment.module.scss"
import { EachComment } from "./eachcomment/EachComment";

export const Comment = () => {

    return (
        <div className={styles.commentSection}>
            <div className={`${styles.bg} ${styles.wrapper}`}>
                <ul className={styles.commentCont}>
                    {PERSON_PICTURE.map((picture) => {

                        const companyName = COMPANY_NAME.find((company) => company.id === picture.id)
                        const depertmentName = DEPERTMENT_NAME.find((depertment) => depertment.id === picture.id);
                        const personName =  PERSON_NAME.find((person) => person.id === picture.id);
                        const comment = COMMENT.find((comment) => comment.id === picture.id);
            
                        return (
                            <EachComment key={picture.id} img={picture.img} companyText={companyName?.text || ""}
                                depertmentText={depertmentName?.text || ""} personText={personName?.text || ""}
                                personText2={personName?.text2 || ""} companyName={companyName?.text || ""} 
                                depertmentName={depertmentName?.text || ""}  personName={personName?.text || ""} 
                                comment={comment?.text || ""}>
                            </EachComment>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
