import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Frontend Developer",
          "Full Stack Developer",
          "Web Developer",
          "Gamer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        pauseFor: 1000,
      }}
    />
  );
}

export default Type;
