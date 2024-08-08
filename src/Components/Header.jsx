import React from "react";
import { ReactTyped } from "react-typed";

const Header = () => {
  return (
    <>
      <div className="header-wraper">
        <div className="main-info">
          <h1> Web Development and Websites Promotions</h1>
          <ReactTyped
            className="typed-text"
            strings={[
              "web Design",
              "Web Development",
              "FaceBook Ads SMM",
              "Google Ads",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <a href="#" className="btn-main-offer">
            Contact Me
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
