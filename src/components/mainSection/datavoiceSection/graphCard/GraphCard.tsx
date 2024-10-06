import { GRAPH_TITLE, GRAPH_IMG, GRAPH_TEXT } from "@/data/data"
import Image from "next/image"
import styles from "./GraphCard.module.scss"
import { PointTitleParts } from "@/components/parts/pointTitleParts/PointTitleParts"
import { GraphTitleParts } from "@/components/mainSection/datavoiceSection/graphCard/graphTitleParts/GraphTitleParts"

export const GraphCard = () => {
  return (
        <ul className={styles.graphCont}>
            {GRAPH_IMG.map((img) => {

                const graphTitle = GRAPH_TITLE.find((title) => title.id === img.id);
                const graphText = GRAPH_TEXT.find((text) => text.id === img.id);

                return (
                    <li className={styles.graphList} key={img.id}>
                        <GraphTitleParts>{graphTitle && graphTitle.title}</GraphTitleParts>
                        <div className={styles.graphData} key={img.id}>
                            <Image src={img.img} alt={"グラフ画像"} width={184} height={184} priority className={styles.graphImg}></Image>
                            <span className={styles.graphLine}></span>
                            <PointTitleParts>Point</PointTitleParts>
                            <p className={styles.graphText}>{graphText && graphText.text}</p>
                        </div>
                    </li>

                )})}
        </ul>
  )
}
