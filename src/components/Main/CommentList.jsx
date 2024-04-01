import "./CommentList.css";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContextProvider";

export default function CommentList({ comments }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <h3 className={theme === "dark" ? "text-light" : "text-dark"}>
        Comments
      </h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
}
