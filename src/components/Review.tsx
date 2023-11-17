import React from "react";
import "../css/CommentCard.css"

const CommentCard = (props) => {
  return (
    <div className="comment-card">
      <div className="user-avatar"></div>
      <div className="comment-content">
        <p className="comment-text">{props.comment}</p>
      </div>
      <div>
        <p className="user-name">{props.username}</p>
      </div>
    </div>
  );
};

export default CommentCard;
