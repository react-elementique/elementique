import React, { FC } from "react";
import Input, { InputProps } from "../Input";

const Example: FC<InputProps> = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}
        >
            <Input placeholder="Enter text" />
        </div>
    );
};

export default Example;
