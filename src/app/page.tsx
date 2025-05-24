import { SiDiscord, SiGithub, SiModrinth, SiX, SiYoutube } from "@icons-pack/react-simple-icons";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "~/components/button";
import { Content } from "~/components/content";
import { Logo } from "~/components/logo";
import { Sidebar } from "~/components/sidebar";
import { useSplashText } from "~/hooks/use-splash-text";
import { releases } from "~/lib/data";

const socials = [
  {
    name: "Discord",
    icon: <SiDiscord />,
    url: "https://discord.gg/fsr",
  },
  {
    name: "X",
    icon: <SiX />,
    url: "https://x.com/furfskyreborn",
  },
  {
    name: "YouTube",
    icon: <SiYoutube />,
    url: "https://www.youtube.com/hellcastleyt",
  },
  {
    name: "Github",
    icon: <SiGithub />,
    url: "https://github.com/furfsky",
  },
  {
    name: "Modrinth",
    icon: <SiModrinth />,
    url: "https://modrinth.com/resourcepack/furfsky-reborn",
  },
];

export const metadata: Metadata = {
  title: "Home | Furfsky Reborn",
};

export default function Home() {
  const splashText = useSplashText();
  const latestRelease = releases.at(-1)!;
  const { downloads } = latestRelease;

  return (
    <main>
      <Sidebar>
        <Logo />
        <p className="mt-8 text-center text-2xl text-gold-400 [text-shadow:4px_4px_0_#332a00]">
          {splashText}
        </p>
      </Sidebar>

      <Content layout="centered">
        <h2 className="mb-6 text-center font-bold text-4xl [text-shadow:4px_4px_0_#2e2e2e]">
          Download Latest Version for{" "}
          <span className="text-gold-400 [text-shadow:4px_4px_0_#332a00]">1.8.9</span>
        </h2>

        <section className="mb-8 flex w-full flex-col gap-4 md:w-auto md:flex-row">
          <Button asChild title="Contains SkyBlock items, NEU Skulls, Vanilla Textures and Mod UI">
            <Link href={downloads.full}>Full Download</Link>
          </Button>

          {downloads.overlay && (
            <Button asChild title="Contains SkyBlock items and NEU Skulls">
              <Link href={downloads.overlay}>Overlay Download</Link>
            </Button>
          )}
        </section>

        <h2 className="mb-6 text-center font-bold text-3xl [text-shadow:4px_4px_0_#2e2e2e]">
          Our Socials (and more)
        </h2>

        <nav className="flex w-full flex-col gap-4 md:w-auto md:flex-row" aria-label="Social media links">
          {socials.map(social => (
            <Button key={social.name} aria-label={`${social.name} Icon`}>
              {social.icon}
            </Button>
          ))}
        </nav>
      </Content>
    </main>
  );
}
