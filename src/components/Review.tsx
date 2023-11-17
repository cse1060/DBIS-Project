import React from "react";
import "../css/CommentCard.css"

const CommentCard = (props: any) => {
  return (
    <div className="comment-card">
      <div className="user-avatar"></div>
      <div className="comment-content">
        <p className="comment-text">{props.comment}</p>
      </div>
      <div>
        <img src={props.img} className="inline w-5 ml-2 mr-10" />
        <p className="user-name inline text-center">{props.username}</p>
      </div>
    </div>
  );
};

export default CommentCard;
