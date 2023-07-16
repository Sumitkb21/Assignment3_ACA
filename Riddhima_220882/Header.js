Header.js:
import React from 'react';

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <nav>
          <img src={require('./Images/logo.jpg')} alt="logo" width="150" height="100" />
          <ul>
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#Services">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header-text">
          <p> WEB DEVELOPER</p>
          <h1> Hey!!!! I am <span>Riddhima Dehariya</span>, <br />student of IITK.</h1>
        </div>
      </div>
      <img src={require('./iitk.png')} className="floatRight" height="400" width="800" alt="iitk" />
    </div>
  );
}

export default Header;
