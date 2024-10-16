import { QUESTION, ANSWER } from "@/data/data"
import styles from "./InterviewContents.module.scss"
import { DetailViewButton } from "@/components/Button/detailViewButton/DetailViewButton";

interface onClickProps {
    onClick: () => void;
    isOpen: boolean;
}

export const InterviewContents = ({onClick, isOpen}: onClickProps) => {
    
    const handleCloseClick = () => {
        onClick();
        setTimeout(() => {
            const detailElement = document.getElementById('viewDetail');
            if (detailElement) {
                const rect = detailElement.getBoundingClientRect();
                window.scrollTo({
                    top: rect.top + window.scrollY,
                    behavior: 'smooth',
                });
            }
        }, 100);
    }

  return (
    <div className={styles.interviewCont}>
        {QUESTION.map((question) => {

            const QA = ANSWER.find((answer) => answer.id === question.id);

            return (
                <div key={question.id} className={styles.qaCont}>
                    <p className={styles.question}>{question.text}</p>
                    <div className={styles.answerCont}>
                        <span className={styles.answerName}>{QA && QA.name}</span>
                        <p className={styles.answer}>{QA && QA.text}</p>
                    </div>
                    <div className={styles.line}></div>
                </div>
            )
        })}
        <div className={styles.closeBtn}>
            <DetailViewButton onClick={handleCloseClick} isOpen={isOpen}>閉じる</DetailViewButton>
        </div>
    </div>
  )
}
