import React from "react";

import "./Loading.scss";

export default function Loading() {
  
  return (
    <>
      <div className="loading_container d-flex flex-column ">
        <img
          className="rotating-image"
          src="https://i.pinimg.com/originals/29/38/a3/2938a3b0772876c56082d65731c23692.gif"
        />
        <div className="spinner-container d-flex justify-content-between">
          <div className="spinner-grow text-light m-2"></div>
          <div className="spinner-grow text-light m-2"></div>
          <div className="spinner-grow text-light m-2"></div>
          <div className="spinner-grow text-light m-2"></div>
          <div className="spinner-grow text-light m-2"></div>
        </div>
      </div>
    </>
  );
}
