import React from "react";
import web_img from "./images/business.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common name="Grow your business with" imgsrc={web_img} visit="/service" btname="Get Started" />
    </>
  );
};

export default Home;
