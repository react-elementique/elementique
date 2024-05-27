import React, { MouseEventHandler } from "react";
import styled from "styled-components";

export type ButtonProps = {
    text?: string;
    primary?: boolean;
    outline?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button<ButtonProps>`
    line-height: 1;
    cursor: pointer;
    font-weight: 700;
    font-size: ${(props) =>
        props.size === "small"
            ? "16px"
            : props.size === "medium"
              ? "16px"
              : "20px"};
    border-radius: 10px;
    display: inline-block;
    color: ${(props) => (props.primary ? "#fff" : "#000")};
    background-color: ${(props) => (props.primary ? "#FF5655" : "transparent")};
    border: ${(props) => (props.outline ? "2px solid" : "none")};
    border-color: ${(props) => (props.outline ? "#000" : "transparent")};
    padding: ${(props) =>
        props.size === "small"
            ? "10px 18px"
            : props.size === "medium"
              ? "14px 20px"
              : "14px 24px"};
`;

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
