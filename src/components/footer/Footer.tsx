import React from 'react'
import { BsYoutube,BsLinkedin,BsGithub, } from "react-icons/bs";
import style from "./Footer.module.scss"

export default function Footer() {
    return(
        <div className={style.footerContainer}>

            <div className={style.innerFooter}>
                <a href="https://www.linkedin.com/in/giorgi-machitadze-b20b4629b/" rel="noopener noreferrer" target="_blank"><BsLinkedin className={style.icons} /></a>
                <a href="https://www.youtube.com/channel/UCC713Yy8jBvpaXyCipZmRpQ" rel="noopener noreferrer" target="_blank"> <BsYoutube className={style.icons} /></a>
                <a href="https://github.com/gioAlgorithm" rel="noopener noreferrer" target="_blank"><BsGithub className={style.icons} /></a>
            </div>
            
           <p className={style.copyright}>Copyright © 2024 Giorgi Machitadze All Rights Reserved.</p>
        </div>
    )
}