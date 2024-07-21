import { SidebarProps } from "./Sidebar";
import styled from "styled-components";

export const StyledSidebar = styled.div<SidebarProps>`
    position: fixed;
    height: 100vh;
    min-width: 120px;
    left: 0;
    top: 0;
    background: ${(props) => props.bg || "#eee"};
    padding: ${(props) => props.p || "30px 10px"};
    font-family: system-ui;
`;

export const StyledLogo = styled.a<SidebarProps>`
    font-weight: 600;
    display: flex;
    align-items: center;
    font-size: 24px;
    text-decoration: none;
    color: ${(props) => props.color || "#000"};
`;

export const StyledList = styled.ul`
    list-style: none;
    margin-left: 0px;
    padding-left: 0px;
`;

export const StyledLinkList = styled.li<SidebarProps>`
    width: calc(100% - 8px);
    transition: 0.3s all;
    padding: 4px;
    margin-top: 2px;
    &:hover {
        background: ${(props) => props.linkHighlight || "royalblue"};
    }
`;

export const StyledHeading = styled.li`
    text-transform: capitalize;
    font-weight: 600;
    margin-top: 10px;
`;

export const StyledAnchor = styled.a<SidebarProps>`
    text-decoration: none;
    width: 100%;
    height: 100%;
    color: ${(props) => props.color || "#000"};
`;
