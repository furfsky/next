export interface Download {
  name: string;
  version: string;
  description?: string;
  variants: {
    fl: string;
    ov: string;
    ovp?: string;
  };
}
export const versions: Download[] = [
  {
    version: 'v1.6.3',
    name: 'More UI Fixes',
    description: 'Additional fixes for issues introduced in the UI rewrite.',
    variants: {
      fl: '/files/v1.6.3/§b§lFurfSky §f§lReborn §8§lFULL.zip',
      ov: '/files/v1.6.3/§b§lFurfSky §f§lReborn §8§lOVERLAY.zip',
    },
  },
  {
    version: 'v1.6.2',
    name: 'UI Fixes',
    description: 'Fixes many issues introduced in the UI rewrite.',
    variants: {
      fl: '/files/v1.6.2/§b§lFurfSky §f§lReborn §8§lFULL.zip',
      ov: '/files/v1.6.2/§b§lFurfSky §f§lReborn §8§lOVERLAY.zip',
    },
  },
  {
    version: 'v1.6',
    name: 'Permafrost',
    description:
      "Adds textures for the Winter Island update, some missing Crimson Isle items, the Spider's Den Revamp, and includes a rewrite of the pack's UI.",
    variants: {
      fl: '/files/v1.6/§b§lFurfSky §f§lReborn §8§lFULL.zip',
      ov: '/files/v1.6/§b§lFurfSky §f§lReborn §8§lOVERLAY.zip',
    },
  },
  {
    version: 'v1.5.1',
    name: 'Items & Fixes',
    description: 'A couple of new items, changes, and fixes for Overheated.',
    variants: {
      fl: '/files/v1.5.1/§4§lFurfSky §6§lReborn §8§lFULL.zip',
      ov: '/files/v1.5.1/§4§lFurfSky §6§lReborn §8§lOV.zip',
    },
  },
  {
    version: 'v1.5',
    name: 'Overheated',
    description:
      "FurfSky Reborn's LARGEST update yet, with a large focus on items from the Crimson Isle update, compounded with a lot of other new textures, changes, fixes. and rewrites.",
    variants: {
      fl: '/files/v1.5/§4§lFurfSky §6§lReborn §8§lFULL.zip',
      ov: '/files/v1.5/§4§lFurfSky §6§lReborn §8§lOV.zip',
    },
  },
  {
    version: 'v1.4.2',
    name: '(Not So) Set In Stone',
    description: 'New Spooky Festival event items, an insane amount of changes, and quite a few fixes.',
    variants: {
      fl: '/files/v1.4.2/§2§lFurf§b§lSky §5§lReborn §8§lFL§8§l[§71.4.2§8§l].zip',
      ov: '/files/v1.4.2/§2§lFurf§b§lSky §5§lReborn §8§lOV §8§l[§71.4.2§8§l].zip',
    },
  },
  {
    version: 'v1.4.1',
    name: "Rosetta's Wares",
    description:
      'Adds textures for all the new arrows, early game armor sets, revamps reforge stones, adds several pets, and a ton of optimizations.',
    variants: {
      fl: '/files/v1.4.1/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.4.1§8§l].zip',
      ov: '/files/v1.4.1/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.4.1§8§l].zip',
    },
  },
  {
    version: 'v1.4',
    name: "Journey's Beginning",
    description:
      'Adds all of the new Crystal Hollows items along with a bunch of miscellaneous items, changes, and fixes.',
    variants: {
      fl: '/files/v1.4/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.4§8§l].zip',
      ov: '/files/v1.4/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.4§8§l].zip',
      ovp: '/files/v1.4/§r§lFurfSky §6§lReborn §8§lOV+ §8§l[§71.4§8§l].zip',
    },
  },
  {
    version: 'v1.3.2',
    name: 'Optimized',
    description: 'Lots of new Pets, Items, updates to old items, but also a ton of optimizations!!!!!',
    variants: {
      fl: '/files/v1.3.2/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.3.2§8§l].zip',
      ov: '/files/v1.3.2/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.3.2§8§l].zip',
      ovp: '/files/v1.3.2/§r§lFurfSky §6§lReborn §8§lOV+ §8§l[§71.3.2§8§l].zip',
    },
  },
  {
    version: 'v1.3.1',
    name: 'Voidgloom Twilight',
    description:
      'Adds textures for Enderman Slayer along with new SkyBlock and Mod UI, and of course bug fixes.',
    variants: {
      fl: '/files/v1.3.1/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.3.1§8§l].zip',
      ov: '/files/v1.3.1/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.3.1§8§l].zip',
      ovp: '/files/v1.3.1/§r§lFurfSky §6§lReborn §8§lOV+ §8§l[§71.3.1§8§l].zip',
    },
  },
  {
    version: 'v1.3',
    name: 'The Update that Textured Everything*',
    description:
      'Adds post-Dante event item textures, some armor sets, some miscellaneous items, changes to existing items, UI both SkyBlock and Mod, new Vanilla textures, and bug fixes.',
    variants: {
      fl: '/files/v1.3/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.3§8§l].zip',
      ov: '/files/v1.3/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.3§8§l].zip',
      ovp: '/files/v1.3/§r§lFurfSky §6§lReborn §8§lOV+ §8§l[§71.3§8§l].zip',
    },
  },
  {
    version: 'v1.2.6',
    name: 'La Resistance',
    description: 'Quick update that adds items from the Dante event and some other less important things.',
    variants: {
      fl: '/files/v1.2.6/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.2.6§8§l].zip',
      ov: '/files/v1.2.6/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.2.6§8§l].zip',
    },
  },
  {
    version: 'v1.2.5',
    name: 'Revenants & Arachnids',
    description: "Adds items from the T5 Revenant Update and Spider's Den overhaul.",
    variants: {
      fl: '/files/v1.2.5/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.2.5§8§l].zip',
      ov: '/files/v1.2.5/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.2.5§8§l].zip',
    },
  },
  {
    version: 'v1.69',
    name: 'April Fools!',
    description: 'Adds all the textures, ever.',
    variants: {
      fl: '/files/v1.69/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.69§8§l].zip',
      ov: '/files/v1.69/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.69§8§l].zip',
    },
  },
  {
    version: 'v1.2.4',
    name: 'Wither Swords Redux',
    description: 'Adds textures for the Wither Swords as well as other dungeon items (and fixes!).',
    variants: {
      fl: '/files/v1.2.4/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.2.4§8§l].zip',
      ov: '/files/v1.2.4/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.2.4§8§l].zip',
    },
  },
  {
    version: 'v1.2.3',
    name: 'Mod UIs',
    description: 'Introduces custom furf-styled UI to all your favorite SkyBlock mods.',
    variants: {
      fl: '/files/v1.2.3/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.2.3§8§l].zip',
      ov: '/files/v1.2.3/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.2.3§8§l].zip',
    },
  },
  {
    version: 'v1.2.2',
    name: 'Dwarven Mines and Internal Rewrite',
    description: 'Adds textures for most items within the Dwarven Mines, pack rewrite included.',
    variants: {
      fl: '/files/v1.2.2/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.2.2§8§l].zip',
      ov: '/files/v1.2.2/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.2.2§8§l].zip',
    },
  },
  {
    version: 'v1.1',
    name: 'someone was too lazy to give it a title',
    description: 'someone was too lazy to give it a description (adds a bunch of misc items)',
    variants: {
      fl: '/files/v1.1/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.1.0§8§l].zip',
      ov: '/files/v1.1/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.1.0§8§l].zip',
    },
  },
  {
    version: 'v1.0',
    name: 'FULL Release',
    description: 'The full release of FurfSky Reborn! Now with new textures for more Dungeon items!',
    variants: {
      fl: '/files/v1.0/§r§lFurfSky §c§lR§6§le§e§lb§a§lo§9§lr§d§ln §8§lFL §8§l[§71.0.0§8§l].zip',
      ov: '/files/v1.0/§r§lFurfSky §c§lR§6§le§e§lb§a§lo§9§lr§d§ln §8§lOV §8§l[§71.0.0§8§l].zip',
    },
  },
  {
    version: 'v0.2',
    name: 'F7 and Jacob Events',
    description: 'Adds textures for the new farming tools and items found in Floor 7 of the Catacombs.',
    variants: {
      fl: '/files/v0.2/§6Furf§5Sky §eReborn §8§lFL [§70.2.0.§8§l].zip',
      ov: '/files/v0.2/§6Furf§5Sky §eReborn §8§lOV [§70.2.0.§8§l].zip',
    },
  },
];
