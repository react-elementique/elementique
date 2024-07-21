import React, { MouseEventHandler } from "react";
import { StyledButton } from "./Button.styles";

export type ButtonProps = {
    text?: string;
    primary?: boolean;
    outline?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    bg?: string;
};

const Button: React.FC<ButtonProps> = ({
    size,
    primary,
    outline,
    disabled,
    text,
    onClick,
    ...props
}) => {
    return (
        <StyledButton
            type="button"
            onClick={onClick}
            primary={primary}
            outline={outline}
            disabled={disabled}
            size={size}
            {...props}
        >
            {text}
        </StyledButton>
    );
};

export default Button;
