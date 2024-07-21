import React from "react";
import {
    StyledAnchor,
    StyledHeading,
    StyledLinkList,
    StyledList,
    StyledLogo,
    StyledSidebar,
} from "./Sidebar.styles";

export type SidebarProps = {
    p?: string;
    bg?: string;
    color?: string;
    linkHighlight?: string;
    title?: string;
    links?: {
        category: string;
        href: string;
        name: string;
    }[][];
};

const Sidebar: React.FC<SidebarProps> = ({ ...props }: SidebarProps) => {
    const tempLinks = [
        [
            {
                category: "menu",
                href: "/",
                name: "Dashboard",
            },
            {
                category: "menu",
                href: "/",
                name: "Menu",
            },
        ],
        [
            {
                category: "settings",
                href: "/",
                name: "settings",
            },
            {
                category: "settings",
                href: "/",
                name: "profile",
            },
        ],
    ];

    return (
        <nav>
            <StyledSidebar>
                <StyledLogo href="#">{props.title || "Sidebar"}</StyledLogo>
                <StyledList>
                    {tempLinks.map((item, index) => (
                        <>
                            <StyledHeading>
                                {item[index].category}
                            </StyledHeading>
                            {item.map((link) => (
                                <StyledLinkList
                                    key={`sidebar-link-${link.name}-${index}`}
                                >
                                    <StyledAnchor href={link.href}>
                                        {link.name}
                                    </StyledAnchor>
                                </StyledLinkList>
                            ))}
                        </>
                    ))}
                </StyledList>
            </StyledSidebar>
        </nav>
    );
};

export default Sidebar;
