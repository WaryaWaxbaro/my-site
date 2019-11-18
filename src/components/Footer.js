import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <p className="Footer__text">
        <span className="Footer__text--copyright">&copy;</span> {new Date().getFullYear()}. all rights reserved
      </p>
    </div>
  );
}
