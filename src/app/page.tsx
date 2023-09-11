"use client"
import React, {useEffect} from 'react'
import {metadata} from "./metaData"
import style from "./about.module.scss"
import Typewriter from 'typewriter-effect';
// importing pictures:
import CssImage from "../../public/assets/svg/css.png"
import ReactImage from "../../public/assets/svg/react.png"
import SassImage from "../../public/assets/svg/sass.png"
import FirebaseImage from "../../public/assets/svg/firebase.png"
import GraphqlImage from "../../public/assets/svg/graphql.png"
import htmlImage from "../../public/assets/svg/html.png"
import JsImage from "../../public/assets/svg/js.png"
import NextImage from "../../public/assets/svg/nextjs.png"
import TypescriptImage from "../../public/assets/svg/typescript.png"
import PhotoshopImage from "../../public/assets/svg/photoshop.png"
import gitImage from "../../public/assets/svg/git.png"
import yarnImage from "../../public/assets/svg/yarn.png"
import npmImage from "../../public/assets/svg/npm.png"

export default function About() {
  useEffect(() => {
    if (metadata.title) {
      document.title = String(metadata.title)
    }
  }, []);
  
  return (
    <div className={style.aboutPage}>
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
          <p>
            Hello, I&apos;m a passionate front-end web developer located in Georgia. My love for web development fuels my daily drive to create a multitude of websites,
            allowing me to continuously expand my knowledge and refine my skills. My journey in this dynamic field has been a thrilling exploration of creativity and problem-solving. 
            With each project I take on, I embrace the opportunity to push my boundaries and stay at the forefront of the ever-evolving web development landscape. This commitment to growth
            keeps me enthusiastic and committed to delivering top-notch web experiences to clients and users alike.
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
            <div style={{ backgroundImage: `url(${gitImage.src})` }}>
              <h1>Git</h1>
            </div>
            <div style={{ backgroundImage: `url(${yarnImage.src})` }}>
              <h1>Yarn</h1>
            </div>
            <div style={{ backgroundImage: `url(${npmImage.src})` }}>
              <h1>NPM</h1>
            </div>
          </div>

          <div className={style.skillContentSecond}>
            <div style={{ backgroundImage: `url(${htmlImage.src})` }}>
              <h1>HTML</h1>
            </div>
            <div style={{ backgroundImage: `url(${CssImage.src})` }}>
              <h1>CSS</h1>
            </div>
            <div style={{ backgroundImage: `url(${SassImage.src})` }}>
              <h1>Sass</h1>
            </div>
            <div style={{ backgroundImage: `url(${PhotoshopImage.src})` }}>
              <h1 className={style.shortFont}>Photoshop</h1>
            </div>
          </div>

          <div className={style.skillContentThird}>
            <div style={{ backgroundImage: `url(${NextImage.src})` }}>
              <h1>Next.js</h1>
            </div>
            <div style={{ backgroundImage: `url(${ReactImage.src})` }}>
              <h1>React.js</h1>
            </div>
            <div style={{ backgroundImage: `url(${TypescriptImage.src})` }}>
              <h1>Typescript</h1>
            </div>
          </div>

          <div className={style.skillContentFourth}>
            <div style={{ backgroundImage: `url(${GraphqlImage.src})` }}>
              <h1>GraphQL</h1>
            </div>
            <div style={{ backgroundImage: `url(${FirebaseImage.src})` }}>
              <h1>Firebase</h1>
            </div>
          </div>

          <div className={style.skillContentFifth}>
            <div style={{ backgroundImage: `url(${JsImage.src})` }}>
              <h1>Javascript</h1>
            </div>
          </div>

        </div>
      </div>
      
    </div>  
  )

}
