"use client"
import React, {useState, useRef, useEffect} from 'react'
import style from "./contact.module.scss"
import emailjs from '@emailjs/browser'
import { BsFillPersonFill } from "react-icons/bs";
import { MdMail } from "react-icons/md"
import newSuccess from "../../../public/assets/image/success-white.png"
import { metadata } from './metaData';
import Image from 'next/image';


export default function Contact() {

  // changing metadata title
  useEffect(() => {
    if (metadata.title) {
      document.title = String(metadata.title)
    }
  }, []);

  // sending email logic
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    const name = form.current.user_name.value;

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
    <div className={style.contactPage}>
      <div className={style.innerContactPage}>
      
        <div className={style.innerContactQuestion}>
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
                <div className={style.inputName}>
                  <BsFillPersonFill className={style.inputNameIcon} />
                  <input type="text" name="user_name" placeholder="Name" required/>
                </div>

                <div className={style.inputEmail}>
                  <MdMail className={style.inputEmailIcon} />
                  <input type="email" name="user_email" placeholder="Email" required/>
                </div>

                <div className={style.inputTextarea}>
                  <textarea required name="message" placeholder="Message" />
                </div>

                <div className={style.btnContainer}>
                <button className={style.btn} onClick={sendEmail} type="submit" value="Send">
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
