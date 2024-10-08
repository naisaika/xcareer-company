import styles from './Navi.module.scss';
import { TEXT_LIST } from '../../../data/data';
import Link from 'next/link';

export const Navi = () => {
  return (
    <nav className={styles.navi}>
      <ul className={styles.naviList}>
        {TEXT_LIST.map((navi) => (
          <li className={styles.naviListDetail} key={navi.id}>
          {navi.id === 5 ? (
            <Link
              href={navi.anchorlink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.anchor}
            >
              {navi.title}
            </Link>
          ) : (
            <Link
              href={`#${navi.anchorlink}`}
              className={styles.anchor}
            >
              {navi.title}
            </Link>
          )}
        </li>
        ))}
      </ul>
    </nav>
  );
};