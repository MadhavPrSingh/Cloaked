// Import the useState hook and the initialPosts array
import React, { useState } from "react";
import "./HomePage.css";
import HeroSection from "../../Constants/HeroSection/HeroSection";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faBuildingColumns,
  faUserNinja,
  faCirclePlus,
  faHeart,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import initialPosts from "./Samples"; // Import the initialPosts array
import Comments from "../../Constants/Comments/Comments";

const HomePage = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [likeCounts, setLikeCounts] = useState(Array(initialPosts.length).fill(0));
  const [showCommentBox, setShowCommentBox] = useState(Array(initialPosts.length).fill(false));

  const calTimeDiff = (dateTime) => {
    const currTime = new Date();
    const difference = currTime.getTime() - dateTime.getTime();
    const minutes = Math.round(difference / (1000 * 60));
    return `${minutes} minutes ago`;
  };

  const handleLike = (index) => {
    const newLikeCounts = [...likeCounts];
    newLikeCounts[index]++;
    setLikeCounts(newLikeCounts);
  };

  const toggleCommentBox = (index) => {
    const newShowCommentBox = [...showCommentBox];
    newShowCommentBox[index] = !newShowCommentBox[index];
    setShowCommentBox(newShowCommentBox);
  };

  const updateComments = (postId, newComments) => {
    // Update only the comments of the post with the given postId
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, comments: newComments } : post
    ));
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
            {posts.map((content, index) => {
              const { id, userName, collegeName, title, dateTime, profilePic, body, comments } = content;
              return (
                <div key={`posts-${index}`} className="wall-box">
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
                  <div className="post-buttons">
                    <div>
                      <button className="action-button" onClick={() => handleLike(index)}>
                        <FontAwesomeIcon icon={faHeart} style={{color: 'red', margin:'3px'}}/>
                        {likeCounts[index]}
                      </button>
                    </div>
                    <div>
                      <button className="action-button" onClick={() => toggleCommentBox(index)}>
                        <FontAwesomeIcon icon={faComment} style={{color: '#068FFF', margin:'3px'}} />
                        {comments.length}
                      </button>
                    </div>
                  </div>
                  {/* Pass the comments of the current post and its postId to the Comments component */}
                  {showCommentBox[index] && <Comments comments={comments} postId={id} updateComments={updateComments} />}
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
