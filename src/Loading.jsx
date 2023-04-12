import React from "react";
import styled from "styled-components";

const Loader = styled.div`
  font-size: 10px;
  width: 15em;
  height: 15em;
  position: relative;
  margin: 7em auto 7em auto;

  .rotate {
    width: 100%;
    height: 100%;
    border-right: 0.8em dotted #255;
    border-top: 0.8em double #255;
    border-radius: 50%;
    animation: loading 1.75s linear infinite;
    position: absolute;
  }

  .load {
    top: 50%;
    left: 50%;
    font-size: 1.5em;
    transform: translate(-50%, -50%);
    position: absolute;
    color: #333333;
    margin: 0 0;
  }

  @keyframes loading {
    100% {
      transform: rotate(-360deg);
    }
  }
`;

const Loading = () => {
  return (
    <>
      <Loader>
        <div className="rotate"></div>
        <h1 className="load">Loading...</h1>
      </Loader>
    </>
  );
};

export default Loading;
