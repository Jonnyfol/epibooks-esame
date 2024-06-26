import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContextProvider";

export default function Footer() {
  //tema:
  const { theme } = useContext(ThemeContext);
  // tema del footer:
  const footerTheme =
    theme === "dark" ? "background-footer-dark" : "background-footer-light";

  return (
    <Container fluid className={footerTheme}>
      <Row className="pb-2">
        <Col
          sm={6}
          md={6}
          lg={6}
          className="d-flex gap-3 justify-content-end align-items-center p-3"
        >
          Attenzione
        </Col>
        <Col sm={6} md={6} lg={6} className="d-flex flex-column p-3">
          <span className="fw-bold">Diritti Riservati</span>
        </Col>
        <Col sm={12} md={12} lg={12} className="text-center">
          <span className="fw-lighter ">vedi la legge sulla privacy 123</span>
        </Col>
      </Row>
    </Container>
  );
}
