import React from "react";
import {NavLink} from 'react-router-dom';

const linkNames = ["about", "skills", "project", "contact"];

function NavItems({active}) {
  let anim = active ? {
    transform: 'translateX(0)'
  } : {
    transform: 'translateX(100%)'
  };

  return (
    <ul className="Nav__list" style={anim}>
      {linkNames.map((name, index) => (
        <li className="Nav__list--item" key={index}>
          <NavLink
            activeClassName="Nav__list--item-active"
            className="Nav__list--item-link"
            to={`/${name}`}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavItems;
