import React from "react";
import Common from "./Common";
import about_img from "./images/about.png";

const About = () => {
  return (
    <>
      <Common name="Know More About Us" imgsrc={about_img} visit="/contact" btname="Contact Now" />
    </>
  );
};

export default About;
