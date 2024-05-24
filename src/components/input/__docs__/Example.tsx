import React, { FC } from "react";
import Input, { InputProps } from "../Input";

const Example: FC<InputProps> = ({
    disabled = false,
    onClick = () => {},
    primary = true,
    size = "small",
    text = "Button",
}) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}
        >
            <Input
                size={size}
                type="text"
                text={text}
                disabled={disabled}
                onClick={onClick}
                primary={primary}
            />
        </div>
    );
};

export default Example;
