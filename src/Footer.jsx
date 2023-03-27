import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <p className="mb-0 text-light"> copyright ©️ {year}</p>
      </footer>
    </>
  );
}
