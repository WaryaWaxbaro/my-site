import React from "react";
import profile from "../img/profile.png";

//const placeholder = 'https://via.placeholder.com/50x50.png';

export default function Info() {
  return (
    <div className="Info">
      <div className="Info__content">
        <div className="Info__content--img">
          <img className="Info__content--img-1" src={profile} alt="profile" />
        </div>
        <div className="Info__content--text">
          <h1 className="Info__content--text-heading-1">Shakur Hassan</h1>
          <h1 className="Info__content--text-heading-2">
            Full Stack Web Developer
          </h1>
        </div>
      </div>
    </div>
  );
}
