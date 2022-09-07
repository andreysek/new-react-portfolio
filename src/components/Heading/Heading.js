import React from "react";
import "./heading.css";
import { TypeAnimation } from "react-type-animation";

const Heading = ({ text, style }) => {
  return (
    <div className="heading-container" style={style}>
      <h2 className="heading">

        {<TypeAnimation
          cursor={false}
          sequence={[
            'Get in Touch',
            2000,
           

          ]}
          
          repeat={Infinity}
          style={{ fontSize: '1em', color: 'rgb(34, 32, 32)', letterSpacing: '-2px', fontFamily: 'Rubik Maze', fontWeight: 'lighter' }}

        />}

      </h2>
      <span></span>
    </div>
  );
};

export default Heading;