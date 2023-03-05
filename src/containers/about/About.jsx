import React from 'react'
import './about.css';
import { Outlet} from "react-router-dom";
import {Footer, Header} from '../index'
import {DropDownActions} from '../../components/index'
import bgImgAbout from "../../assets/images/bgImgAbout.png";
import aboutData from '../../datas/kasadataAbout.json';


const About = () => {
  console.log(aboutData[0].title)
  return (
    <>


    <Header 
        img ={bgImgAbout}
        alt="background header  accueil"
      />
      <div className='about__collapse padding20'>
        <DropDownActions 
          title={aboutData[0].title}
          content={aboutData[0].content}
          css={"dropdown-button--about"}
          cssUl={"menu--about"}
        />
        <DropDownActions 
          title={aboutData[1].title}
          content={aboutData[1].content}
          css={"dropdown-button--about"}
          cssUl={"menu--about"}
        />
        <DropDownActions 
          title={aboutData[2].title}
          content={aboutData[2].content}
          css={"dropdown-button--about"}
          cssUl={"menu--about"}
        />
        <DropDownActions 
          title={aboutData[3].title}
          content={aboutData[3].content}
          css={"dropdown-button--about"}
          cssUl={"menu--about"}
          cssLi={"menuLi"}
        />
      </div>
      
      <Footer />
    <Outlet />

    </>
    
  )
}

export default About