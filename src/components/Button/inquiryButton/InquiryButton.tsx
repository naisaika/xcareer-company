"use client";

import Link from "next/link";
import styles from "./InquiryButton.module.scss";
import { useEffect } from "react";

export const InquiryButton = () => {
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

      window.scrollTo({
        top: target,
        behavior: "smooth",
      });
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
    <Link href="#contactSection">
      <button type="button" className={styles.inquiryBtn}>
        お問い合わせはこちら
      </button>
    </Link>
  );
};