import React from "react";
import styled from "styled-components";
import { disableScrolling, enableScrolling } from "../../utils/ScrollHandler";

export type NavbarProps = {
    type?: string;
    logo?: string | null;
    title?: string;
    links?: {
        label: string;
        href: string;
    }[];
    fontsProperty?: {
        size: string;
        weight: number;
        family: string;
    };
    className?: string | null;
    bgColor?: string;
};

const StyledNavbar = styled.nav<NavbarProps>`
    z-index: 999;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    color: #000;
    font-size: ${(props) =>
        props.fontsProperty ? props.fontsProperty.size : "16px"};
    font-family: ${(props) =>
        props.fontsProperty ? props.fontsProperty.family : "system-ui"};
    font-weight: ${(props) =>
        props.fontsProperty ? props.fontsProperty.weight : "500"};
    padding: 10px 30px;
    background: ${(props) => (props.bgColor ? props.bgColor : "#fff")};
    .nav-logo__container {
        display: flex;
        gap: 10px;
    }
    .nav-links__container {
        display: flex;
        gap: 10px;
    }
    a {
        text-decoration: none;
        color: #000;
        font-size: ${(props) =>
            props.fontsProperty ? props.fontsProperty.size : "16px"};
        font-family: ${(props) =>
            props.fontsProperty ? props.fontsProperty.size : "system-ui"};
        font-weight: ${(props) =>
            props.fontsProperty ? props.fontsProperty.weight : "system-ui"};
    }
    .hamburger-open .line1 {
        transform: rotate(45deg);
    }
    .hamburger-open .line2 {
        transform: scaleY(0);
    }
    .hamburger-open .line3 {
        transform: rotate(-45deg);
    }
    .nav-phone__toggle {
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        height: calc(100% - 60px);
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        justify-content: center;
    }
`;

const StyledMenu = styled.div`
    display: block;
    height: 26px;
    width: 32px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    .line {
        display: block;
        height: 4px;
        width: 100%;
        border-radius: 10px;
        background: #0e2431;
    }
    .line1 {
        transform-origin: 0% 0%;
        transition: transform 0.3s ease-in-out;
    }
    .line2 {
        transition: transform 0.1s ease-in-out;
    }
    .line3 {
        transform-origin: 0% 100%;
        transition: transform 0.3s ease-in-out;
    }
`;

const Navbar: React.FC<NavbarProps> = ({
    type,
    logo,
    title,
    links,
    fontsProperty,
    className,
    bgColor,
}) => {
    console.log(type);
    console.log(fontsProperty);
    console.log(bgColor);
    const [navToggle, setNavToggle] = React.useState(false);
    const [isSmallScreen, setIsSmallScreen] = React.useState(false);
    const [windowSize, setWindowSize] = React.useState(getWindowSize());

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    React.useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    React.useEffect(() => {
        if (windowSize.innerWidth < 540) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    }, [windowSize]);

    React.useEffect(() => {
        if (navToggle) disableScrolling();
        else enableScrolling();
    }, [navToggle]);

    return (
        <StyledNavbar className={className || ""}>
            <a
                href={links ? links[0].href : "#"}
                className="nav-logo__container"
            >
                {logo && <img src={logo} alt={title || "logo"} />}
                {title}
            </a>
            {!isSmallScreen && (
                <div className="nav-links__container">
                    {links?.map((link) => (
                        <a key={`nav-${link.label}`} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
            {isSmallScreen && (
                <StyledMenu
                    onClick={() => setNavToggle(!navToggle)}
                    className={navToggle ? "hamburger-open" : ""}
                >
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </StyledMenu>
            )}
            {isSmallScreen && navToggle && (
                <div className="nav-phone__toggle">
                    {links?.map((link) => (
                        <a key={`nav-${link.label}`} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </StyledNavbar>
    );
};

export default Navbar;
