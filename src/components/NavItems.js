import React from "react";
import { NavLink } from "react-router-dom";

const linkNames = ["about", "skills", "project", "contact"];

function NavItems({ active }) {
  let anim = active
    ? {
        transform: "translate(0, -50%)",
      }
    : {
        transform: "translate(100%, -50%)",
      };

  return (
    <ul className="Nav__list" style={anim}>
      {linkNames.map((name, index) => (
        <li className="Nav__list--item" key={index}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "Nav__list--item-active Nav__list--item-link"
                : "Nav__list--item-link"
            }
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
