import React from "react";
import NavItems from "./NavItems";
import { useToggleState } from "../hooks/useToggleState";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const [active, toggle] = useToggleState(false);
  return (
    <nav className="Nav">
      <div className="Nav__content">
        <div className="Nav__icon">
          <span onClick={toggle}>{active ? <FaTimes /> : <FaBars />}</span>
        </div>
        <NavItems active={active} />
      </div>
    </nav>
  );
}
