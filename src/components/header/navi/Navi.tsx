import styles from './Navi.module.scss';
import { TEXT_LIST } from '../../../data/data';
import Link from 'next/link';

export const Navi = () => {
  return (
    <nav className={styles.navi}>
      <ul className={styles.naviList}>
        {TEXT_LIST.map((navi) => (
          <li className={styles.naviListDetail} key={navi.id}>
            <Link
              href={navi.id === 5 ? navi.anchorlink : `#${navi.anchorlink}`}
              className={styles.anchor}
            >
              {navi.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};