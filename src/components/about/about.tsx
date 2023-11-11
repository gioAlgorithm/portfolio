"use client"
import React, {useEffect} from 'react'
import {metadata} from "./metaData"
import style from "./about.module.scss"
import Typewriter from 'typewriter-effect';
// importing pictures:
import CssImage from "../../../public/assets/svg/css.png"
import ReactImage from "../../../public/assets/svg/react.png"
import SassImage from "../../../public/assets/svg/sass.png"
import FirebaseImage from "../../../public/assets/svg/firebase.png"
import GraphqlImage from "../../../public/assets/svg/graphql.png"
import htmlImage from "../../../public/assets/svg/html.png"
import JsImage from "../../../public/assets/svg/js.png"
import NextImage from "../../../public/assets/svg/nextjs.png"
import TypescriptImage from "../../../public/assets/svg/typescript.png"
import PhotoshopImage from "../../../public/assets/svg/photoshop.png"
import gitImage from "../../../public/assets/svg/git.png"
import yarnImage from "../../../public/assets/svg/yarn.png"
import npmImage from "../../../public/assets/svg/npm.png"

export default function About() {
  // changing metadata title
  useEffect(() => {
    if (metadata.title) {
      document.title = String(metadata.title)
    }
  }, []);

  // animation
  useEffect(() => {
    const elements = document.querySelectorAll(`.${style.card}, .${style.text}`);
    const observer = new IntersectionObserver((entries) => {
      console.log(entries); // Add this line for debugging
      entries.forEach((entry) => {
        if (entry.target.classList.contains(style.card)) {
          // Apply styles or animations for cards
          entry.target.classList.toggle(`${style.show}`, entry.isIntersecting);
        } else if (entry.target.classList.contains(style.text)) {
          // Apply styles or animations for text elements
          entry.target.classList.toggle(`${style.textShow}`, entry.isIntersecting);
        }

        if (entry.isIntersecting) observer.unobserve(entry.target);
      });
    }, {
      threshold: 1,
    });
    elements.forEach((element) => observer.observe(element));
  }, []);

  
  
  return (
    <div className={style.aboutPage} id='about'>
      <div className={style.innerAboutPage}>
        <div className={style.aboutTextContent}>
          <h1>About</h1>
          <h1 className={style.typer}>
            <Typewriter
              options={{
                strings: ['Me', 'Developer', 'Youtuber'],
                autoStart: true,
                loop: true, 
              }}
            />
          </h1>
          <p className={style.text}>
            Hi, I&apos;m a web developer from Georgia who loves creating websites. I enjoy learning and improving my skills every day. 
            Web development is a fun and creative journey for me, where I get to solve interesting problems. 
            I take on different projects to challenge myself and stay updated on the latest trends in web development. 
            I&apos;m dedicated to growing and always excited to deliver great website experiences to clients and users.
          </p>
          
        </div>
        <div className={style.aboutSkillContainer}>
          <div className={style.hexagon}></div>
          <div className={style.wavySkill}>
            <span style={{ '--i' : 1 } as React.CSSProperties}>S</span>
            <span style={{ '--i' : 2 } as React.CSSProperties}>k</span>
            <span style={{ '--i' : 3 } as React.CSSProperties}>i</span>
            <span style={{ '--i' : 4 } as React.CSSProperties}>l</span>
            <span style={{ '--i' : 5 } as React.CSSProperties}>l</span>
            <span style={{ '--i' : 6 } as React.CSSProperties}>s</span>
          </div>

          <div className={style.skillContentFirst}>
            <div className={style.card} style={{ backgroundImage: `url(${gitImage.src})` }}>
              <h1>Git</h1>
            </div>
            <div className={style.card} style={{ backgroundImage: `url(${yarnImage.src})` }}>
              <h1>Yarn</h1>
            </div>
            <div className={style.card} style={{ backgroundImage: `url(${npmImage.src})` }}>
              <h1>NPM</h1>
            </div>
          </div>

          <div className={style.skillContentSecond}>
            <div className={style.card} style={{ backgroundImage: `url(${htmlImage.src})` }}>
              <h1>HTML</h1>
            </div>
            <div className={style.card} style={{ backgroundImage: `url(${CssImage.src})` }}>
              <h1>CSS</h1>
            </div>
            <div className={style.card} style={{ backgroundImage: `url(${SassImage.src})` }}>
              <h1>Sass</h1>
            </div>
            <div className={style.card} style={{ backgroundImage: `url(${PhotoshopImage.src})` }}>
              <h1 className={style.shortFont}>Photoshop</h1>
            </div>
          </div>

          <div className={style.skillContentThird}>
            <div className={style.card} style={{ backgroundImage: `url(${NextImage.src})` }}>
              <h1>Next.js</h1>
            </div>
            <div className={style.card} style={{ backgroundImage: `url(${ReactImage.src})` }}>
              <h1>React.js</h1>
            </div>
            <div className={style.card} style={{ backgroundImage: `url(${TypescriptImage.src})` }}>
              <h1>Typescript</h1>
            </div>
          </div>

          <div className={style.skillContentFourth}>
            <div className={style.card} style={{ backgroundImage: `url(${GraphqlImage.src})` }}>
              <h1>GraphQL</h1>
            </div>
            <div className={style.card} style={{ backgroundImage: `url(${FirebaseImage.src})` }}>
              <h1>Firebase</h1>
            </div>
          </div>

          <div className={style.skillContentFifth}>
            <div className={style.card} style={{ backgroundImage: `url(${JsImage.src})` }}>
              <h1>Javascript</h1>
            </div>
          </div>

        </div>
      </div>
      
    </div>  
  )
}