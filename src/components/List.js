import React from "react";

function List({ list }) {
  return (
    <ul className="list">
      {list.map((item, index) => (
        <li className="list__item" key={index}>
          <div className="list__item-icon">{item.icon}</div>
          <div className="list__item-skill">{item.name}</div>
        </li>
      ))}
    </ul>
  );
}

export default List;
