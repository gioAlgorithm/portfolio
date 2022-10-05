import React from "react"
import { useContext } from "react";
import { ThemeContext } from "../context/Theme-context";
import { BsYoutube,BsFacebook,BsGithub, } from "react-icons/bs";



export default function Footer(){


    const{theme} = useContext(ThemeContext)

    return(
        <div className="footer-container" data-theme={theme}>

            <div className="inner-footer">
                <a href="https://www.facebook.com/giorgi.machitadze.507" rel="noopener noreferrer" target="_blank"><BsFacebook className="icons" /></a>
                <a href="https://www.youtube.com/channel/UCC713Yy8jBvpaXyCipZmRpQ" rel="noopener noreferrer" target="_blank"> <BsYoutube className="icons" /></a>
                <a href="https://github.com/gioAlgorithm" rel="noopener noreferrer" target="_blank"><BsGithub className="icons" /></a>
            </div>

           <p className="copyright">Copyright © 2022 GioAlgorithm All Rights Reserved.</p>
        </div>
    )
}