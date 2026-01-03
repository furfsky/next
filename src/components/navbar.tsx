"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Downloads", path: "/downloads" },
//  { label: "Gallery", path: "/gallery" },
  { label: "Credits", path: "/credits" },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed z-50 w-full shadow-md">
      <ul className="flex h-16 list-none items-center justify-center space-x-4 bg-pale-600 md:space-x-6">
        {NAV_LINKS.map(({ label, path }) => {
          const isActive = pathname === path;
          const linkClass = cn(
            "text-lg xs:text-xl lg:text-2xl",
            isActive ? "text-gold-400 [text-shadow:4px_4px_0_#332a00]" : "[text-shadow:4px_4px_0_#2e2e2e]",
          );

          return (
            <li key={path}>
              <Link aria-current={isActive || undefined} className={linkClass} href={path}>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
