import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';

/*
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    position: fixed;
    height: var(--navbar-height);
    background: var(--furf-background-dark);
    
    li {
      font-weight: 700;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1.6rem 3.2rem;
      font-size: 1.6rem;

      cursor: pointer;
      
      &.active {
        color: var(--furf-gold);
      }
      
      &:hover {
        color: var(--furf-gold);
      }
    }
  } */
const NAV_LINKS = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Downloads',
    path: '/downloads',
  },
];

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="fixed z-50 w-full">
      <ul className="flex justify-center h-16 list-none bg-pale-600">
        {NAV_LINKS.map(tab => (
          <li
            className={cx(
              'flex flex-col justify-center p-4 text-2xl font-bold text-white shadow items-center',
              { '!text-gold-400 [text-shadow:4px_4px_0_#441a08]': router.pathname === tab.path },
            )}
            key={tab.path}
          >
            <Link href={tab.path} passHref>
              {tab.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
