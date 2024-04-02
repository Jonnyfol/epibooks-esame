import "./DetailForm.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContextProvider";
import CommentArea from "../CommentArea/CommentArea";

export default function DetailForm({
  book,
  clickBtn,
  clickToShowComment,
  bookASIN,
}) {
  const { title, img, price, category } = book;

  const { theme } = useContext(ThemeContext);
  const [showComments, setShowComments] = useState(true);

  const themeText = theme === "dark" ? "text-light" : "text-dark";

  const buttonTheme = theme === "dark" ? "show-more-light" : "show-more-dark";

  useEffect(() => {
    // Esegui clickToShowComment quando il componente viene montato per la prima volta
    clickToShowComment();
  }, []);

  return (
    <Container className="my-2 py-4">
      <Row className="g-4">
        <Col
          xs={12}
          md={9}
          lg={7}
          className="d-flex flex-column justify-content-center"
        >
          <div className="d-flex flex-column align-items-start gap-3">
            <h2 className={`text-uppercase ${themeText}`}>{title}</h2>
          </div>
          <span className="text-uppercase subtitle-style">{category}</span>
          <p className={`${themeText}`}>Una bellissima descrizione...</p>
          <span
            className={`mb-2 fw-lighter text-uppercase ${themeText}`}
          >{`${price} euro`}</span>
          {/* <div className="show-more-box">
            <button
              className={`${buttonTheme}`}
              onClick={() => setShowComments(!showComments)}
            >
              {showComments ? "Nascondi i commenti" : "Vedi i commenti"}
            </button>
          </div> */}
          {showComments && <CommentArea asin={bookASIN} />}
        </Col>{" "}
        <Col
          xs={12}
          md={3}
          lg={5}
          className="d-flex align-items-center justify-content-center"
        >
          <img className="image-details" src={img} alt="copertina_libro" />
        </Col>
      </Row>
    </Container>
  );
}
