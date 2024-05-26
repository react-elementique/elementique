import React from "react";
import styled from "styled-components";

export type InputProps = {
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
        size: string;
        weight: number;
        family: string;
    };
};

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

const Input: React.FC<InputProps> = ({
    type,
    value,
    placeholder,
    setValue,
}) => {
    return (
        <StyledInput
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={(e) => setValue && setValue(e.target.value)}
        />
    );
};

export default Input;
