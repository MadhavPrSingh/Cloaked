<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
import { useState } from "react";
>>>>>>> origin/main
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
import initialPosts from "./Samples";
<<<<<<< HEAD
import Comments from "../../Constants/Comments/Comments";
import Navbar from "../../Constants/Navbar/Navbar";

const HomePage = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [visibleComments, setVisibleComments] = useState(
    Array(initialPosts.length).fill(2)
  );
  const [likeCounts, setLikeCounts] = useState(Array(initialPosts.length).fill(0));
  const [showCommentBox, setShowCommentBox] = useState(Array(initialPosts.length).fill(false));
=======

const HomePage = () => {

  const [posts, setPosts] = useState(initialPosts);  
  const [visibleComments, setVisibleComments] = useState(Array(initialPosts.length).fill(2));
>>>>>>> origin/main

  const calTimeDiff = (dateTime) => {
    const currTime = new Date();
    const difference = currTime.getTime() - dateTime.getTime();
    const minutes = Math.round(difference / (1000 * 60));
    return `${minutes} minutes ago`;
  };
<<<<<<< HEAD

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

=======
  
  const handleLike = (index) => {
    const newPosts = [...posts];
    newPosts[index].Likes += 1;
    setPosts(newPosts);
  };

  const handleAddComment = (index, comment) => {
    const newPosts = [...posts];
    newPosts[index].comments.push(comment);
    setPosts(newPosts);
  };

  const toggleCommentVisiblity = (index) => {
     const newVisibleComments = [...visibleComments];
     newVisibleComments[index] = (newVisibleComments[index] === 2) ? posts[index].comments.length: 2;
     setVisibleComments(newVisibleComments);  
  }



>>>>>>> origin/main
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
<<<<<<< HEAD
              const { userName, collegeName, title, dateTime, profilePic, body } = content;
=======
              const { userName, collegeName, title, dateTime, profilePic, body, Likes, comments } = content;
>>>>>>> origin/main
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
<<<<<<< HEAD
                  <div className="like-comment-buttons">
                    <button onClick={() => handleLike(index)}>
                      <FontAwesomeIcon icon={faHeart} style={{color: 'red'}}/>
                      {likeCounts[index]}
                    </button>
                    <button onClick={() => toggleCommentBox(index)}>
                      <FontAwesomeIcon icon={faComment} style={{color: 'blue'}} />
                    </button>
                  </div>
                  {showCommentBox[index] && <Comments />}
                </div>
              );
            })}

=======
                  <div className="wall-actions">
                    <button onClick={() => handleLike(index)}>
                        <FontAwesomeIcon icon = {faHeart} style={{color: 'red', marginRight:'4px'}}/> {Likes}
                    </button>
                    <button onClick={() => document.getElementById(`comment-input-${index}`).focus()}>
                        <FontAwesomeIcon icon = {faComment} style={{color: 'black', marginRight:'4px'}}/> {comments.length}
                    </button>
                  </div>
                  <div className="wall-comments">
                    <input 
                        type="text"
                        id = {`comment-input-${index}`}
                        placeholder="Add a comment..." 
                        onKeyDown={(e) => {
                            if( e.key === 'Enter' && e.target.value.trim() !== '') {
                                handleAddComment(index, e.target.value);
                                e.target.value = '';
                            }
                        }}
                    />
                    {comments.slice(0, visibleComments[index]).map((comment, i) =>(
                        <p key={i}>
                            <strong>{comment.userName}:</strong> {comment.text}
                        </p>
                    ))}
                    {comments.length > 2 && (
                        <button className="view-all-comments" onClick={() => toggleCommentVisiblity(index)}>
                            {visibleComments[index] === 2
                                ? `View all ${comments.length} comments`
                                : "Hide comments"}
                        </button>
                    )}
                  </div>
                </div>
              );
            })}
>>>>>>> origin/main
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
