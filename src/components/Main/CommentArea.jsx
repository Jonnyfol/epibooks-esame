import "./CommentArea.css";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { useState, useEffect } from "react";

export default function CommentArea({ selectedBook }) {
  console.log(selectedBook);

  // fetch commenti da renderizzare in commentList:
  const APIget = `https://striveschool-api.herokuapp.com/api/books/${selectedBook}/comments/`;

  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getComment() {
      try {
        const response = await fetch(APIget);
        const data = await response.json();
        // setComments(data);
        console.log(data);
      } catch (error) {
        console.log("Errore durante la richiesta dei commenti:", error);
      }
    }

    //controllo per evitare che la fetch venga eseguita senza dato asin:
    if (selectedBook) {
      getComment();
    }
  }, [selectedBook]);

  return (
    <>
      <CommentList />
      <AddComment />
    </>
  );
}
