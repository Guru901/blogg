import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div id="footer" className="absolute-center">
      <div className="links-top absolute-center">
        <div className="links-right">
          <h1>
            <a href="#">Get Started </a>
          </h1>
          <h2>Collaborate with us</h2>
        </div>
        <div className="links-left absolute-center">
          <div></div> {/* links has to be added here */}
        </div>
      </div>
      <div className="links-mid absolute-center">
        <div className="main-logo">
          <div className="logo-img">
            <img src="/images/home/footer-logo.png" alt="" />
          </div>
          <h1>
            Youthful <br />
            Whispers
          </h1>
        </div>
        <div className="newsletter">
          <h1>Subscribe to our Newsletter</h1>
          <div className="credentials absolute-center">
            <input
              type="text"
              placeholder="Enter your E-mail here"
              className="email"
              name="email"
            />
            <input type="submit" value="Submit" className="submit" />
          </div>
          <h2>
            Read our <a href="#">Privacy and Terms</a> carefully
          </h2>
        </div>
      </div>
      <div className="links-bottom absolute-center">
        <div className="bottom-left">
          <h1>@2024 All Rights Reserved</h1>
        </div>
        <div className="bottom-right absolute-center">
          <a href="#">
            <i className="ri-instagram-line link-logos"></i>
          </a>
          <a href="#">
            <i className="ri-twitter-x-line link-logos"></i>
          </a>
          <a href="#">
            <i className="ri-linkedin-fill link-logos"></i>
          </a>
          <a href="#">
            <i className="ri-youtube-line link-logos"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
