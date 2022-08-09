import React from "react";

export default function Header() {
  return (
    <div className="my-3 mx-4">
      <div className="row">
        <div className="logo col-3 d-flex justify-content-start">
          <img
            className="img-fluid"
            src="https://i.imgur.com/lC22izJ.png"
            alt=""
          />
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center">
          <span className="px-3">Home</span>
          <span className="px-3">Contact</span>
          <span className="px-3">News</span>
          <span className="px-3">Application</span>
        </div>
        <div className="buttons col-3 d-flex align-items-center justify-content-end">
          <button className="btn btn-primary">Register</button>
          <button className="btn btn-outline-dark ml-3">Log In</button>
        </div>
      </div>
    </div>
  );
}
