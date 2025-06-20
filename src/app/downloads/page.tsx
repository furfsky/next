import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "~/components/button";
import { Content } from "~/components/content";
import { Logo } from "~/components/logo";
import { Sidebar } from "~/components/sidebar";
import { releases } from "~/lib/data";

export const metadata: Metadata = {
  title: "Downloads",
};

export default function Downloads() {
  return (
    <main>
      <Sidebar>
        <Logo />
        <p className="mt-8 text-center text-2xl text-gold-400 [text-shadow:4px_4px_0_#332a00]">
          All downloads are for Minecraft 1.8.9 with Forge and OptiFine.
        </p>
      </Sidebar>

      <Content layout="regular">
        {[...releases].reverse().map((release) => (
          <div className="mb-8" key={release.version}>
            <p className="font-bold text-gold-400 text-xl [text-shadow:4px_4px_0_#332a00]">
              {release.version}
            </p>
            <h2 className="font-bold text-3xl [text-shadow:4px_4px_0_#2e2e2e]">{release.title}</h2>
            <p className="mb-4 text-xl [text-shadow:4px_4px_0_#2e2e2e]">{release.summary || "..."}</p>

            <div className="flex w-full flex-col flex-wrap gap-4 md:w-auto md:flex-row xl:flex-nowrap">
              <Button
                asChild
                className="w-full xl:w-1/2"
                title="Contains SkyBlock items, NEU Skulls, Vanilla Textures and Mod UI"
              >
                <Link href={release.downloads.full}>Full Download</Link>
              </Button>

              {release.downloads.overlay ? (
                <Button asChild className="w-full xl:w-1/2" title="Contains SkyBlock items and NEU Skulls">
                  <Link href={release.downloads.overlay}>Overlay Download</Link>
                </Button>
              ) : (
                <Button className="w-full xl:w-1/2" disabled>
                  Overlay Download
                </Button>
              )}

              {release.downloads.overlayPlus && (
                <Button asChild className="w-full xl:w-1/2" title="Contains SkyBlock items and NEU Skulls">
                  <Link href={release.downloads.overlayPlus}>
                    <div className="flex-row">
                      Overlay<span className="font-bold text-lilac-400">+</span> Download
                    </div>
                  </Link>
                </Button>
              )}
            </div>
          </div>
        ))}
      </Content>
    </main>
  );
}
