// cspell:disable

import type { Metadata } from "next";
import { Content } from "~/components/content";
import { Logo } from "~/components/logo";
import { Sidebar } from "~/components/sidebar";
import { brightness, cn } from "~/lib/utils";

interface Member {
  name: string;
  quote?: string;
}

interface Role {
  color: string;
  members: Member[];
}

type RolesMap = Record<string, Role>;

const roles: RolesMap = {
  "Head of Head Artist": {
    color: "#ffa500",
    members: [{ name: "Tylerrrr", quote: "no fun allowed" }],
  },
  "Head Artist": {
    color: "#d776ff",
    members: [{ name: "Smolegit", quote: "listen to creatures of habit" }],
  },
  "Original Furfsky Creator": {
    color: "#c041ff",
    members: [
      {
        name: "furf",
        quote:
          "im just now looking up furfsky again on youtube and it made me realize how much i've missed since my last release",
      },
    ],
  },
  Artist: {
    color: "#b19cd9",
    members: [
      { name: "Eggman" },
      { name: "penk", quote: "next person who changes my name is certified acrid" },
      { name: "me.™" },
      {
        name: "Hexafish",
        quote: "petition to remove the liver dragger's texture from fsr because you should never use it",
      },
      { name: "goose", quote: "those are uhh... a lot of channels... you got there." },
      { name: "zburger", quote: "ew burger ice cream" },
      { name: "PcArt01", quote: "your toes will be pulled tonight" },
      { name: "Ropes", quote: "yup ! I hate furfsky 🙂" },
      { name: "motor", quote: "Flip a coin. If heads, I am on vacation. If tails, blame Ery." },
      { name: "Glenz", quote: "Chroma HUD/UIs hurts my soul" },
      { name: "Thanatos", quote: "Try not to cringe! [FSR Edition] (Gone wrong, absolutely failed)" },
      { name: "FoxScript", quote: "[placeholder credit text]" },
      { name: "Papaya", quote: "🐱" },
      { name: "GqmeKnight", quote: "we should broadcast my battle with the axe wielder tommorow at 5pm" },
      { name: "invalid-user", quote: "How do i animate stuff minecraft." },
      { name: "aGrxpe", quote: "shut up I thought u were still in the basement" },
      { name: "D43DALUS", quote: "I'm built not born, it's an analytical advantage." },
      { name: "tea", quote: "i will murder every axolotl in a 100 km radius" },
    ],
  },
  "Retired Artist": {
    color: "#bbabdb",
    members: [
      { name: "duck.", quote: "imagine playing skyblock" },
      {
        name: "GenesiS",
        quote: "its Genesecting time * starts Genesecting all over Pokemon Infinite Fusion",
      },
      { name: "resanityyy", quote: "gargage" },
      { name: "Shrimp", quote: "i live under a rock when it comes to optifine updates apparently" },
      { name: "Skeletony", quote: "bootleg sans. also check out wab" },
      { name: "PigTurtle", quote: "it's not acting anymore, now it's being run by a microwave" },
    ],
  },
  "Website Developer": {
    color: "#008080",
    members: [
      {
        name: "voxal",
        quote: "i can no longer code the website at school cause now everyone thinks im a furry 😔",
      },
      { name: "feenko" },
    ],
  },
  Administrator: {
    color: "#17d44a",
    members: [
      { name: "Hoss", quote: "tylereboy my beloved" },
      { name: "Zuck", quote: "you miss 100% of the shots you don't take" },
      { name: "HellCastle", quote: "They have turned me into a furry. help" },
    ],
  },
  Moderator: {
    color: "#4b8b3b",
    members: [{ name: "sirLunar", quote: "I eat my cereal with tears instead of milk" }],
  },
  "Retired Staff": {
    color: "#0d7f2c",
    members: [
      { name: "Toasted_Breaad", quote: "if you do not like bread you shoudn't exist" },
      { name: "SeBook" },
      { name: "parakeet", quote: "you wet tubesock" },
      { name: "mr_miner", quote: "reeee" },
      { name: "Suker", quote: "the fsr twitter is a place only the highest level of memers can ascend to" },
    ],
  },
  Contributor: {
    color: "#00b0b0",
    members: [
      { name: "Amie" },
      { name: "TopComp", quote: "breads yummy" },
      { name: "Vinni" },
      {
        name: "Panka",
        quote: "sometimes i question why artists that are as good as the people here are making art for mc",
      },
      {
        name: "nacrt",
        quote: "just have it a normal file name, the cancer that is mediafire only makes things worse",
      },
      { name: "jani270" },
      { name: "ThatGravyBoat", quote: "I use MS paint for my pixel art" },
      { name: "Leime" },
      { name: "SausageDog359", quote: "i like toast" },
      { name: "NoPro2024", quote: "old livid dagger texture was better" },
      { name: "Shy", quote: "om im stoopid" },
      { name: "Sigia", quote: "damn, why is aseprite so expensive" },
      { name: "Madeline", quote: "download neu mod nerds" },
      { name: "Duowithng" },
      { name: "salpaka" },
      { name: "Moulberry" },
      { name: "mali comrade", quote: "sup gamers" },
      { name: "Hasnu", quote: "#FSRGangOnTop" },
      { name: "ModCruel", quote: "Stop making bad .json files." },
      { name: "banan" },
      { name: "8KCoffeeWizard", quote: "imagine playing hypixel on 1.16" },
      { name: "DTRW191", quote: "Lost my Ult Wise 5 AOTE but still have my melons 👌" },
      { name: "Juniper" },
      { name: "Drakoncheto", quote: "what does that even mean xd?" },
      { name: "certainlystormy is now miku™" },
      { name: "artificialair", quote: "OH FUCK THE PERIOD" },
    ],
  },
};

export const metadata: Metadata = {
  title: "Credits",
};

export default function Credits() {
  return (
    <main>
      <Sidebar>
        <Logo />
        <p className="mt-8 text-center text-2xl text-gold-400 [text-shadow:4px_4px_0_#332a00]">Credits</p>
      </Sidebar>

      <Content layout="regular" className="md:px-8">
        {Object.entries(roles).map(([roleName, { color, members }]) =>
          members.map(({ name, quote }) => (
            <section
              key={`${roleName}-${name}`}
              className={cn("inline-block max-w-md p-8 align-top text-white")}
              style={{ color, textShadow: `2px 2px 0 ${brightness(color, 0.35)}` }}
            >
              <p className="font-medium text-xl">{roleName}</p>
              <h3
                className="mb-2 font-semibold text-4xl"
                style={{ textShadow: `4px 4px 0 ${brightness(color, 0.35)}` }}
              >
                {name}
              </h3>
              {quote && <blockquote className="text-xl italic">"{quote}"</blockquote>}
            </section>
          )),
        )}
      </Content>
    </main>
  );
}
