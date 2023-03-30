import React from "react";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <>
      <footer className="w-100 bg-light text-center">
        <p className="text-center my-1">©️ {year} Kshitij Kumar. All Rights Reserved | Terms and Conditions</p>
      </footer>
    </>
  );
};

export default Footer;
