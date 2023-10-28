import React from "react";
import Boxprojects from "./boxproject/Boxprojects";
import Imagetodo from "./img/todo.png";
import Imagecalculator from "./img/imagemcalculator.png";
import Imagestopwacth from "../componets/img/imagestopwacth.png";
import "../pages/projects/Projects.css";

export default function Homepojects() {
  return (
    <main className="mainhomeprojects">
      <div id="title">
        <h1 className="titleprojects">my Projects</h1>
      </div>

      <Boxprojects
        title="To-Do List"
        linkgit="https://github.com/alexoliveiraa/todo-list"
        paragraph="This is a project made with ReactJs and the MaterialUI library. A task list where you can add, edit, mark as done and delete."
        image={Imagetodo}
        linkproject="https://alexoliveiraa.github.io/todo-list"
      />
      <Boxprojects
        title="Stopwacth"
        linkgit="https://github.com/alexoliveiraa/stopwacth-with-javascript"
        paragraph="This is a timer made with HTML, CSS and Javascript."
        image={Imagestopwacth}
        linkproject="https://alexoliveiraa.github.io/stopwacth-with-javascript"
      />
      <Boxprojects
        title="Calculator"
        linkgit="https://github.com/alexoliveiraa/calculator-react"
        paragraph="This is a project made with ReactJs and the MaterialUI library. A calculator where you can do mathematical operations."
        image={Imagecalculator}
        linkproject="https://alexoliveiraa.github.io/calculator-react"
      />
    </main>
  );
}
