import { default as React } from '../../../node_modules/react';

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
declare const Input: React.FC<InputProps>;
export default Input;
