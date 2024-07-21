import styled from "styled-components";
import { ButtonProps } from "./Button";

export const StyledButton = styled.button<ButtonProps>`
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
