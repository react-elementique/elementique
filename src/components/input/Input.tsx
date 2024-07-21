import React from "react";
import {
    StyledFloatContainer,
    StyledFloatInput,
    StyledFloatLabel,
    StyledInput,
} from "./Input.styles";

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
