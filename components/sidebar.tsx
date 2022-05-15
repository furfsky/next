import React from 'react';

type SidebarProps = {
  children: React.ReactNode;
};
/*
  min-height: calc(100vh - var(--navbar-height));
  background: rgba(28, 29, 48, 0.5);
  min-width: 60rem;
  max-width: 90rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  padding: 3.2rem;
 */
const Sidebar = ({ children }: SidebarProps) => (
  <div className="fixed z-10 flex flex-col items-center justify-center w-2/5 h-screen bg-pale-700/50 backdrop-blur-lg grow">
    {children}
  </div>
);

export default Sidebar;
