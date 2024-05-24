import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
    title: "Button",
    component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
    args: {
        text: "Input",
        type: "text",
        primary: true,
        disabled: false,
        size: "small",
        onClick: () => console.log("Input"),
    },
};
export const Secondary: Story = {
    args: {
        text: "Input",
        type: "text",
        primary: false,
        disabled: false,
        size: "small",
        onClick: () => console.log("Input"),
    },
};