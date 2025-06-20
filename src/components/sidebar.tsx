export const Sidebar = ({ children }: React.HTMLAttributes<HTMLElement>) => (
  <aside className="z-10 hidden h-screen w-2/5 grow flex-col items-center justify-center bg-pale-700/50 px-8 backdrop-blur-md md:fixed md:flex">
    {children}
  </aside>
);
