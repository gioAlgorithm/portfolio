"use client"
import style from "./Navbar.module.scss"
import logo from '/public/assets/image/logo-white.png'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export default function Navbar() {
  const router = usePathname();

  const [show, setShow] = useState(false)

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

  return (
    <div className={style.navbar}>

      <div>
        <Link href="/"><Image src={logo.src} width={450} height={100} alt="logo" /></Link>
      </div>

      <div className={style.navigation}>
        <Link className={router === "/" ? style.active : ""} href="/">About</Link>
        <Link className={router === "/work" ? style.active : ""} href="/work">Work</Link>
        <Link className={router === "/contact" ? style.active : ""} href="/contact">Contact</Link>
      </div>

      <div className={style.navigationButton} onClick={handleShow}><GiHamburgerMenu /></div>
      {show && 
        <div className={style.navigationMenu} ref={menuRef}>
          <Link className={router === "/" ? style.active : ""} onClick={handleShowOff} href="/">About</Link>
          <Link className={router === "/work" ? style.active : ""} id={style.middleNavigation} onClick={handleShowOff} href="/work">Work</Link>
          <Link className={router === "/contact" ? style.active : ""} onClick={handleShowOff} href="/contact">Contact</Link>
        </div>
      }
    </div>
  )
}
