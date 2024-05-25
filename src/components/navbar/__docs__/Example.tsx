import React, { FC } from "react";
import Navbar, { NavbarProps } from "../Navbar";

const Example: FC<NavbarProps> = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}
        >
            <Navbar
                type={"normal"}
                logo={null}
                title={"Navbar"}
                links={[
                    {
                        label: "Home",
                        href: "/home",
                    },
                    {
                        label: "About",
                        href: "/about",
                    },
                ]}
                className={null}
            />
        </div>
    );
};

export default Example;
