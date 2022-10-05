import React, { useContext, useState } from "react"
import { ThemeContext } from "../context/Theme-context"
import "./page-style.css"
import { BsFillPersonFill } from "react-icons/bs";
import { MdMail } from "react-icons/md"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(){
    const {theme} = useContext(ThemeContext)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rwzuuq1', 'template_oss7n3u', form.current, '5kjCSKMjUxdBaZeqz')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        setIsSubmitted(true);
  };

    const newSuccess = theme ==='light' ? "./portfolio/image/success-white.png" : "./portfolio/image/success-dark.png"

    const [isSubmitted, setIsSubmitted] = useState(false)



    return(
        <div className="contact-container" data-theme={theme}>
            <div className="inner-contact-container">
                
                <div className="inner-contact-question">
                    <h1>Do you have any question?</h1>
                    <p>send me an email</p>
                </div>

                <div className="inner-contact">
                    {!isSubmitted && ( <form ref={form} onSubmit={sendEmail}>
                        <div>
                            <div className="input-name">
                                <BsFillPersonFill className="input-name-icon" />
                                <input type="text" name="user_name" placeholder="Name" required/>
                            </div>   
                        </div>
                        <div className="input-email">
                            <MdMail className="input-email-icon" />
                            <input type="email" name="user_email" placeholder="Email" required/>
                        </div>

                        <div className="input-textarea">
                            <textarea required name="message" placeholder="Message" />
                        </div>

                        <div className="btn-container">

                            <button className="btn" onClick={()=> setIsSubmitted} type="submit" value="Send">
                                <span>SEND</span>
                                <div className="liquid"></div>
                            </button>

                        </div>
                           
                    </form>)}
                    {setIsSubmitted ? isSubmitted && <img alt="success" src={newSuccess} className="great-success" width="600px" heght="600px"/> : null}
                </div>
            </div>
        </div>
    )
}