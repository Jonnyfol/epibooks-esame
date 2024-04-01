import { ThemeContext } from "../context/ThemeContextProvider";
import { useContext } from "react";
import { Container } from "react-bootstrap";

export default function NotFound() {
  const { theme } = useContext(ThemeContext);

  const notFoundTheme =
    theme === "dark" ? "text-light bg-dark" : "text-dark bg-light";

  return (
    <Container className={`container-not-found ${notFoundTheme}`}>
      <h2>Pagina non trovata!</h2>
    </Container>
  );
}
