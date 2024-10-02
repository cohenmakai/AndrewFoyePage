import { blob } from "node:stream/consumers";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export const Content = () => {
  return (
    <div className="content">
      <div className="content-header" style={{ marginTop: 80 }}>
        <img src="./start_logo.svg" className="content-header-logo" />
        <p className="content-header-letter">Welcome to my page</p>
        <div className="content-header">
          <img
            className="rounded-full w-96 h-96"
            src="./myphoto.png"
            alt="myphoto"
            style={{
              padding: 40,
              margin: 100,
              borderRadius: 200,
            }}
          />
        </div>
      </div>
      <div className="content-source" style={{ padding: 20 }}>
        <h1>Andrew J Foye</h1>
        <img src="./location.png" className="content-header-logo" />
        <a style={{ padding: 20 }}>Austin, Texas </a>
        <img src="./phone.png" className="content-header-logo" />
        <a style={{ padding: 20 }}>+1 434 738 1971</a>
        <img src="./gmail.png" className="content-header-logo" />
        <a style={{ padding: 20 }}>andrewfoye4@gmail.com</a>
        <img src="./linkedin.svg" className="content-header-logo" />
        <a
          href="https://https://www.linkedin.com/in/andrew-foye-a43bab31b/"
          style={{ padding: 20 }}
        >
          <u>LinkedIn</u>
        </a>
      </div>
    </div>
  );
};
