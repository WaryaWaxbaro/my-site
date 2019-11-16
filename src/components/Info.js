import React from "react";

export default function Info() {
  return (
    <div className="Info">
      <div className="Info__content">
          <div className="Info__content--img">
          <img
          className="Info__content--img-1"
          src="https://via.placeholder.com/50x50.png"
          alt="placeholder"
        />
          </div>
        <div className="Info__content--text">
          <h1 className="Info__content--text-heading-1">
            Abdishakur Hassan
          </h1>
          <h1 className="Info__content--text-heading-2">
            Web & mobile developer
          </h1>
        </div>
      </div>
    </div>
  );
}
