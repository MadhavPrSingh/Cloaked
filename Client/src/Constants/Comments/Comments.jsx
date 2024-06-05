import React, { useState } from "react";
import "./Comments.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import initialPosts from "../../Components/HomePage/Samples"

const Comments = ({ comments: initialComments, postId, updateComments }) => {
  const [comments, setComments] = useState(initialComments);

  const onComment = (newComment) => {
    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    updateComments(postId, updatedComments);
  };

  const updateComment = (id, updatedNestedComments) => {
    const updatedComments = comments.map((comment) =>
      comment.id === id ? { ...comment, comments: updatedNestedComments } : comment
    );
    setComments(updatedComments);
    updateComments(postId, updatedComments);
  };

  return (
    <div className="comments-wall">
      <CommentInput postId={postId} onComment={onComment} />
      <div className="p-comment-d-block">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            updateComment={updateComment}
          />
        ))}
      </div>
    </div>
  );
};

// Ensure each CommentItem only displays its own nested comments
const CommentItem = ({ comment, updateComment }) => {
    const [isReplying, setIsReplying] = useState(false);
    const [nestedComments, setNestedComments] = useState(comment.comments);
  
    const onComment = (newComment) => {
      const updatedComments = [newComment, ...nestedComments];
      setNestedComments(updatedComments);
      updateComment(comment.id, updatedComments);
    };
  
    return (
      <div className="display-parent-comments">
        <div className="rep-box">
          <span>{comment.body}</span>
          {isReplying ? (
            <button className="btn-rep" onClick={() => setIsReplying(false)}>
              Cancel
            </button>
          ) : (
            <button className="btn-rep" onClick={() => setIsReplying(true)}>
              Reply
            </button>
          )}
        </div>
        {isReplying && <CommentInput postId={comment.id} onComment={onComment} />}
        <div className="replies">
          {/* Ensure nested comments are correctly rendered */}
          {nestedComments.map((nestedComment, index) => (
            <CommentItem
              key={index}
              comment={nestedComment}
              updateComment={updateComment}
            />
          ))}
        </div>
      </div>
    );
  };
  

const CommentInput = ({ onComment, postId }) => {
  const [commentBody, setCommentBody] = useState("");

  const handleSubmit = () => {
    if (commentBody.trim() !== "") {
      onComment({ id: Date.now(), body: commentBody, comments: [] });
      setCommentBody("");
    }
  };

  return (
    <div className="parent-wall">
      <input
        value={commentBody}
        onChange={(event) => setCommentBody(event.target.value)}
        placeholder="Write a comment..."
        type="text"
        className="parent-comment"
      />
      <button onClick={handleSubmit} className="post-comment">
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </div>
  );
};

CommentInput.propTypes = {
  onComment: PropTypes.func.isRequired,
  postId: PropTypes.number.isRequired,
};

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  updateComment: PropTypes.func.isRequired,
};

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  postId: PropTypes.number.isRequired,
  updateComments: PropTypes.func.isRequired,
};

export default Comments;
