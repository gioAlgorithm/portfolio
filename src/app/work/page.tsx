"use client"
import React, {useEffect} from 'react'
import { metadata } from './metaData';
import style from "./work.module.scss"
import { BsArrowRightShort } from "react-icons/bs";
// importing images
import evspImage from "../../../public/assets/image/evsp.png"
import scaryMazeImage from "../../../public/assets/image/scary-maze.png"
import worldImage from "../../../public/assets/image/world-website.png"
import CssImage from "../../../public/assets/svg/css.png"
import ReactImage from "../../../public/assets/svg/react.png"
import SassImage from "../../../public/assets/svg/sass.png"
import FirebaseImage from "../../../public/assets/svg/firebase.png"
import GraphqlImage from "../../../public/assets/svg/graphql.png"
import htmlImage from "../../../public/assets/svg/html.png"
import JsImage from "../../../public/assets/svg/js.png"
import NextImage from "../../../public/assets/svg/nextjs.png"
import TypescriptImage from "../../../public/assets/svg/typescript.png"
import Image from 'next/image';


export default function Work() {

  useEffect(() => {
    if (metadata.title) {
      document.title = String(metadata.title)
    }
  }, []);
  
  return (
    <div className={style.workPage}>

      <div className={style.waviy}>
        <span style={{ '--i' : 1 } as React.CSSProperties}>P</span>
        <span style={{ '--i' : 2 } as React.CSSProperties}>r</span>
        <span style={{ '--i' : 3 } as React.CSSProperties}>o</span>
        <span style={{ '--i' : 4 } as React.CSSProperties}>j</span>
        <span style={{ '--i' : 5 } as React.CSSProperties}>e</span>
        <span style={{ '--i' : 6 } as React.CSSProperties}>c</span>
        <span style={{ '--i' : 7 } as React.CSSProperties}>t</span>
        <span style={{ '--i' : 8 } as React.CSSProperties}>s</span>
      </div>

      <div className={style.firstProject}>
        <a href='https://giorgimachitadze-evsp.vercel.app/' className={style.innerFirstProject}>
          <div className={style.projectImage} >       
            <Image alt='project image' width={600} height={200} src={evspImage.src} />
          </div>
          <div className={style.projectInfo}>
            <div>
              <div className={style.projectAbout}>
                
                <h2 className={style.projectTitle}>Entertainment VS Productivity <BsArrowRightShort /></h2>
                <p>
                  &quot;Entertainment vs. Productivity&quot; is a web app that helps you balance work and leisure. It has three elements: 
                  Productivity, Entertainment, and Balance. Click &quot;Productivity&quot; to start a timer for work, then &quot;Submit&quot; to record time. 
                  &quot;Entertainment&quot; offers breaks. &quot;Balance&quot; suggests switching based on your activity, ensuring a harmonious routine.
                </p>
              </div>
              <div className={style.projectTools}>
                <div style={{ backgroundImage: `url(${CssImage.src})` }}>
                  <h1>CSS</h1>
                </div>
                <div style={{ backgroundImage: `url(${ReactImage.src})` }}>
                  <h1>React.js</h1>
                </div>
                <div style={{ backgroundImage: `url(${JsImage.src})` }}>
                  <h1>Javascript</h1>
                </div>
                <div style={{ backgroundImage: `url(${FirebaseImage.src})` }}>
                  <h1>Firebase</h1>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className={style.secondProject}>
        <a href='https://giorgimachitadze-scarymaze.vercel.app/' className={style.innerSecondProject}>
          <div className={style.projectImage} >       
            <Image alt='project image' width={600} height={200} src={scaryMazeImage.src} />
          </div>
          <div className={style.projectInfo}>
            <div>
              <div className={style.projectAbout}>
                
                <h2 className={style.projectTitle}>Scary Maze <BsArrowRightShort /></h2>
                <p>
                Experience the upgraded Scary Maze Game with five intense levels, each building suspense. 
                Brace for a heart-stopping climax in the middle of the fifth level. 
                Are you up for the challenge? Test your nerves and remember, the scream is just the beginning.
                </p>
              </div>
              <div className={style.projectTools}>
                <div style={{ backgroundImage: `url(${ReactImage.src})` }}>
                  <h1>React.js</h1>
                </div>
                <div style={{ backgroundImage: `url(${TypescriptImage.src})` }}>
                  <h1>Typescript</h1>
                </div>
                <div style={{ backgroundImage: `url(${NextImage.src})` }}>
                  <h1>Next.js</h1>
                </div>
                <div style={{ backgroundImage: `url(${SassImage.src})` }}>
                  <h1>Sass</h1>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className={style.thirdProject}>
        <a href='https://giorgimachitadze-world.vercel.app/' className={style.innerThirdProject}>
          <div className={style.projectImage} >       
            <Image alt='project image' width={600} height={200} src={worldImage.src} />
          </div>
          <div className={style.projectInfo}>
            <div>
              <div className={style.projectAbout}>
                
                <h2 className={style.projectTitle}>World <BsArrowRightShort /></h2>
                <p>
                  Explore a dynamic GraphQL API for comprehensive country data. Effortlessly search and filter countries by starting letters, simplifying data retrieval. 
                  Get insights into population, area, languages, and currencies for countries worldwide. 
                  Discover an efficient way to access country information with this user-friendly tool.
                </p>
              </div>
              <div className={style.projectTools}>
                <div style={{ backgroundImage: `url(${NextImage.src})` }}>
                  <h1>Next.js</h1>
                </div>
                <div style={{ backgroundImage: `url(${SassImage.src})` }}>
                  <h1>Sass</h1>
                </div>
                <div style={{ backgroundImage: `url(${ReactImage.src})` }}>
                  <h1>React.js</h1>
                </div>
                <div style={{ backgroundImage: `url(${TypescriptImage.src})` }}>
                  <h1>Typescript</h1>
                </div>
                <div style={{ backgroundImage: `url(${GraphqlImage.src})` }}>
                  <h1>GraphQL</h1>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

    </div>
    
  )
}
