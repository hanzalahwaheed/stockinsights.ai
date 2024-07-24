import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "@/components/navbar";

describe("Navbar component", () => {
  test("renders Navbar component", () => {
    render(<Navbar />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });

  test("expands navbar on hover", () => {
    render(<Navbar />);
    const navbar = screen.getByRole("navigation");
    // Initially, navbar should be collapsed
    expect(navbar).toHaveClass("w-[65px]");
    // Simulate mouse enter
    fireEvent.mouseEnter(navbar);
    // Navbar should expand
    expect(navbar).toHaveClass("w-[256px]");
  });

  test("collapses navbar on mouse leave", () => {
    render(<Navbar />);
    const navbar = screen.getByRole("navigation");
    // Simulate mouse enter
    fireEvent.mouseEnter(navbar);
    // Simulate mouse leave
    fireEvent.mouseLeave(navbar);
    // Navbar should collapse
    expect(navbar).toHaveClass("w-[65px]");
  });

  test("displays buttons with content when expanded", () => {
    render(<Navbar />);
    const navbar = screen.getByRole("navigation");
    // Simulate mouse enter
    fireEvent.mouseEnter(navbar);
    // Check if buttons with content are rendered
    const aiAssistButton = screen.getByText("AI Assist");
    const searchFilingsButton = screen.getByText("Search Filings");
    expect(aiAssistButton).toBeInTheDocument();
    expect(searchFilingsButton).toBeInTheDocument();
  });

  test("displays only icons when collapsed", () => {
    render(<Navbar />);
    const navbar = screen.getByRole("navigation");
    // Initially, only icons should be visible
    const buttons = screen.queryAllByRole("img", { name: /buttons/i });
    expect(buttons.length).toBe(5);
    // Check that button content is not visible
    const aiAssistButton = screen.queryByText("AI Assist");
    const searchFilingsButton = screen.queryByText("Search Filings");
    expect(aiAssistButton).not.toBeInTheDocument();
    expect(searchFilingsButton).not.toBeInTheDocument();
  });
});
