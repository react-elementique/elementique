import React, { FC } from "react";
import Button, { ButtonProps } from "../Button";

const Example: FC<ButtonProps> = ({
    disabled,
    onClick = () => {},
    primary,
    size = "small",
    text = "Button",
    outline,
    bg,
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
                bg={bg}
            />
        </div>
    );
};

export default Example;
