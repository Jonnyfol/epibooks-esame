import React from "react";
import SingleComment from "./SingleComment.jsx";

export default function CommentList({ commentToShow, onDeleteComment }) {
  // Gestiamo anche il caso in cui l'array non contenga ancora nessun commento
  return (
    <div className="comment-list-box">
      {commentToShow.length === 0 ? (
        <p className="no-comment-yet">Nessuna recensione presente</p>
      ) : (
        commentToShow.map((comment, index) => (
          <SingleComment
            key={index}
            userComment={comment}
            onDelete={() => onDeleteComment(comment._id)} // Passiamo la funzione onDeleteComment
          />
        ))
      )}
    </div>
  );
}
