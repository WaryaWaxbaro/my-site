import React from "react";
import { contentText } from "../helper";

export default function About() {
  const { about } = contentText;
  return (
    <div className="About">
      <h1 className="heading">About me</h1>
      <p className="paragraph">{about}</p>
    </div>
  );
}
