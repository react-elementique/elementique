import { default as React } from '../../../node_modules/react';

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
declare const Navbar: React.FC<NavbarProps>;
export default Navbar;
