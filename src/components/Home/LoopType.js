import React from "react";
import Typewriter from "typewriter-effect";


var typeEffect = [
                  {role:"Frontend Developer", autoStart:true},
                  {role:"Full-stack Developer", autoStart:true},
                  {role:"Web Developer", autoStart:true},
                  {role:"Amateur Gamer", autoStart:true},
]
var typeEffect2 = [
  {role:"I work with forward-thinking people to design and build interactive, accessible websites and products. From working on projects for likes of IBM, Tavant Technologies, Ashtel LLC, to working with startups in Academia, I've devoted more than a  decade to building tiny pockets in the web.", autoStart:true}
]
export default function LoopType() {
  return (
    <div>
      {
        typeEffect2.map((phrase,key) => {
          return Type(key,phrase.role,phrase.autoStart);
        })
      }
    </div>
  );
}
// export default function LoopType() {
//   return (
//     <div>
//       {
//         typeEffect.map((phrase,key) => {
//           return Type(key,phrase.role,phrase.autoStart);
//         })
//       }
//     </div>
//   );
// }

function Type(key,role,autoStart) {
  return (
    <Typewriter
      key={key}
      options={{
        strings: [
          role
        ],
        autoStart: autoStart,
        loop: false,
        pauseFor: 500000
      }}
    />
  );
}

