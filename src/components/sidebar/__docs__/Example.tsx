import React, { FC } from "react";
import Sidebar, { SidebarProps } from "../Sidebar";

const Example: FC<SidebarProps> = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}
        >
            <Sidebar />
        </div>
    );
};

export default Example;
