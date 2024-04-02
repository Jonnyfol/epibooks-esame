import { render, screen } from "@testing-library/react";
import AllBooks from "./AllBooks";
import jsonData from "../../data/fantasy.json";
import { ThemeContextProvider } from "../../context/ThemeContextProvider";
import jsonData from "./data/fantasy.json";

test("vengono renderizzate le Bootstrap card per ogni libro nel file JSON", () => {
  render(
    <ThemeContextProvider>
      <AllBooks results={jsonDataData} />
    </ThemeContextProvider>
  );
  const cards = screen.getAllByTestId("bootstrap-card");
  expect(cards).toHaveLength(jsonData.length);
});
