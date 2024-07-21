import styled from "styled-components";
import { InputProps } from "./Input";

/*
    Styled Input for the primary variant
 */
export const StyledInput = styled.input<InputProps>`
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
export const StyledFloatContainer = styled.div<InputProps>`
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
export const StyledFloatInput = styled.input<InputProps>`
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

export const StyledFloatLabel = styled.label<InputProps>`
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
