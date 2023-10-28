import React from "react";
import "../pages/about/About.css";
import Image from '../pages/img/alexperfil.png'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Homeabout() {
  return (
    <main className="mainhomeabout">
      
      <div className="column">
        <h1 className="titleabout">Profisional Profile</h1>
      <p className="paragraphabout">
        Web developer with solid knowledge of HTML, CSS, JavaScript and React.
        Committed to creating intuitive and optimized user experiences.
        Proactive and always looking to keep up to date with the latest trends
        and best practices in the web industry.
      </p>
        <h1 className="titleabout">Technical skills</h1>
        <ul className="ulabout">
          <li>Knowledge of HTML5 and web semantics.</li>
          <li>Experience with CSS3</li>
          <li>
            Proficient in JavaScript ES6+ e libraries/frameworks as React.
          </li>
          <li>Experience with versioning tools, as Git.</li>
        </ul>
        <h1 className="titleabout">Languages</h1>
        <p className="paragraphabout">
          Native Portuguese and intermediate English
        </p>
      </div>
      <div className="column2">
        <img src={Image} alt="" className="imgcolumn2"/>
        <ul className="medialist">
              <li className="socialmedialinkedin"><a href="https://www.linkedin.com/in/alex-oliveira-b81365241/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a></li>
              <li className="socialmediagmail"><a href="mailto:alexalmeida2101@gmail.com" target="_blank" rel="noopener noreferrer"><SiGmail/></a></li>
              <li className="socialmediagithub"><a href="http://github.com/alexoliveiraa" target="_blank" rel="noopener noreferrer"><FaGithub/></a> </li>


           </ul>
      </div>
    </main>
  );
}
