import React from "react";
import "./Boxprojects.css";


export default function Boxprojects({ title, linkgit, paragraph,image,linkproject }) {
  return (
    <>
      <div className="projects">
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="bodyproject">
          <p>{paragraph}</p>
          <img src={image} alt="" />
        </div>

        <div className="ul">
          <ul className="ulprojects">
            <li className="liprojects">
              <a href={linkproject} target="_blank" rel="noopener noreferrer">
                Open Project
              </a>{" "}
            </li>
            <li className="liprojects">
              <a href={linkgit} target="_blank" rel="noopener noreferrer">
                Code on Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
