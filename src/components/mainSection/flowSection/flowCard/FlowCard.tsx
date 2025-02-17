import {FLOW_IMG, FLOW_TITLE, FLOW_TEXT } from "@/data/data";
import styles from "./FlowCard.module.scss"
import { EachRowFlowCard } from "./eachrowflowcard/EachRowFlowCard";

export const FlowCard = () => {
  return (
    <ul className={styles.flowCont}>
        {FLOW_IMG.map((img) => {

            const flowTitle = FLOW_TITLE.find((title) => title.id === img.id);
            const flowText = FLOW_TEXT.find((text) => text.id === img.id);

            return (
              <EachRowFlowCard 
                key={img.id} id={img.id} img={img.img} 
                title={flowTitle?.title} text={flowText?.text} text2={flowText?.text2} 
                text3={flowText?.text3}
              >
              </EachRowFlowCard>
            )
        })}
    </ul>
  )
}
