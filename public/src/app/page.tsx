import { MainSection } from "@/components/mainSection/MainSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <MainSection/>
    </div>
  );
}