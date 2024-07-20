import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
    title: "Sidebar",
    component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Standard: Story = {
    args: {},
};
export const Custom: Story = {
    args: {},
};