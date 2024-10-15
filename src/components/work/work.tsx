"use client";
import React, { useEffect } from "react";
import style from "./work.module.scss";
import Project from "../WorkComponents/Project";

export default function Work() {
  // animation of card
  useEffect(() => {
    const cards = document.querySelectorAll(`.${style.card}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(`${style.show}`, entry.isIntersecting);
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
    <div className={style.workPage} id="work">
      <div className={style.waviy}>
        <span style={{ "--i": 1 } as React.CSSProperties}>P</span>
        <span style={{ "--i": 2 } as React.CSSProperties}>r</span>
        <span style={{ "--i": 3 } as React.CSSProperties}>o</span>
        <span style={{ "--i": 4 } as React.CSSProperties}>j</span>
        <span style={{ "--i": 5 } as React.CSSProperties}>e</span>
        <span style={{ "--i": 6 } as React.CSSProperties}>c</span>
        <span style={{ "--i": 7 } as React.CSSProperties}>t</span>
        <span style={{ "--i": 8 } as React.CSSProperties}>s</span>
      </div>

      <div className={style.cardContainer}>
        <Project
          imgSource="/assets/image/evsp.png"
          title="Entertainment VS Productivity"
          description='"Entertainment vs. Productivity" is a web app that helps you balance work and leisure. It has three elements: 
          Productivity, Entertainment, and Balance. Click "Productivity" to start a timer for work, then "Submit" to record time. 
          "Entertainment" offers breaks. "Balance" suggests switching based on your activity, ensuring a harmonious routine.'
          href="https://giorgimachitadze-evsp.vercel.app/"
          isCss
          isReact
          isJavascript
          isFirebase
        />
        <Project
          imgSource="/assets/image/world-website.png"
          title="World"
          description="Explore a dynamic GraphQL API for comprehensive country
          data. Effortlessly search and filter countries by starting
          letters, simplifying data retrieval. Get insights into
          population, area, languages, and currencies for countries
          worldwide. Discover an efficient way to access country
          information with this user-friendly tool."
          href="https://giorgimachitadze-world.vercel.app/"
          isSass
          isNext
          isTypescript
          isGraphql
          isReact
        />
        <Project
          imgSource="/assets/image/maze.png"
          title="The Maze"
          description='"The Maze" presents 10 levels of challenging mazes
          filled with obstacles. Navigate the red dot, putting your
          reflexes to the test. Enjoy personalized user profiles,
          detailed statistics, and compete on global leaderboards.'
          href="https://giorgimachitadze-maze.vercel.app/"
          isSass
          isNext
          isTypescript
          isReact
          isFirebase
        />
        <Project
          imgSource="/assets/image/ecommerce.png"
          title="Fake Store"
          description="I created a fully functional e-commerce website, utilizing the FakeStoreAPI for product data. The site includes a search bar, sort logic, a shopping cart, a cart page, and a loading skeleton, showcasing my skills in web development."
          href="https://giorgimachitadze-ecommerce.vercel.app/"
          isSass
          isNext
          isTypescript
          isReact
          isZustand
        />
        <Project
          imgSource="/assets/image/iuritsereteli.png"
          title="Iuri.ge"
          description="&rdquo;Lawyer's Website: SEO-Optimized with
          Multilingual Support&quot; A lawyer's website designed
          for easy search engine discovery. Supports English and
          Georgian languages, featuring email capabilities and
          streamlined functionality."
          href="https://iuri.ge/?lang=ENG"
          isSass
          isTypescript
          isReact
        />
      </div>
    </div>
  );
}
