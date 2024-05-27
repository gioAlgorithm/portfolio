'use client'
import { useState, useEffect, useRef } from 'react';
import styles from './SkillCard.module.scss'

interface Props {
  className?: string;
  title: string;
  source: string;
  backColor: string;
}

export default function SkillCard(props: Props) {
  const {className, title, source, backColor} = props
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (cardRef.current) {
        const width = cardRef.current.offsetWidth;
        setCardWidth(width);
      }
    };
  
    // Initial width calculation
    handleResize();
  
    // Listen for window resize event
    window.addEventListener('resize', handleResize);
  
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [cardWidth]);

  // animation
  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.card}`);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        
        // Apply styles or animations for other elements (cards)
        entry.target.classList.toggle(`${styles.active}`, entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
        
      });
    }, {
      threshold: 1,
      rootMargin: "0px 0px 168px 0px", 
    });

    elements.forEach((element) => observer.observe(element));
  }, []);

  return (
    <span
      className={`${styles.card} ${className || ''}`}
      style={{ backgroundImage: `url(${source})` }}
      
    >
      <div className={styles.titleBack} style={{ backgroundColor: `${backColor}` }}></div>
      <div className={styles.title} ref={cardRef} style={{fontSize: cardWidth ? cardWidth / 9 : 'inherit'}}>
        {title}
      </div>
    </span>
  )
}