import React from "react";
import "./HomePage.css";
import HeroSection from "../../Constants/HeroSection/HeroSection";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faBuildingColumns,
  faUserNinja,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import posts from "./Samples";

const HomePage = () => {
  const calTimeDiff = (dateTime) => {
    const currTime = new Date();
    const difference = currTime.getTime() - dateTime.getTime();
    const minutes = Math.round(difference / (1000 * 60));
    return `${minutes} minutes ago`;
  };

  return (
    <div>
      <HeroSection />
      <div className="flex-row">
        <div className="sub-nav">
          <div className="sub-nav-item">
            <FontAwesomeIcon icon={faCompass} className="sub-nav-icon" />
            <Link to="/">
              <h5>Explore</h5>
            </Link>
          </div>
          <div className="sub-nav-item">
            <FontAwesomeIcon
              icon={faBuildingColumns}
              className="sub-nav-icon"
            />
            <Link to="/">
              <h5>My College</h5>
            </Link>
          </div>
        </div>

        <div className="view">
          <div className="top-title">
            <FontAwesomeIcon icon={faUserNinja} style={{ fontSize: "20px" }} />
            <h4>Ninja Post: Vanish & Share</h4>
          </div>
          <div className="post">
            <FontAwesomeIcon
              icon={faCirclePlus}
              style={{ margin: "0 10px", fontSize: "25px", color: "#3ABEF9" }}
            />
            <p>Start a post...</p>
          </div>
          <hr />
          <div className="wall">
            {posts.map((content) => {
              const { userName, collegeName, title, dateTime, profilePic, body } = content;
              return (
                <div className="wall-box">
                  <div className="wall-header">
                    <img
                      src={profilePic}
                      alt="Logo"
                      className="profile-picture"
                    />
                    <div className="wall-info">
                      <div className="wall-info-upper">
                        <h5>{title}</h5>
                        <p>. {calTimeDiff(dateTime)}</p>
                      </div>
                      <div className="wall-info-lower">
                        <p>{userName} .</p>
                        <p>{collegeName}</p>
                      </div>
                    </div>
                  </div>
                  <div className="wall-content">
                    <p>{body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
