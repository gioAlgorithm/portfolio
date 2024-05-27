"use client"
import style from "./Navbar.module.scss"
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState, useRef, useEffect } from "react"

export default function Navbar() {
  const [show, setShow] = useState(false)
  const [activeSection, setActiveSection] = useState('about');

  // show the dropdown menu
  const handleShow = ()=>{
    setShow(true)
  }
  const handleShowOff = ()=>{
    setShow(false)
  }

  // outside click logic
  const menuRef: any = useRef(null);

  useEffect(() => {
    let handler = (e: any) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

// scroll active animation
useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const offsetThreshold = 100; // Adjust this value as needed
    const sections = ['about', 'work', 'contact'];

    sections.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);

      if (sectionElement) {
        const offset = sectionElement.offsetTop - offsetThreshold;
        const height = sectionElement.offsetHeight;

        if (scrollY >= offset && scrollY < offset + height) {
          setActiveSection(sectionId);
        }
      }
    });
  };

  document.addEventListener('scroll', handleScroll);

  return () => {
    document.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <div className={style.navbar}>
      <div className={style.inner}>

        <a href="#about" className={style.logo}>
          <h3>Giorgi Machitadze</h3>
        </a>

        <div className={style.navigation}>
          <Link className={activeSection === 'about' ? style.active : ''} href="#about">About</Link>
          <Link className={activeSection === 'work' ? style.active : ''} href="#work">Work</Link>
          <Link className={activeSection === 'contact' ? style.active : ''} href="#contact">Contact</Link>
        </div>
        <div className={style.responsiveContainer}>
          <div className={style.navigationButton} onClick={handleShow}>{!show ? <GiHamburgerMenu /> : <IoClose />}</div>
          
          <div className={`${style.navigationMenu} ${show ? style.active : ''}`} ref={menuRef}>
            <Link className={activeSection === 'about' ? style.active : ''} onClick={handleShowOff} href="#about">About</Link>
            <Link className={activeSection === 'work' ? style.active : ''} onClick={handleShowOff} href="#work">Work</Link>
            <Link className={activeSection === 'contact' ? style.active : ''} onClick={handleShowOff} href="#contact">Contact</Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}
