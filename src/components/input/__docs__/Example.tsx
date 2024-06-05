import React, { FC } from "react";
import Input, { InputProps } from "../Input";

const Example: FC<InputProps> = ({ ...props }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}
        >
            <Input
                placeholder="Enter text"
                variant={props.variant}
                fontsProperty={props.fontsProperty}
                name={props.name}
                type={props.type}
                width={props.width}
                maxWidth={props.maxWidth}
                p={props.p}
                setValue={props.setValue}
                value={props.value}
                border={props.border}
            />
        </div>
    );
};

export default Example;
