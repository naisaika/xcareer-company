"use client";

import styles from './Navi.module.scss';
import { TEXT_LIST } from '../../../data/data';
import Link from 'next/link';

interface NaviProps {
  isNaviOpen: boolean;
  setIsNaviOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navi = ({isNaviOpen, setIsNaviOpen}: NaviProps) => {

  const handleNaviClick = () =>{
    setIsNaviOpen(false);
  }

  return (
    <nav className={`${styles.navi} ${isNaviOpen ? styles.open : ''}`}>
      <ul className={styles.naviList}>
        {TEXT_LIST.map((navi) => (
          <li className={styles.naviListDetail} key={navi.id}>
          {navi.id === 5 ? (
            <Link
              href={navi.anchorlink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.anchor}
              onClick={handleNaviClick}
            >
              {navi.title}
            </Link>
          ) : (
            <Link
              href={`#${navi.anchorlink}`}
              className={styles.anchor}
              onClick={handleNaviClick}
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