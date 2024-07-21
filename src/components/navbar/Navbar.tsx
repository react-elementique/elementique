import React from "react";
import { disableScrolling, enableScrolling } from "../../utils/ScrollHandler";
import { StyledMenu, StyledNavbar } from "./Navbar.styles";

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
