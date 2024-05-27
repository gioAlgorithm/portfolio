"use client";
import styles from "./Info.module.scss";
import Typewriter from "typewriter-effect";
import Socials from "./Socials";
import { useEffect } from "react";

interface Props {}

export default function Info(props: Props) {
  // animation
  useEffect(() => {
    const elements = document.querySelectorAll(
      `.${styles.hello}, .${styles.devContainer},.${styles.typeWriter}, .${styles.name} `
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.classList.contains(styles.hello)) {
            // Apply styles or animations for text elements
            entry.target.classList.toggle(
              `${styles.helloActive}`,
              entry.isIntersecting
            );
            if (entry.isIntersecting) observer.unobserve(entry.target);
          }
          if (entry.target.classList.contains(styles.typeWriter)) {
            // Apply styles or animations for text elements
            entry.target.classList.toggle(
              `${styles.typeWriterActive}`,
              entry.isIntersecting
            );
            if (entry.isIntersecting) observer.unobserve(entry.target);
          }
          if (entry.target.classList.contains(styles.devContainer)) {
            // Apply styles or animations for text elements
            entry.target.classList.toggle(
              `${styles.devContainerActive}`,
              entry.isIntersecting
            );
            if (entry.isIntersecting) observer.unobserve(entry.target);
          } else {
            // Apply styles or animations for other elements (cards)
            entry.target.classList.toggle(
              `${styles.nameActive}`,
              entry.isIntersecting
            );
            if (entry.isIntersecting) observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 1,
        rootMargin: "0px 0px 168px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));
  }, []);
  return (
    <div className={styles.container}>
      <h3 className={styles.hello}>Hi, my name is</h3>
      <div className={styles.devContainer}>
        <h1 className={styles.name}>Gio<span>.</span></h1>
        <h2>I&apos;m a </h2>
      </div>
      <div className={styles.typeWriter}>
        <Typewriter
          options={{
            strings: ["Front-end Developer", "Web Developer", "Youtuber"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <Socials />
    </div>
  );
}
