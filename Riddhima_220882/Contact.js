Contact.js:

import React from 'react';

const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="subtitle">Contact Me</h1>
            <p><i className="fas fa-paper-plane"></i> dehariyariddhi01@gmail.com</p>
            <p><i className="fas fa-phone"></i> 8103451097</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=100089047937586&mibextid=ZbWKwL"><i className="fab fa-facebook"></i></a>
              <a href="https://www.facebook.com/profile.php?id=100089047937586&mibextid=ZbWKwL"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com/_01riddhima?igshid=OTk0YzhjMDVlZA=="><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/riddhima-dehariya-87a2a3250"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          <div className="contact-right">
            <form>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your email" required />
              <textarea name="Message" placeholder="Your Message" rows="6" />
              <button type="submit" className="btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
