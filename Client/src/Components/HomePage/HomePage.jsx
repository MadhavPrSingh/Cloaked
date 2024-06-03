import React from "react";
import "./HomePage.css";
import HeroSection from "../../Constants/HeroSection/HeroSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <div className="flex-row">
        <div className="menu"></div>
        <div className="post">
          <div className="flex-col">
            <div className="title">
              <span
                style={{
                  fontFamily: "Gruppo, sans-serif",
                  color: "#FF2E63",
                  fontSize: "2.5rem",
                  margin: "13px 4px 13px 0",
                }}
              >
                Cloaked
              </span>{" "}
              <h2>- Invisible. Secure. Protected.</h2>
            </div>
          </div>
          <br />
          <div className="make-post">
            <textarea name="" id=""></textarea>
          </div>
        </div>
        <div className="about"></div>
      </div>
    </div>
  );
};

export default HomePage;
