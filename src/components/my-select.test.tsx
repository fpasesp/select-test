import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MySelect from "./my-select";

const mockOptions: Array<{ value: string; label: string }> = [
  { value: "Aguacate", label: "Aguacate" },
  { value: "Mango", label: "Mango" },
  { value: "Papaya", label: "Papaya" },
  { value: "Maracuyá", label: "Maracuyá" },
];

const mockOnChange = jest.fn();

describe("My Select component test", () => {
  it("Render Selector container", () => {
    const ctr = render(<MySelect options={mockOptions} value="" onChange={mockOnChange} />);
    const selectContainer = ctr.getByTestId("select-container");
    expect(selectContainer).toBeInTheDocument();
  });

  it("Display the selected option label after selecting an option", async () => {
   const ctr = render(<MySelect options={mockOptions} value="Mango" onChange={mockOnChange} />);
    const selectDisplay = ctr.getByText("Mango");
    expect(selectDisplay).toBeInTheDocument();
  });

  it("should render the correct number of options", async () => {
    const mockOnChange = jest.fn();
    const ctr = render(<MySelect options={mockOptions} value="" onChange={mockOnChange} />);
    
    // Open the select dropdown
    const selectDisplay = ctr.getByTestId("select-option");
    userEvent.click(selectDisplay);

    await screen.findAllByTestId("option-container");

    // Check if the correct number of options are displayed
    const optionElements = screen.getAllByTestId("option-container");
    expect(optionElements.length).toBe(mockOptions.length);
  });
});
