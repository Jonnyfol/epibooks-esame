import jsonData from "../data/fantasy.json";
import DetailForm from "../components/DetailForm/DetailForm";
import CommentArea from "../components/CommentArea/CommentArea.jsx";
import MyNav from "../components/MyNav/MyNav.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function BookDetails() {
  //gestione area commenti:
  const [view, setView] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handleClick = () => {
    setView(!view);
    setIsButtonClicked(!isButtonClicked);
  };

  console.log(isButtonClicked);

  let { bookASIN } = useParams();
  bookASIN = bookASIN.slice(1);

  const bookToShow = jsonData.find((book) => book.asin === bookASIN);

  return (
    <>
      <MyNav />
      <DetailForm
        book={bookToShow}
        clickBtn={isButtonClicked}
        clickToShowComment={handleClick}
      />
      {view && <CommentArea asin={bookASIN} />}
      <Footer />
    </>
  );
}
