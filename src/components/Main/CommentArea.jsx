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
        setComments(data); // Imposta lo stato dei commenti con i dati ottenuti dalla richiesta
      } catch (error) {
        console.log("Errore durante la richiesta dei commenti:", error);
      }
    }

    if (selectedBook) {
      getComment();
    }
  }, [selectedBook]);

  return (
    <>
      <CommentList comments={comments} />
      <AddComment />
    </>
  );
}
