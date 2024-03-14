"use client"
import React, {useState, useRef, useEffect, FormEvent} from 'react'
import style from "./contact.module.scss"
import emailjs from '@emailjs/browser'
import { BsFillPersonFill } from "react-icons/bs";
import { MdMail } from "react-icons/md"
import newSuccess from "../../../public/assets/image/success-white.png"
import Image from 'next/image';


export default function Contact() {

  // animation
  useEffect(() => {
    const animations = document.querySelectorAll(`.${style.animation}`);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(`${style.show}`, entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
      });
    }, {
      threshold: 1,

    });
    animations.forEach((animations) => observer.observe(animations));
  }, []);

  // sending email logic
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return

    emailjs.sendForm('service_rwzuuq1', 'template_oss7n3u', form.current, '5kjCSKMjUxdBaZeqz')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    form.current.reset(); // Reset the form.
    setIsSubmitted(true);
  };
  
  return (
    <div className={style.contactPage} id='contact'>
      <div className={style.innerContactPage}>
      
        <div className={`${style.innerContactQuestion} ${style.animation}`}>
          {!isSubmitted &&
            <>
              <h1>Do you have any question?</h1>
              <p>send me an email</p>
            </> 
          }
          {isSubmitted && 
            <>
              <h2>Thank you for reaching out with your question.</h2>
              <p>I&apos;ve received your email, and I&apos;ll get back to you as soon as possible.</p>
            </>
          }
          
        </div>

        <div className={style.innerContact}>
          {!isSubmitted &&
            <form ref={form} onSubmit={sendEmail}>
                <div className={`${style.inputName} ${style.animation}`}>
                  <BsFillPersonFill className={style.inputNameIcon} />
                  <input type="text" name="user_name" placeholder="Name" required />
                </div>

                <div className={`${style.inputEmail} ${style.animation}`}>
                  <MdMail className={style.inputEmailIcon} />
                  <input type="email" name="user_email" placeholder="Email" required />
                </div>

                <div className={`${style.inputTextarea} ${style.animation}`}>
                  <textarea  name="message" placeholder="Message" required />
                </div>

                <div className={`${style.btnContainer} ${style.animation}`}>
                  <button className={style.btn} type="submit" value="Send">
                    <span>SEND</span>
                    <div className={style.liquid}></div>
                  </button>
                </div>
            </form>
          }
          {isSubmitted && <Image alt="success" width={600} height={600} src={newSuccess.src} className={style.success} />}
        </div>
      </div>
    </div>
    
  )
}








