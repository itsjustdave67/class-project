import { render, screen, fireEvent } from "@testing-library/react";
import RolesForm from "../rolesForm";

describe("Roles", () => {
  it("should be render the inputElement", () => {
    render(<RolesForm />);
    const inputElement = screen.getByTitle("name");
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type into the input element", () => {
    render(<RolesForm />);
    const inputElement = screen.getByPlaceholderText("add role");
    expect(inputElement).toBeInTheDocument();
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, {
      target: { value: "supervisor" },
    });
  });

  it("should be able to submit Role", () => {
    render(<RolesForm />);
    const inputElement = screen.getByPlaceholderText("add role");
    expect(inputElement).toBeInTheDocument();
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, {
      target: { value: "supervisor" },
    });
    const formElement = screen.getByTitle("form");
    fireEvent.submit(formElement);
  });
});
