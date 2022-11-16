import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import App from "./App";

describe("App", () => {
    it("renders the NavBar", () => {
        // ARRANGE
        render(<App />);
        // ACT (Fill out an input for example)
        const linkElement = screen.getByText(/Shop/i);
        // EXPECT
        expect(linkElement).toBeInTheDocument();
    });
});
// ALWAYS TEST WITH getByRole first and then
// getByLabelText, getByPlaceholderText, getByText, getByDisplayValue, getByAltText, getByTitle, getByTestId
// WHY?
// Always test in a way a user is going to interact with the app.
// If you test with getByText, you are testing the text content of the element.
// If you change the text content of the element, the test will fail.
// If you test with getByRole, you are testing the role of the element.
// If you change the text content of the element, the test will still pass.
// Check Docs for more info
