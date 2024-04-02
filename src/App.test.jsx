import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { ThemeContext } from "./context/ThemeContextProvider";
import "@testing-library/jest-dom/extend-expect";

test("il componente WelcomeAlert viene montato correttamente", () => {
  render(
    <ThemeContext>
      <App />
    </ThemeContext>
  );
  const welcomeAlert = screen.getByText("Epibooks");
  expect(welcomeAlert).toBeInTheDocument();
});
