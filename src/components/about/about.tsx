"use client";
import Skills from "@/components/AboutComponents/Skills";
import styles from "./about.module.scss";
import Info from "@/components/AboutComponents/Info";

export default function Home() {
  return (
  <div className={styles.container} id="about">
    <div className={styles.inner}>
      <Info />
      <Skills />
    </div>
  </div>
  );
}