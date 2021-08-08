import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cx from 'classnames';

import { NavbarWrapper } from "./navbar.style";

const NAV_LINKS = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Downloads',
    path: '/downloads',
  },
]

const Navbar: React.FC = () => {
  const router = useRouter();
  return (
    <NavbarWrapper>
      <ul>
        {NAV_LINKS.map((tab, index) => (
          <li className={cx({active: router.pathname === tab.path})} key={tab.path}><Link href={tab.path}>{tab.label}</Link></li>
        ))}
      </ul>
    </NavbarWrapper>
  );
}

export default Navbar;
