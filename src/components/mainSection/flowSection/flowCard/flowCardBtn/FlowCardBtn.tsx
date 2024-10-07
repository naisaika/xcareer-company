import Link from "next/link"
import styles from "./FlowCardBtn.module.scss"

interface FlowCardBtnProps {
    children: React.ReactNode;
}

export const FlowCardBtn = ({ children }: FlowCardBtnProps) => {

    return (
        <Link href="#contactSection">
            <span className={styles.flowListLink}>{children}</span>
        </Link>
    );
};