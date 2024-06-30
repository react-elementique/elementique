import React from "react";
import styled from "styled-components";

/**
 * Input Component
 * @param variant: refer to different variant for the input
 * @param name: assign name attribute to the input
 * @param type: assign type for the input, such as: text, password, email
 * @param width: width of the input
 * @param maxWidth: maxWidth for the input
 * @param p: padding for the input
 * @param placeholder: placeholder text for the input
 * @param setValue: a SetStateAction for the input, refering to the useState setValue
 * @param value: the value of the input
 * @param border: set border of the input field
 * @param fontsProperty: set custom font properties for the input, such as fontSize, fontWeight, fontfamily
 */

export type InputProps = {
    variant?: "primary" | "float";
    name?: string | "float_input";
    type?: string | "text";
    width?: string;
    maxWidth?: string | "640px";
    p?: number;
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

/*
    Styled Input for the primary variant
 */
const StyledInput = styled.input<InputProps>`
    padding: ${(props) => (props.p ? props.p : "10px 14px")};
    width: ${(props) => props.width || "100%"};
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

/*
    Styled Container for the float variant
 */
const StyledFloatContainer = styled.div<InputProps>`
    position: relative;
    width: ${(props) => (props.width ? props.width : "100%")};
    max-width: ${(props) => props.maxWidth || "100%"};
    margin-bottom: 1.5rem;
    font-family: ${(props) =>
        props.fontsProperty ? props.fontsProperty.family : "system-ui"};
`;

/*
    Styled Input for the float variant
 */
const StyledFloatInput = styled.input<InputProps>`
    padding: ${(props) => (props.p ? props.p : "10px 14px")};
    width: ${(props) =>
        props.p ? `calc(100% - ${2 * props.p}px)` : "calc(100% - 28px)"};
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
