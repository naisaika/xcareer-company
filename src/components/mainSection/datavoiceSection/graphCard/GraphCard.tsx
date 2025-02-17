import { GRAPH_TITLE, GRAPH_IMG, GRAPH_TEXT } from "@/data/data"
import Image from "next/image"
import styles from "./GraphCard.module.scss"
// import { PointTitleParts } from "@/components/parts/pointTitleParts/PointTitleParts"
import { GraphTitleParts } from "@/components/mainSection/datavoiceSection/graphCard/graphTitleParts/GraphTitleParts"

export const GraphCard = () => {
  return (
        <ul className={styles.graphCont}>
            {GRAPH_IMG.map((img) => {

                const graphTitle = GRAPH_TITLE.find((title) => title.id === img.id)?.title;
                // const graphText = GRAPH_TEXT.find((text) => text.id === img.id);

                return (
                    <li className={styles.graphList} key={img.id}>
                        {img.id !== 2 && (
                            <>
                                <div className={styles.graphListItem}>
                                    <GraphTitleParts>{graphTitle}</GraphTitleParts>
                                    <Image src={img.img} alt={"グラフ画像"} width={240} height={240} priority className={styles.graphImg}></Image>
                                </div>
                                <span className={styles.graphLine}></span>
                            </>
                        )}
                        {img.id === 2 && (
                            <div className={styles.graphListItem}>
                                <GraphTitleParts>{graphTitle}</GraphTitleParts>
                                <Image src={img.img} alt={"グラフ画像"} width={240} height={240} priority className={styles.graphImg}></Image>
                            </div>
                        )}
                    </li>
            )})}
        </ul>
    )
}
