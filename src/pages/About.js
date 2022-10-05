import React, { useContext } from "react"
import { ThemeContext } from "../context/Theme-context"
import "./page-style.css"
import Typical from "react-typical"

export default function About(){
    const {theme} = useContext(ThemeContext)
    const aboutImage = theme ==='light' ? "./portfolio/image/about.png" : "./portfolio/image/about-dark.png"

    return(
        <div className="about-container" data-theme={theme}>

            <div className="inner-about-container">
                
                <div className="about-content" >
                    <img alt="coding" src={aboutImage}/>
                    <div className="about-text-content">
                            <span>
                                <h1>ABOUT</h1>
                                {" "}  
                                <h1>
                                        <Typical 

                                            loop={Infinity}
                                            wrapper="b"
                                            steps={
                                                [   "ME",
                                                    3000,
                                                    "DEVELOPER",
                                                    3000,
                                                    "YOUTUBER",
                                                    3000,
                                                    
                                                ]
                                            }

                                    />
                                </h1>
                            </span>
                            <p>
                                I'm front-end developer located in Georgia.
                                I do not have direct experience in the field, i.e. working for various companies, 
                                however I can account for that by finding great pleasure building numerous different websites 
                                on a daily basis to deepen my knowledge and hone my skills.
                            </p>
                        </div>
                </div>
                    
            </div>
        </div>
    )
}