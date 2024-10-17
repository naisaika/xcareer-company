"use client";

import { useState, useEffect } from 'react';
import styles from "./TopSection.module.scss"
import { TopContents } from "./topContents/TopContents";

export const TopSection = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`${styles.topSection} ${isVisible ? styles.adjustOpacity : ''}`} id="topSection">
      <TopContents/>
    </section>
  )
}

