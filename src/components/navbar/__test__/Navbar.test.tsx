import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar component", () => {
    it("should render Navbar component correctly", () => {
        render(<Navbar />);
        const element = screen.getByRole("navigation");
        expect(element).toBeInTheDocument();
    });
});
