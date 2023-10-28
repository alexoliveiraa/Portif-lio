import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menusmall, setMenusmall] = useState(true);

  const menuhamburguer = () => {
    setMenusmall(!menusmall);

    
    if (menusmall === true) {
      document.querySelector(".hamburguer").classList.add("activesmall");
      document.querySelector(".list").classList.add("activesmall");
    } else {
      document.querySelector(".hamburguer").classList.remove("activesmall");
      document.querySelector(".list").classList.remove("activesmall");
    }
  };

  const close = () => {
    setMenusmall(false)
    if (menusmall === false) {
      document.querySelector(".hamburguer").classList.remove("activesmall")
      document.querySelector(".list").classList.remove("activesmall")
    }
    setMenusmall(!menusmall)
  }
 
  const backtop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="header">
        <div className="myname" onClick={ () => backtop()}>alex oliveira</div>
        <nav className="nav">
          <ul className="list" onMouseLeave={() => close()}>
            <li>
              <NavLink
                to="/"
                onClick={() => backtop()}
                
                id="linkhome"
                className="listitem"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Projects"
                onClick={() => {
                  backtop();
                }}
                id="linkprojects"
                className="listitem"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => {
                  backtop();
                }}
                id="linkabout"
                className="listitem"
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="hamburguer" onClick={() => menuhamburguer()} >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </header>
    </>
  );
}
