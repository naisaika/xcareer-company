"use client";

import { useInView } from "react-intersection-observer"
import styles from "./GraphData.module.scss"
import { GraphCard } from "../graphCard/GraphCard"

export const GraphData = () => {

  const { ref, inView } = useInView({
    rootMargin: "0px", 
    threshold: 0.3, 
    triggerOnce: true,
  });

  return (
    <div className={`${styles.graphSection} ${inView && styles.fadeIn}`} ref={ref}>
        <GraphCard/>
    </div>
  )
}
