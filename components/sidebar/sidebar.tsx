import React from 'react';
import Image from 'next/image';
import SidebarWrapper from "./sidebar.style";
import Logo from '../../public/logos/logo.gif';
import Subtitle from "../subtitle/subtitle";

interface SidebarProps {
}

const Sidebar: React.FC<SidebarProps> = () => (
    <SidebarWrapper>
      <Image src={Logo} height={200} objectFit="contain" />
      <Subtitle />
    </SidebarWrapper>
  );

export default Sidebar;
