import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import MyOption from "./my-option";

const mockClick = jest.fn();

describe("My Options test", () => {
    it("Render Option", () => {
        const ctr = render(<MyOption handleOptionClick={mockClick} value={1} label="uno"/>);
        const optionContainer = ctr.getByTestId("option-container");
        expect(optionContainer).toBeInTheDocument();
    })
})