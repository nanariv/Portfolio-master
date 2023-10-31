import React from "react";
import Typewriter from "typewriter-effect";


var typeEffect = [
                  {role:"Frontend Developer", autoStart:true},
                  {role:"Full-stack Developer", autoStart:true},
                  {role:"Web Developer", autoStart:true},
                  {role:"Amateur Gamer", autoStart:true},
]
export default function LoopType() {
  return (
    <div>
      {
        typeEffect.map((phrase,key) => {
          return Type(key,phrase.role,phrase.autoStart);
        })
      }
    </div>
  );
}

function Type(key,role,autoStart) {
  return (
    <Typewriter
      key={key}
      options={{
        strings: [
          role
        ],
        autoStart: autoStart,
        loop: true,
        pauseFor: 5000
      }}
    />
  );
}

