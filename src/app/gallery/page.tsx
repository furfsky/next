"use client";

import Image from "next/image";
import { useState } from "react";
import { Content } from "~/components/content";
import { Logo } from "~/components/logo";
import { Sidebar } from "~/components/sidebar";

const tabs = [
  { name: "swords", title: "Swords", coords: "9,6,50,47" },
  { name: "armor", title: "Armor", coords: "57,6,98,47" },
  { name: "bows", title: "Bows", coords: "105,6,146,47" },
  { name: "tools", title: "Tools", coords: "153,6,194,47" },
  { name: "talismans", title: "Talismans", coords: "201,6,242,47" },
  { name: "reforges", title: "Reforges", coords: "249,6,290,47" },
  { name: "misc", title: "Miscellaneous", coords: "297,6,338,47" },
] as const;

type Tab = (typeof tabs)[number]["name"];

export default function Gallery() {
  const [tab, setTab] = useState<Tab>("swords");

  return (
    <main>
      <Sidebar>
        <Logo />
        <p className="mt-8 text-center text-2xl text-gold-400 [text-shadow:4px_4px_0_#332a00]">
          Note that the gallery might be from an outdated version.
        </p>
      </Sidebar>

      <Content layout="regular" className="flex flex-col items-center">
        <Image
          src={`/gallery/${tab}.png`}
          alt="gallery"
          useMap="#galleryMap"
          objectFit="cover"
          width={540}
          height={519}
          className="relative"
        />
        <map name="galleryMap">
          {tabs.map(({ name, title, coords }) => (
            <area
              key={name}
              title={title}
              alt={`${title} Tab`}
              shape="rect"
              coords={coords}
              href="#"
              onClick={e => {
                e.preventDefault();
                setTab(name);
              }}
            />
          ))}
        </map>
      </Content>
    </main>
  );
}
