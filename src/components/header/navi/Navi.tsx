"use client";

import styles from './Navi.module.scss';
import { TEXT_LIST } from '../../../data/data';
import Link from 'next/link';
import { useEffect } from 'react';

interface NaviProps {
  isNaviOpen: boolean;
  setIsNaviOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navi = ({isNaviOpen, setIsNaviOpen}: NaviProps) => {

  const handleNaviClick = (anchorlink: string) => {
    const headerHeight = 61;
    const viewportWidth = window.innerWidth;

    if (viewportWidth <= 1200) {
      setTimeout(() => {
        const targetElement = document.querySelector(anchorlink);
        if (targetElement) {
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - headerHeight,
            behavior: 'smooth',
          });
        }
      }, 500);
    }

    setIsNaviOpen(false);
  };

  useEffect(() => {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    const handleScrollClick = (e: Event) => {
      e.preventDefault();
      const scrollLink = e.currentTarget as HTMLAnchorElement;
      const hrefLink = scrollLink.getAttribute("href");
      if (!hrefLink) return;

      const targetContent = document.getElementById(hrefLink.replace("#", ""));
      if (!targetContent) return;

      const rectTop = targetContent.getBoundingClientRect().top;
      const positionY = window.scrollY;
      const target = rectTop + positionY;
      const viewportWidth = window.innerWidth;
      if (viewportWidth >= 1200) {
        window.scrollTo({
          top: target,
          behavior: "smooth",
        });
      }
    };

    scrollLinks.forEach((scrollLink) => {
      scrollLink.addEventListener("click", handleScrollClick);
    });

    return () => {
      scrollLinks.forEach((scrollLink) => {
        scrollLink.removeEventListener("click", handleScrollClick);
      });
    };
  }, []);

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
              onClick={() => handleNaviClick(navi.anchorlink)}
            >
              {navi.title}
            </Link>
          ) : (
            <Link
              href={`#${navi.anchorlink}`}
              className={styles.anchor}
              onClick={() => handleNaviClick(`#${navi.anchorlink}`)}
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