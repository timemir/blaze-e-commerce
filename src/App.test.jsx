import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom/";
import { describe, it } from "vitest";

import { App, WrappedApp } from "./App";

describe("App", () => {
    it("renders the NavBar", () => {
        // ARRANGE
        render(<WrappedApp />);
        // ACT (Fill out an input for example)
        const linkElement = screen.getByText(/Shop/i);
        // EXPECT
        expect(linkElement).toBeInTheDocument();
    });
    it("renders NotFound page if the path is invalid", () => {
        render(
            <MemoryRouter initialEntries={["/invalid-path"]}>
                <App />
            </MemoryRouter>
        );
        const linkElement = screen.getByRole("heading", {
            level: 1,
        });
        expect(linkElement).toHaveTextContent("Not Found");
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
