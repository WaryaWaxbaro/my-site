import React from "react";
import Info from "./Info";
import Scrollable from "./Scrollable";

export default function Container(props) {
  let { name } = props;
  return (
    <div className="Container">
      <Info />
      <Scrollable name={name} />
    </div>
  );
}
