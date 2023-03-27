import React from "react";
import Logo from "./images/Logo.png";

export default function Header() {
  return (
    <>
      <div className="container-fluid py-3 px-5 bg-warning d-flex align-items-center header">
        <img src={Logo} alt="logo" />
        <h3 className="ms-4">Developer Keep</h3>
      </div>
    </>
  );
}
