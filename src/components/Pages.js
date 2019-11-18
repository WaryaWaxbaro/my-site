import React from "react";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default function Pages({ name, location, children }) {
  const currentPage =
    name === "about" ? (
      <About key={1} />
    ) : name === "skills" ? (
      <Skills key={4}/>
    ) : name === "project" ? (
      <Project key={2}/>
    ) : name === "contact" ? (
      <Contact key={3}/>
    ) : (
      <About />
    );
    //const page = location.pathname;
  return (
    <div className="Pages">
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
          
        {currentPage}
      </ReactCSSTransitionGroup>
    </div>
  );
}
