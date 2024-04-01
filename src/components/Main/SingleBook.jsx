import React, { useState, useContext } from "react";
import { Col, Card } from "react-bootstrap";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { Link } from "react-router-dom";
import "./SingleBook.css";

export default function SingleBook({ book, onSelect }) {
  const { theme } = useContext(ThemeContext);

  const cardTheme = theme === "dark" ? "back-color-dark" : "back-color-light";

  const textTheme = theme === "dark" ? "text-light" : "text-dark";

  const [borderColor, setBorderColor] = useState("green");

  const { img, title, price, category, asin } = book;

  const handleCardClick = () => {
    setBorderColor(borderColor === "green" ? "red" : "green");
  };

  return (
    <>
      <Col sm={12} md={6} lg={3} className="g-2">
        <Card
          className={`custom-card cursor-hover ${cardTheme}`}
          style={{ border: `3px solid ${borderColor}` }}
          onClick={handleCardClick}
        >
          <Card.Img variant="top" src={img} className="img-fluid" />
          <Card.Body>
            <Card.Subtitle className="text-uppercase subtitle-style py-2">
              {category}
            </Card.Subtitle>
            <Card.Title
              className={`ellipsis size-title text-uppercase mb-4 ${textTheme}`}
            >
              {title}
            </Card.Title>
            <Card.Subtitle
              className={`mb-3 fw-lighter text-uppercase size-price ${textTheme}`}
            >{`${price} euro`}</Card.Subtitle>
            <Link to={`/details/:${asin}`} className="link-style">
              VEDI I DETTAGLI
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
