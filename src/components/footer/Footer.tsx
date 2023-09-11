import React from 'react'
import { BsYoutube,BsFacebook,BsGithub, } from "react-icons/bs";
import style from "./Footer.module.scss"

export default function Footer() {
    return(
        <div className={style.footerContainer}>

            <div className={style.innerFooter}>
                <a href="https://www.facebook.com/giorgi.machitadze.507" rel="noopener noreferrer" target="_blank"><BsFacebook className={style.icons} /></a>
                <a href="https://www.youtube.com/channel/UCC713Yy8jBvpaXyCipZmRpQ" rel="noopener noreferrer" target="_blank"> <BsYoutube className={style.icons} /></a>
                <a href="https://github.com/gioAlgorithm" rel="noopener noreferrer" target="_blank"><BsGithub className={style.icons} /></a>
            </div>
            
           <p className={style.copyright}>Copyright © 2023 GioAlgorithm All Rights Reserved.</p>
        </div>
    )
}
