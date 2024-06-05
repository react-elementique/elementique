import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Input from "../Input";

describe("Input component", () => {
    it("should render Input component correctly", () => {
        render(<Input />);
        const input = screen.getByRole("textbox");
        expect(input).toBeInTheDocument();
    });
});
