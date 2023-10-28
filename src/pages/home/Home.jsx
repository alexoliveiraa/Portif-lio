import React from "react";
import "./Home.css";
import Perfil from "../img/alexperfil.png"
import{FaLinkedin, FaGithub,  FaHtml5, FaReact, FaNodeJs, FaCss3Alt,  FaGitAlt, FaJs} from"react-icons/fa"
import {SiGmail} from 'react-icons/si'
import Homeprojects from '../../componets/Homeprojects'
import Homeabout from  '../../componets/Homeabout'
import { Outlet } from "react-router-dom";

export default function Home() {
 
  return (
    <main className="main">
      <div className="section1">
        {" "}
        <h1 className="titlesection">software enginner</h1>
        <p className="paragraphsection">
        Hi, I'm Alex Oliveira, a Web developer specializing in Javascript, ReactJS. With a solid understanding of HTML and CSS, I build intuitive and efficient user interfaces. I use Git for version control and actively collaborate on projects hosted on GitHub. My goal is to develop robust and scalable web solutions in line with industry best practices.
          
        </p>
      </div>
      <figure className="figure">
       
        
           <img  className="image" src={Perfil} alt="" /> 
           <ul className="medialist">
              <li className="socialmedialinkedin"><a href="https://www.linkedin.com/in/alex-oliveira-b81365241/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a></li>
              <li className="socialmediagmail"><a href="mailto:alexalmeida2101@gmail.com" target="_blank" rel="noopener noreferrer"><SiGmail/></a></li>
              <li className="socialmediagithub"><a href="http://github.com/alexoliveiraa" target="_blank" rel="noopener noreferrer"><FaGithub/></a> </li>


           </ul>
          
          
                   
        
      </figure>
      <section className="skills">
          <ul className="listskills">
            <li className="skillsitemjavascript"> <FaJs/> </li>
            <li className="skillsitemhtml"><FaHtml5 /></li>
            <li className="skillsitemcss"><FaCss3Alt/></li>
            <li className="skillsitemreact"><FaReact/></li>
            <li className="skillsitemnode"><FaNodeJs/></li>
            <li className="skillsitemgithub"><FaGithub/></li>
            <li className="skillsitemgit"><FaGitAlt/></li>
          </ul>
      </section>
      <Homeprojects/>
      <Homeabout/>
      
    </main>
  );
}
