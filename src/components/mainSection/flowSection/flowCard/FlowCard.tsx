import {FLOW_IMG, FLOW_TITLE, FLOW_TEXT } from "@/data/data";
import styles from "./FlowCard.module.scss"
import Image from "next/image";

export const FlowCard = () => {
  return (
    <ul className={styles.flowCont}>
        {FLOW_IMG.map((img) => {

            const flowTitle = FLOW_TITLE.find((title) => title.id === img.id);
            const flowText = FLOW_TEXT.find((text) => text.id === img.id);

            return (
                <li key={img.id} className={styles.flowList}>
                    <Image src={img.img} alt={"流れカード画像"} width={216} height={132} priority className={styles.flowListImg}></Image>
                    <p className={styles.flowListTitle}>{flowTitle && `${flowTitle.id + 1} . ${flowTitle.title}`}</p>
                    <div className={styles.flowListTextCont}>
                        {flowText ? (
                            <p className={styles.flowListText}>
                                {flowText.text}
                                {flowText.id === 0 && (
                                    <span className={styles.flowListText}>
                                        <span className={styles.flowListLink}>{flowText.text2}</span>
                                        {flowText.text3}
                                    </span>
                                )}
                            </p>
                        ) : (
                            <p>テキストがありません</p>
                        )}
                    </div>
                </li>
            )
        })}
    </ul>
  )
}
