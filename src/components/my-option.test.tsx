import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import MyOption from "./my-option";

const mockOption: { value: string; label: string } = {
    value: "Aguacate",
    label: "Aguacate"
}

const mockClick = jest.fn();

describe("My Options test", () => {
    it("Render Option", () => {
        const ctr = render(<MyOption option={mockOption} onClick={mockClick}/>);
        const optionContainer = ctr.getByTestId("option-container");
        expect(optionContainer).toBeInTheDocument();
    })
})