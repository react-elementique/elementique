import React from "react";
import styled from "styled-components";

export type InputProps = {
    variant?: "primary" | "float";
    name?: string | "float_input";
    type?: string | "text";
    width?: string | "100%";
    maxWidth?: string | "640px";
    p?: string;
    placeholder?: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
    value?: string;
    border?: {
        color: string;
        width: string;
        radius: string;
    };
    fontsProperty?: {
        size?: string;
        weight?: number;
        family?: string;
    };
    hasValue?: boolean;
};

const Input: React.FC<InputProps> = ({
    type,
    name,
    variant,
    value,
    placeholder,
    setValue,
}) => {
    return (
        <>
            {variant === "primary" ? (
                <StyledInput
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    onChange={(e) => setValue && setValue(e.target.value)}
                />
            ) : (
                <StyledFloatContainer>
                    <StyledFloatInput
                        type={type}
                        name={name}
                        id={name}
                        value={value}
                        onChange={(e) => setValue && setValue(e.target.value)}
                        hasValue={value ? true : false}
                    />
                    <StyledFloatLabel>{placeholder}</StyledFloatLabel>
                </StyledFloatContainer>
            )}
        </>
    );
};

export default Input;

const StyledInput = styled.input<InputProps>`
    padding: ${(props) => (props.p ? props.p : "10px 14px")};
    width: ${(props) => props.width};
    max-width: ${(props) => props.maxWidth};
    outline: none;
    border: ${(props) => (props.border ? props.border.width : "1px")} solid
        ${(props) => (props.border ? props.border.color : "#eee")};
    border-radius: ${(props) => (props.border ? props.border.radius : "4px")};
    font-size: ${(props) =>
        props.fontsProperty ? props.fontsProperty.size : "16px"};
    font-family: ${(props) =>
        props.fontsProperty ? props.fontsProperty.family : "system-ui"};
    font-weight: ${(props) =>
        props.fontsProperty ? props.fontsProperty.weight : "500"};
`;

const StyledFloatContainer = styled.div<InputProps>`
    position: relative;
    margin-bottom: 1.5rem;
    font-family: ${(props) =>
        props.fontsProperty ? props.fontsProperty.family : "system-ui"};
`;

const StyledFloatInput = styled.input<InputProps>`
    padding: ${(props) => (props.p ? props.p : "10px 14px")};
    width: ${(props) => props.width};
    max-width: ${(props) => props.maxWidth};
    outline: none;
    border: ${(props) => (props.border ? props.border.width : "1px")} solid
        ${(props) => (props.border ? props.border.color : "#eee")};
    border-radius: ${(props) => (props.border ? props.border.radius : "4px")};
    font-size: ${(props) =>
        props.fontsProperty ? props.fontsProperty.size : "16px"};
    font-family: ${(props) =>
        props.fontsProperty ? props.fontsProperty.family : "system-ui"};
    font-weight: ${(props) =>
        props.fontsProperty ? props.fontsProperty.weight : "500"};
    transition: border-color 0.3s;
    &:focus {
        border-color: #007bff;
    }
    &:
        focus + label,
        ${({ hasValue }) =>
            hasValue &&
            `
            & + label {
                top: -0.75rem;
                font-size: 0.75rem;
                color: #007bff;
            }
        `};
`;

const StyledFloatLabel = styled.label<InputProps>`
    position: absolute;
    padding: ${(props) => (props.p ? props.p : "10px 14px")};
    transform: translateY(-50%);
    transition: all 0.3s;
    pointer-events: none;
    font-size: ${(props) =>
        props.fontsProperty ? props.fontsProperty.size : "16px"};
    font-family: ${(props) =>
        props.fontsProperty ? props.fontsProperty.family : "system-ui"};
    font-weight: ${(props) =>
        props.fontsProperty ? props.fontsProperty.weight : "500"};
    ${StyledFloatInput}:focus + & {
        top: -0.75rem;
        left: -14px;
        font-size: 0.75rem;
        color: #007bff;
    }
    ${({ hasValue }) =>
        hasValue
            ? `
        top: -0.75rem;
        left: -14px;
        font-size: 0.75rem;
        color: #007bff;
    `
            : `
        top: 50%;
        left: 0;
        color: #999;
    `};
`;
