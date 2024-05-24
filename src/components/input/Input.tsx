import React, { MouseEventHandler } from "react";
import styled from "styled-components";

export type InputProps = {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    type?: string;
    size?: "small" | "medium" | "large";
    placeholder?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledInput = styled.input<InputProps>`
    border: 0;
    line-height: 1;
    font-size: 15px;
    cursor: pointer;
    font-weight: 700;
    font-weight: bold;
    border-radius: 10px;
    display: inline-block;
    color: ${(props) => (props.primary ? "#fff" : "#000")};
    background-color: ${(props) => (props.primary ? "#FF5655" : "#f4c4c4")};
    padding: ${(props) =>
        props.size === "small"
            ? "7px 25px 8px"
            : props.size === "medium"
              ? "9px 30px 11px"
              : "14px 30px 16px"};
`;

const Input: React.FC<InputProps> = ({
    size,
    primary,
    disabled,
    type,
    text,
    placeholder,
    onClick,
    ...props
}) => {
    return (
        <StyledInput
            type={type}
            onClick={onClick}
            primary={primary}
            disabled={disabled}
            placeholder={placeholder}
            size={size}
            {...props}
        >
            {text}
        </StyledInput>
    );
};

export default Input;
