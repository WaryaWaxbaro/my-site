import React from "react";

import { contentText } from "../helper";

export default function Project() {
  const { projects } = contentText;
  return (
    <div className="Project">
        <h1 className="heading">projects</h1>
      <div className="Project__item">
        {projects.map((item, i) => (
          <div className="Project__item--content" key={i}>
            <h1 className="Project__item--content-h1">{item.name}</h1>
            <p className="Project__item--content-p">{item.description}</p>
            <a className="Project__item--content-a" href={item.link} target="blank">
              View
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
