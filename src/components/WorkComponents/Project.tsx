"use client";
import styles from "./Project.module.scss";
import Image from "next/image";
import { useEffect } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Tools from "./Tools";

interface Props {
  title: string;
  description: string;
  imgSource: string;
  href: string;
  isHtml?: boolean;
  isCss?: boolean;
  isSass?: boolean;
  isJavascript?: boolean;
  isTypescript?: boolean;
  isReact?: boolean;
  isNext?: boolean;
  isFirebase?: boolean;
  isGraphql?: boolean;
  isZustand?: boolean;
}

export default function Project(props: Props) {
  const {
    title,
    description,
    imgSource,
    href,
    isHtml,
    isCss,
    isSass,
    isJavascript,
    isTypescript,
    isReact,
    isNext,
    isFirebase,
    isGraphql,
    isZustand,
  } = props;

  // animation of card
  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.container}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(`${styles.show}`, entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        });
      },
      {
        threshold: 1,
      }
    );
    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <div className={styles.container}>
      <a href={href} target="_blank" className={styles.inner}>
        <div className={styles.projectImg}>
          <Image alt="project image" width={600} height={200} src={imgSource} />
        </div>
        <div className={styles.projectInfo}>
          <div className={styles.projectAbout}>
            <h2 className={styles.projectTitle}>
              {title} <BsArrowRightShort />
            </h2>
            <p>{description}</p>
          </div>
          <div className={styles.projectTools}>
            {isHtml && (
              <Tools
                backColor="orange"
                title="HTML"
                source="/assets/svg/html.png"
              />
            )}
            {isCss && (
              <Tools
                backColor="royalblue"
                title="CSS"
                source="/assets/svg/css.png"
              />
            )}
            {isSass && (
              <Tools
                backColor="pink"
                title="Sass"
                source="/assets/svg/sass.png"
              />
            )}
            {isJavascript && (
              <Tools
                backColor="yellow"
                title="Js"
                source="/assets/svg/js.png"
              />
            )}
            {isTypescript && (
              <Tools
                backColor="royalblue"
                title="Ts"
                source="/assets/svg/typescript.png"
              />
            )}
            {isReact && (
              <Tools
                backColor="cyan"
                title="React.js"
                source="/assets/svg/react.png"
              />
            )}
            {isNext && (
              <Tools
                backColor="grey"
                title="Next.js"
                source="/assets/svg/nextjs.png"
              />
            )}
            {isFirebase && (
              <Tools
                backColor="orange"
                title="Firebase"
                source="/assets/svg/firebase.png"
              />
            )}
            {isGraphql && (
              <Tools
                backColor="deeppink"
                title="GraphQL"
                source="/assets/svg/graphql.png"
              />
            )}
            {isZustand && (
              <Tools
                backColor="purple"
                title="Zustand"
                source="/assets/svg/zustand.png"
              />
            )}
          </div>
        </div>
      </a>
    </div>
  );
}
