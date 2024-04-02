import { render, screen } from "@testing-library/react";
import WelcomeAlert from "./WelcomeAlert";
import "@testing-library/jest-dom/extend-expect"; // Importa il matcher

test("il bottone per chiudere l'alert è presente", () => {
  render(<WelcomeAlert />);
  const closeButton = screen.getByText("Close me");

  expect(closeButton).toBeInTheDocument();
});
