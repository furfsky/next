import React from 'react';
import Image from 'next/image';
import SidebarWrapper from "./sidebar.style";

interface SidebarProps {
  children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => (
    <SidebarWrapper>
      {props.children}
    </SidebarWrapper>
  );

export default Sidebar;
