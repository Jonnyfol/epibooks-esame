import { render, screen } from "@testing-library/react";
import CommentArea from "./CommentArea";
import "@testing-library/jest-dom/extend-expect";

test("test sulla renderizzazione di CommentArea", () => {
  // asin del primo libro
  const asin = "0316438960";

  render(<CommentArea asin={asin} />);

  const commentAreaElement = screen.getByTestId("comment-area");
  expect(commentAreaElement).toBeInTheDocument();
});
