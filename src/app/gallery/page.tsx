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

      <Content className="flex flex-col items-center" layout="regular">
        <Image
          alt="gallery"
          className="relative"
          height={519}
          objectFit="cover"
          src={`/gallery/${tab}.png`}
          useMap="#galleryMap"
          width={540}
        />
        <map name="galleryMap">
          {tabs.map(({ name, title, coords }) => (
            <area
              alt={`${title} Tab`}
              coords={coords}
              href="#"
              key={name}
              onClick={(e) => {
                e.preventDefault();
                setTab(name);
              }}
              shape="rect"
              title={title}
            />
          ))}
        </map>
      </Content>
    </main>
  );
}
