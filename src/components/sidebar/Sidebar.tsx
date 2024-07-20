import React from "react";

export type SidebarProps = {
    p?: string;
};

const Sidebar: React.FC<SidebarProps> = () => {
    return <nav>Sidebar</nav>;
};

export default Sidebar;
