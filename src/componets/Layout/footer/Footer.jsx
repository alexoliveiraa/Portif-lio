import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import {SiGmail} from 'react-icons/si'

export default function Footer() {
  return (
    <footer>
      <div><h1 className="mynamefooter">alex oliveira</h1>
      <p>&copy;2023</p></div>
      
      <ul className="medialistfooter">
        <li className="socialmedialinkedinfooter"> <a href="http://www.linkedin.com/in/alex-oliveira-b81365241" target="_blank" rel="noopener noreferrer" ><FaLinkedin/></a></li>
        <li className="socialmediagmailfooter"> <a className="linkfooter" href="mailto:alexalmeida2101@gmail.com" target="_blank" rel="noopener noreferrer"><SiGmail/></a></li>
        <li className="socialmediagithubfooter"><a href="https://github.com/alexoliveiraa" target="_blank" rel="noopener noreferrer"><FaGithub/></a></li>
      </ul>
    </footer>
  );
}
