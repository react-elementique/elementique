import React, { MouseEventHandler } from "react";
import styled from "styled-components";

export type ButtonProps = {
    text?: string;
    primary?: boolean;
    outline?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    bg?: string;
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
    ${(props) =>
        props.primary && `background: ${props.bg ? props.bg : "#FF5655"}`};
    ${(props) => props.outline && `background: transparent`};
    border: ${(props) => (props.outline ? "2px solid" : "none")};
    ${(props) =>
        props.outline && `border-color: ${props.bg ? props.bg : "#000"}`};
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
