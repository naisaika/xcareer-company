import { GraphTitleParts } from "@/components/mainSection/datavoiceSection/graphCard/graphTitleParts/GraphTitleParts"
import styles from "./GraphData.module.scss"
import { GraphCard } from "../graphCard/GraphCard"

export const GraphData = () => {
  return (
    <div className={styles.graphSection}>
        <GraphCard/>
    </div>
  )
}
