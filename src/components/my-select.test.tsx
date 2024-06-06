import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import MySelect from "./my-select";

const mockOnChange = jest.fn();

describe("My Select component test", () => {
  it("Render Selector container", () => {
    const ctr = render(<MySelect onChange={mockOnChange} />);
    const selectContainer = ctr.getByTestId("select-container");
    expect(selectContainer).toBeInTheDocument();
  });
});
