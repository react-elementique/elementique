import React from "react";
import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import Input from "../Input";

describe("Input component", () => {
    it("Input should render correctly", () => {
        render(<Input />);
    });
});
