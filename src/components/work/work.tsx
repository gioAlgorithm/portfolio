"use client"
import React, {useEffect} from 'react'
import style from "./work.module.scss"
import { BsArrowRightShort } from "react-icons/bs";
// importing images
import evspImage from "../../../public/assets/image/evsp.png"
import mazeImage from "../../../public/assets/image/maze.png"
import worldImage from "../../../public/assets/image/world-website.png"
import ecommerceImage from "../../../public/assets/image/ecommerce.png"
import CssImage from "../../../public/assets/svg/css.png"
import ReactImage from "../../../public/assets/svg/react.png"
import SassImage from "../../../public/assets/svg/sass.png"
import FirebaseImage from "../../../public/assets/svg/firebase.png"
import GraphqlImage from "../../../public/assets/svg/graphql.png"
import JsImage from "../../../public/assets/svg/js.png"
import NextImage from "../../../public/assets/svg/nextjs.png"
import TypescriptImage from "../../../public/assets/svg/typescript.png"
import lawyerImage from "../../../public/assets/image/iuritsereteli.png"
import Image from 'next/image';


export default function Work() {

  // animation of card
  useEffect(() => {
    const cards = document.querySelectorAll(`.${style.card}`);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(`${style.show}`, entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
      });
    }, {
      threshold: 1,
    });
    cards.forEach((card) => observer.observe(card));
  }, []);
  
  return (
    <div className={style.workPage} id='work'>

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

      <div className={style.cardContainer}>
        <div className={`${style.firstProject} ${style.card}`} >
          <a href='https://giorgimachitadze-evsp.vercel.app/' className={style.innerFirstProject} target="_blank">
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

        <div className={`${style.secondProject} ${style.card}`}>
          <a href='https://giorgimachitadze-world.vercel.app/' className={style.innerSecondProject} target="_blank">
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

        <div className={`${style.thirdProject} ${style.card}`}>
          <a href='https://giorgimachitadze-ecommerce.vercel.app/' className={style.innerThirdProject} target="_blank">
            <div className={style.projectImage} >  
              <Image alt='project image' width={600} height={200} src={ecommerceImage.src} />     
            </div>
            <div className={style.projectInfo}>
              <div>
                <div className={style.projectAbout}>
                  
                  <h2 className={style.projectTitle}>Fake Store <BsArrowRightShort /></h2>
                  <p>
                    I created a fully functional e-commerce website, utilizing the FakeStoreAPI for product data. 
                    The site includes a search bar, a shopping cart, and a cart page, showcasing my skills in web development.
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
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className={`${style.fourthProject} ${style.card}`}>
          <a href='https://giorgimachitadze-maze.vercel.app/' className={style.innerFourthProject} target="_blank">
            <div className={style.projectImage} >       
              <Image alt='project image' width={600} height={200} src={mazeImage.src} />
            </div>
            <div className={style.projectInfo}>
              <div>
                <div className={style.projectAbout}>
                  
                  <h2 className={style.projectTitle}>The Maze <BsArrowRightShort /></h2>
                  <p>
                    &quot;The Maze&quot; presents 10 levels of challenging mazes filled with obstacles. 
                    Navigate the red dot, putting your reflexes to the test. Enjoy personalized user profiles, detailed statistics, and compete on global leaderboards.
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
                  <div style={{ backgroundImage: `url(${FirebaseImage.src})` }}>
                    <h1>Firebase</h1>
                  </div>
                </div>
              </div>
            </div>
          </a> 
        </div>

        <div className={`${style.fifthProject} ${style.card}`}>
          <a href='https://iuri.ge/?lang=ENG' className={style.innerFifthProject} target="_blank" >
            <div className={style.projectImage} >       
              <Image alt='project image' width={600} height={200} src={lawyerImage.src} />
            </div>
            <div className={style.projectInfo}>
              <div>
                <div className={style.projectAbout}>
                  
                  <h2 className={style.projectTitle}>Iuri.ge <BsArrowRightShort /></h2>
                  <p>
                    &rdquo;Lawyer&apos;s Website: SEO-Optimized with Multilingual Support&quot;
                    A lawyer&apos;s website designed for easy search engine discovery. Supports English and Georgian languages, featuring email capabilities and streamlined functionality.
                  </p>
                </div>
                <div className={style.projectTools}>
                  <div style={{ backgroundImage: `url(${ReactImage.src})` }}>
                    <h1>React.js</h1>
                  </div>
                  <div style={{ backgroundImage: `url(${TypescriptImage.src})` }}>
                    <h1>Typescript</h1>
                  </div>
                  <div style={{ backgroundImage: `url(${SassImage.src})` }}>
                    <h1>Sass</h1>
                  </div>
                </div>
              </div>
            </div>
          </a> 
        </div>
      </div>

    </div>
    
  )
}
