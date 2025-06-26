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
          1.21+ requires Firmament. 1.8.9 requires Optifine.
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

            <div className="flex w-full flex-col gap-4">
              {Object.entries(release.downloads).map(([version, downloads]) => (
                <div
                  className="flex w-full flex-col flex-wrap gap-4 md:w-auto md:flex-row xl:flex-nowrap"
                  key={version}
                >
                  <Button
                    asChild
                    className="w-full xl:w-1/2"
                    title="Contains SkyBlock items, NEU Skulls, Vanilla Textures and Mod UI"
                  >
                    <Link href={downloads.full}>
                      Full Download (
                      <span className="text-gold-400 [text-shadow:4px_4px_0_#332a00]">{version}</span>)
                    </Link>
                  </Button>

                  {downloads.overlay ? (
                    <Button
                      asChild
                      className="w-full xl:w-1/2"
                      title="Contains SkyBlock items and NEU Skulls"
                    >
                      <Link href={downloads.overlay}>
                        Overlay Download (
                        <span className="text-gold-400 [text-shadow:4px_4px_0_#332a00]">{version}</span>)
                      </Link>
                    </Button>
                  ) : (
                    <Button className="w-full xl:w-1/2" disabled>
                      Overlay Download
                    </Button>
                  )}

                  {downloads.overlayPlus && (
                    <Button
                      asChild
                      className="w-full xl:w-1/2"
                      title="Contains SkyBlock items and NEU Skulls"
                    >
                      <Link href={downloads.overlayPlus}>
                        <div className="flex-row">
                          Overlay
                          <span className="font-bold text-lilac-400">+</span> Download (
                          <span className="text-gold-400 [text-shadow:4px_4px_0_#332a00]">{version}</span>)
                        </div>
                      </Link>
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </Content>
    </main>
  );
}
