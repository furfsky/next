import type { Metadata, Viewport } from "next";
import "./globals.css";
import fs from "node:fs/promises";
import path from "node:path";
import localFont from "next/font/local";
import Image from "next/image";
import { Navbar } from "~/components/navbar";
import { cn } from "~/lib/utils";

const minecraftFont = localFont({
  src: [
    {
      path: "../../public/fonts/Minecraft-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Minecraft-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Minecraft-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Minecraft-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Furfsky Reborn",
    default: "Furfsky Reborn",
  },
  description: "Hypixel Skyblock's most popular texture pack, texturing almost every item in the game.",
  openGraph: {
    title: "Furfsky Reborn",
    url: "https://furfsky.net",
    siteName: "Furfsky",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbcc6c",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const files = await fs
    .readdir(path.join(process.cwd(), "public", "backgrounds"))
    .catch(() => [] as string[]);

  const background =
    files.length > 0 ? `/backgrounds/${files[Math.floor(Math.random() * files.length)]}` : "";

  return (
    <html lang="en">
      <body className={cn("bg-pale-700 text-white", minecraftFont.className)}>
        <div className="-z-10 fixed inset-0">
          <Image
            src={background}
            alt="Background"
            fill
            className="object-cover opacity-60 blur-xs"
            priority
          />
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
