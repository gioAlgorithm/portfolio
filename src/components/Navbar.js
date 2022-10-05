import {React, useRef} from "react"
import "./components-style.css"
import {NavLink, Link} from "react-router-dom"
import { FaMoon,} from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme-context";
import { GiCrossMark, GiHamburgerMenu } from "react-icons/gi";



export default function Navbar(){

    // responsive menu
    const navRef = useRef()
    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive-nav")
    }
    const hideNavbar =()=>{
        navRef.current.classList.remove("responsive-nav")
      }

    // controling dark mode and light mode
    const{theme} = useContext(ThemeContext)
    const{onThemeToggle} = useContext(ThemeContext)

    const icon = theme === 'light' ? <FaMoon className="moon" /> : <BsFillSunFill className="sun" />
    const newImage = theme === 'light' ? "./portfolio/image/logo-white.png" : "./portfolio/image/logo-dark.png"

   

    return(
        <div className="nav-container"  data-theme={theme}>
            <Link to="/"><img alt="logo" src={newImage} height="50px"/></Link> 
                <nav  ref={navRef}>
                    
                    <NavLink  to="/"
                        className={({isActive})=>(
                            isActive ? 'nav-link-active' : 'nav-link'
                        )}
                    end>Work</NavLink>

                    <NavLink  to="/about"
                        className={({isActive})=>(
                            isActive ? 'nav-link-active' : 'nav-link'
                        )}
                    >About</NavLink>

                    <NavLink  to="/contact"
                        className={({isActive})=>(
                            isActive ? 'nav-link-active' : 'nav-link'
                        )}
                    >Contact</NavLink>

                    <div className="nav-link" onClick={onThemeToggle}>{icon}</div>
                    <button className="nav-exit" onClick={hideNavbar}>
                        <GiCrossMark />
                    </button>
                
                </nav>
                <button className="nav-menu" onClick={showNavbar}>
                    <GiHamburgerMenu />
                </button>
        </div>
    )
}