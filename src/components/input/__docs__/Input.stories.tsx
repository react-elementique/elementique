import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
    title: "Input",
    component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
    args: {
        placeholder: "Enter text",
        type: "text",
        variant: "primary",
    },
};
export const Float: Story = {
    args: {
        placeholder: "Enter text",
        type: "text",
        variant: "float",
    },
};
