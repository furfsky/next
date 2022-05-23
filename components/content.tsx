import React from 'react';

type ContentProps = {
  children: React.ReactNode;
  backgroundImage: string;
  className?: string;
  dark?: boolean;
};

const Content = ({ children, className, backgroundImage, dark }: ContentProps) => (
  <main
    className="min-h-screen bg-fixed bg-center bg-cover bg-slate-100"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className={`flex flex-row w-full min-h-screen backdrop-blur-sm ${dark ? "backdrop-brightness-50" : "backdrop-brightness-75"}`}>
      <div className={`justify-center items-center pl-[40%] grow ${className}`}>{children}</div>
    </div>
  </main>
);

Content.defaultProps = {
  className: '',
  dark: false
};

export default Content;
