import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Image from "next/image";
import { Navbar } from "~/components/navbar";
import { useRandomBackground } from "~/hooks/use-random-background";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const background = useRandomBackground();

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
