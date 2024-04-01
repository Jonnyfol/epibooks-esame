import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { Button } from "react-bootstrap";

export default function SingleComment({ userComment, onDelete }) {
  const { theme } = useContext(ThemeContext);
  const listTheme = theme === "dark" ? "font-color-light" : "font-color-dark";

  const { comment, rate, _id } = userComment;

  return (
    <div className="single-comment d-flex align-items-center gap-3 py-2">
      <div className="d-flex align-items-center gap-3">
        <img
          src="https://e7.pngegg.com/pngimages/247/564/png-clipart-computer-icons-user-profile-user-avatar-blue-heroes.png"
          alt="immagineprofilo"
        />
        <div className="d-flex flex-column comment-span-style">
          <span className={listTheme}>{`${comment}`}</span>
          <span className={listTheme}>{`voto: ${rate}`}</span>
        </div>
      </div>
      {/* Aggiungiamo il pulsante "Cancella" */}
      <Button variant="danger" size="sm" onClick={() => onDelete(_id)}>
        Cancella
      </Button>
    </div>
  );
}
