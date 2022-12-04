import React from "react";
import videoBg from "../assets/videoBg.mp4";

const Main = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h2>H e l l o - W o r l d</h2>
        <h4>Welcome..</h4>
      </div>
    </div>
  );
};

export default Main;
