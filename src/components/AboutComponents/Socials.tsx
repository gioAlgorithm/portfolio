'use client'
import style from './Socials.module.scss'
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { useEffect } from 'react';
interface Props {
  
}

export default function Socials(props: Props) {
  // animation
  useEffect(() => {
    const elements = document.querySelectorAll(`.${style.socialsLink}`);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Apply styles or animations for other elements (cards)
        entry.target.classList.toggle(`${style.active}`, entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
        
      });
    }, {
      threshold: 1,
      rootMargin: "0px 0px 168px 0px", 
    });

    elements.forEach((element) => observer.observe(element));
  }, []);

  return (
    <div className={style.socials}>
      <a
        href="https://github.com/gioAlgorithm"
        title="Github"
        target="_blank"
        rel="noreferrer"
        className={`${style.socialsLink} ${style.socialsLinkGithub}`}
        
      >
        <div className={style.socialsLinkWrapper}>
          <FaGithub className={style.socialsLinkIcon} />
          <span className={style.socialsLinkText} style={{fontSize: `1.5rem`}}>Github</span>
        </div>
      </a>
      <a
        href="https://www.youtube.com/channel/UCC713Yy8jBvpaXyCipZmRpQ"
        title="Youtube"
        target="_blank"
        rel="noreferrer"
        className={`${style.socialsLink} ${style.socialsLinkYoutube}`}
      >
        <div className={style.socialsLinkWrapper}>
          <FaYoutube className={style.socialsLinkIcon} />
          <span className={style.socialsLinkText} style={{fontSize: `1.5rem`}}>Youtube</span>
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/giorgi-machitadze-b20b4629b/"
        title="Linkedin"
        target="_blank"
        rel="noreferrer"
        className={`${style.socialsLink} ${style.socialsLinkLinkedin}`}
      >
        <div className={style.socialsLinkWrapper}>
          <FaLinkedin className={style.socialsLinkIcon} />
          <span className={style.socialsLinkText} style={{fontSize: `1.5rem`}}>Linkedin</span>
        </div>
      </a>
    </div>
  )
}