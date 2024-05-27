import React, { FC } from "react";
import Button, { ButtonProps } from "../Button";

const Example: FC<ButtonProps> = ({
    disabled = false,
    onClick = () => {},
    primary = true,
    size = "small",
    text = "Button",
    outline = false,
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
            <Button
                size={size}
                text={text}
                disabled={disabled}
                onClick={onClick}
                primary={primary}
                outline={outline}
            />
        </div>
    );
};

export default Example;
