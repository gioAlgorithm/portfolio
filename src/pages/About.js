import React, { useContext} from "react"
import { ThemeContext } from "../context/Theme-context"
import "./page-style.css"
import Typewriter from "typewriter-effect"
// importing pictures
import laptopImg from "../image/about.png"
import laptopImgDark from "../image/about-dark.png"

export default function About(){
    const {theme} = useContext(ThemeContext)
    const aboutImage = theme ==='light' ? laptopImg : laptopImgDark

    return(
        <div className="about-container" data-theme={theme}>

            <div className="inner-about-container">
                
                <div className="about-content" >
                    <img alt="coding" src={aboutImage}/>
                    <div className="about-text-content">
                        <h1>
                            About
                        </h1>
                        <h1 className="typer">
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop:true,
                                delay: 80,
                                strings:[
                                    "Me",
                                    "Developer",
                                    "Youtuber",

                                ]
                                      
                            }}
                        />
                        </h1>
                        
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