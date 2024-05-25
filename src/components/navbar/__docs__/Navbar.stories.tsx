import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
    title: "Navbar",
    component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Standard: Story = {
    args: {
        type: "normal",
        logo: null,
        title: "Navbar",
        links: [
            {
                label: "Home",
                href: "/home",
            },
            {
                label: "About",
                href: "/about",
            },
        ],
        className: null,
    },
};
export const Custom: Story = {
    args: {},
};
