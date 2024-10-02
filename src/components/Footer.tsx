import React from "react";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-header">
        <div style={{ display: "inline-block" }}>
          <p style={{ fontSize: "24px" }}>Education</p>
          <a
            href="https://www.clarkssummitu.edu/"
            style={{ fontSize: "28px" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>Clarks Summit University</u>
          </a>
          <br />
          <a style={{ fontSize: "20px", margin: "20px" }}>
            08/2011 - 05/2015, Bachelor's Degree in computer science
          </a>
        </div>
        <div className="footer-header-link">
          <img src="./Clarks.png" className="footer-header-logo" />
          <a>Clarks Summit University</a>
        </div>
      </div>
    </div>
  );
};
