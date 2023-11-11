"use client"
import style from "./Navbar.module.scss"
import logo from '/public/assets/image/logo-white.png'
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

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

      <div>
        <Link href="/"><Image src={logo.src} width={450} height={100} alt="logo" /></Link>
      </div>

      <div className={style.navigation}>
      <Link className={activeSection === 'about' ? style.active : ''} href="#about">About</Link>
        <Link className={activeSection === 'work' ? style.active : ''} href="#work">Work</Link>
        <Link className={activeSection === 'contact' ? style.active : ''} href="#contact">Contact</Link>
      </div>

      <div className={style.navigationButton} onClick={handleShow}><GiHamburgerMenu /></div>
      {show && 
        <div className={style.navigationMenu} ref={menuRef}>
          <Link className={activeSection === 'about' ? style.active : ''} onClick={handleShowOff} href="#about">About</Link>
          <Link className={activeSection === 'work' ? style.active : ''} id={style.middleNavigation} onClick={handleShowOff} href="#work">Work</Link>
          <Link className={activeSection === 'contact' ? style.active : ''} onClick={handleShowOff} href="#contact">Contact</Link>
        </div>
      }
    </div>
  )
}
