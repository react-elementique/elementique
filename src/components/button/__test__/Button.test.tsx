import "@testing-library/jest-dom"; // Import this in order to get rid of the error with the property toBeInTheDocument

import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button component", () => {
    it("Button should render correctly", () => {
        render(<Button />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
});
