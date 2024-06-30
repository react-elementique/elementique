import { default as React } from '../../../node_modules/react';

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
declare const Navbar: React.FC<NavbarProps>;
export default Navbar;
