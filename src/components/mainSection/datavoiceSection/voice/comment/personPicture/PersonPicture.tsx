import Image from "next/image"
import styles from "./PersonPicture.module.scss"

interface PersonPictureProps {
    pictureImg: string;
}

export const PersonPicture = ({pictureImg}: PersonPictureProps) => {
    return (
      <div className={styles.personPicCont}>
          <div className={styles.picWrapper}>
            <Image src={pictureImg} alt="人物シルエット" width={90} height={90} priority className={styles.personPic} />
          </div>
      </div>
    )
}

