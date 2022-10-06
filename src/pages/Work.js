import React, { useContext } from "react"
import { ThemeContext } from "../context/Theme-context"
import "./page-style.css"
import { Component } from "react";
import Slider from "react-slick";
// importing pictures
import projectImgCharacter from "../image/fictional-character.png"
import emptyForNow from "../image/empty-for-now.png"
import emptyForNowDark from "../image/empty-for-now-dark.png"




export default function Work(){

  class SimpleSlider extends Component {
    // slider settings
    render() {
      const settings = {
        infinite: true,
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        draggable: true,
        
        
      };
      
      // returning slider components
      return (
        <div className="slider">
          <div className="inner-slider">
            <h1> Projects</h1>

            <Slider {...settings} >

              <div className="slider-project">
                <img src={projectImage} alt="project" className="project-img"  />
              </div>
    
              <div className="slider-project">
                <img src={projectImgCharacter} alt="project" className="project-img"  />
              </div>
    
              <div className="slider-project">
                <img src={projectImage} alt="project" className="project-img"  />
              </div>
            </Slider>
          </div>
        </div>
      );
    }
  }
    
    const {theme} = useContext(ThemeContext)
    const projectImage = theme ==='light' ? emptyForNow : emptyForNowDark
    
    return(
        <div className="work-container" data-theme={theme}>
          <div className="inner-work-container">
            <SimpleSlider />
          </div>
          
        </div>
    )
}