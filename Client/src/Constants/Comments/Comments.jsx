import React, { useState } from "react";
import './Comments.css'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const dummyComments = [
    {
        id: 1,
        body: 'This is comment 1',
        comments: []
    },
    {
        id: 2,
        body: 'This is comment 2',
        comments: []
    },
    {
        id: 3,
        body: 'This is comment 3',
        comments: []
    }
]

export default function Comments() {
    const [comments, setComments] = useState(dummyComments);

    const onComment = (newComment) => {
        setComments([newComment, ...comments]);
    }

    const updateComment = (id, updatedComments) => {
        setComments(comments.map(comment =>
            comment.id === id ? { ...comment, comments: updatedComments } : comment
        ));
    }

    return (
        <div className="comments-wall">
            <CommentInput onComment={onComment} />
            <div className="p-comment-d-block">
                {comments.map((comment) => (
                    <CommentItem key={comment.id} comment={comment} updateComment={updateComment} />
                ))}
            </div>
        </div>
    );
}

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
            <span>{comment.body}</span>
            {isReplying ? (
                <button
                    className="post-comment"
                    onClick={() => setIsReplying(false)}
                >
                    Cancel
                </button>
            ) : (
                <button
                    className="post-comment"
                    onClick={() => setIsReplying(true)}
                >
                    Reply
                </button>
            )}
            {isReplying && <CommentInput onComment={onComment} />}
            <div className="replies">
                {nestedComments.map((nestedComment, index) => (
                    <CommentItem key={index} comment={nestedComment} updateComment={updateComment} />
                ))}
            </div>
        </div>
    );
};

const CommentInput = ({ onComment }) => {
    const [commentBody, setCommentBody] = useState('');

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
                placeholder='Write a comment...'
                type="text"
                className="parent-comment"
            />
            <button
                onClick={handleSubmit}
                className="post-comment"
            >
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </div>
    );
};

CommentInput.propTypes = {
    onComment: PropTypes.func.isRequired
};
