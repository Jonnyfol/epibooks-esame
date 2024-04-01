import "./DetailForm.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContextProvider";

export default function DetailForm({ book, clickBtn, clickToShowComment }) {
  const { title, img, price, category } = book;

  const { theme } = useContext(ThemeContext);

  const themeText = theme === "dark" ? "text-light" : "text-dark";

  const buttonTheme = theme === "dark" ? "show-more-light" : "show-more-dark";

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
            className={`mb-3 fw-lighter text-uppercase ${themeText}`}
          >{`${price} euro`}</span>
          <div className="show-more-box">
            <button className={`${buttonTheme}`} onClick={clickToShowComment}>
              {clickBtn ? "Nascondi i commenti" : "Vedi i commenti"}
            </button>
          </div>
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
