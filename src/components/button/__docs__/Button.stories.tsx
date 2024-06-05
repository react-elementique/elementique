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
        text: "Button",
        primary: true,
        disabled: false,
        size: "small",
        onClick: () => console.log("Button"),
    },
};
export const Outline: Story = {
    args: {
        text: "Button",
        outline: true,
        disabled: false,
        size: "small",
        onClick: () => console.log("Button"),
    },
};
