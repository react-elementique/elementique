import React from "react";
import styled from "styled-components";
import { disableScrolling, enableScrolling } from "../../utils/ScrollHandler";

export type NavbarProps = {
    p?: number;
    px?: number;
    py?: number;
    type?: string;
    logo?: string | null;
    title?: string;
    links?: {
        label: string;
        href: string;
    }[];
    fontsProperty?: {
        size?: string;
        weight?: number;
        family?: string;
    };
    className?: string | null;
    bg?: string;
    color?: string;
};

const Navbar: React.FC<NavbarProps> = ({
    logo,
    title,
    links,
    className,
    bg,
    p,
    px,
    py,
}) => {
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
        <StyledNavbar
            style={{
                background: `${bg}`,
                padding: p ? `${p}px` : `${py || 10}px ${px || 30}px`,
            }}
            className={className || ""}
        >
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
                <div
                    style={{
                        background: `${bg}`,
                    }}
                    className="nav-phone__toggle"
                >
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

const StyledNavbar = styled.nav<NavbarProps>`
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: ${(props) =>
        props.p ? `${props.p}px` : `${props.py || 10}px ${props.px || 30}px`};
    width: calc(
        100% -
            ${(props) =>
                props.p
                    ? `${2 * props.p}px`
                    : props.px
                      ? `${2 * props.px}px`
                      : "60px"}
    );
    .nav-logo__container,
    .nav-links__container {
        display: flex;
        align-items: center;
        gap: 10px;
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
        height: 100%;
        width: 100%;
        top: calc(
            ${(props) =>
                props.fontsProperty && props.fontsProperty.size
                    ? props.fontsProperty.size
                    : "30px" +
                      ` + ${props.p ? 2 * props.p : props.py ? 2 * props.py : 20}px` +
                      " - 2px"}
        );
        left: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        justify-content: center;
        z-index: 990;
    }
    img {
        height: 30px;
    }
    a {
        text-decoration: none;
        color: ${(props) => props.color || "#000"};
        font-size: ${(props) => props.fontsProperty?.size || "16px"};
        font-family: ${(props) => props.fontsProperty?.family || "system-ui"};
        font-weight: ${(props) => `${props.fontsProperty?.weight || 500}`};
    }
`;

const StyledMenu = styled.div`
    display: block;
    height: 20px;
    width: 25px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    .line {
        display: block;
        height: 3px;
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
