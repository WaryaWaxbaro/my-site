import React from "react";
import List from "./List";
import { contentText } from "../helper";

export default function Skills() {
  const { heading1, heading2, good, intern } = contentText["skills"];
  return (
    <div className="Skills">
      <h1 className="heading">skills</h1>
      <div>
        <h2 className="heading-sub">{heading1}</h2>
        <List list={good} />
        <h2 className="heading-sub">{heading2}</h2>
        <List list={intern} />
      </div>
    </div>
  );
}
