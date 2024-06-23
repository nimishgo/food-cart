import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases : ", () => {
  it("Should load contact check for heading", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside the component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  it("should load input name inside the component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("msg");

    expect(inputName).toBeInTheDocument();
  });

  it("should load atleast 2 input boxes", () => {
    render(<Contact />);
    const inputBox = screen.getAllByRole("textbox");

    expect(inputBox.length).toBe(2);
    // expect(inputBox.length).not.toBe(2);
  });
});
