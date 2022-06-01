import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p> This code is written by Lian Hong, the best Software Developer alive.
    </p>
    <img src={image} alt="I made this"></img>

    </div>;
}

export default About;
