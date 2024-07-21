import "@testing-library/jest-dom";

import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Sidebar from "../Sidebar";

describe("Navbar component", () => {
    it("should render Navbar component correctly", () => {
        render(<Sidebar />);
        const sidebar = screen.getByRole("navigation");
        expect(sidebar).toBeInTheDocument();
    });
});
