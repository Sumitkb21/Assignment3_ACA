About.js:

import React from 'react';

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={require('./IMG_9785.jpg')} width="700" height="600" alt="about-img" />
          </div>
          <div className="about-col-2">
            <h1 className="subtitle">About Me</h1>
            <p>
              Hi, I'm Riddhima, a first-year engineering student with a passion for technology and problem-solving. I am currently pursuing my degree in Material Science and Engineering at IIT KANPUR.
            </p>
            {/* Rest of the content */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
