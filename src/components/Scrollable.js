import React from "react";
import Pages from './Pages';

function Scrollable({name}) {
  return <div className="Scrollable">
    <Pages name={name}/>
  </div>;
}

export default Scrollable;
