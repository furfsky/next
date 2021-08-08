import React from "react";
import { NavbarWrapper } from "./navbar.style";
import cx from "classnames";

const NAV_LINKS = [
  {
    label: "Home",
    src: "/",
    isActive: true, // example to check if active class works
  },
  {
    label: "Downloads",
    src: "",
  },
  {
    label: "Stuff",
    src: "",
  },
  {
    label: "Other Stuff",
    src: "",
  },
];

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <ul>
        {NAV_LINKS.map((tab, index) => (
          <li
            className={cx({ active: tab.isActive })}
            key={`${tab.label}-${index}`}
          >
            {tab.label}
          </li>
        ))}
      </ul>
    </NavbarWrapper>
  );
};

export default Navbar;
