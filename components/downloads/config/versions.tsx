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
    name: 'Permafrost Hotfix 2',
    variants: {
      fl: '/files/v1.6.3/§b§lFurfSky §f§lReborn §8§lFULL.zip',
      ov: '/files/v1.6.3/§b§lFurfSky §f§lReborn §8§lOVERLAY.zip',
    },
  },
  {
    version: 'v1.6.2',
    name: 'Permafrost Hotfix',
    variants: {
      fl: '/files/v1.6.2/§b§lFurfSky §f§lReborn §8§lFULL.zip',
      ov: '/files/v1.6.2/§b§lFurfSky §f§lReborn §8§lOVERLAY.zip',
    },
  },
  {
    version: 'v1.6',
    name: 'Permafrost',
    variants: {
      fl: '/files/v1.6/§b§lFurfSky §f§lReborn §8§lFULL.zip',
      ov: '/files/v1.6/§b§lFurfSky §f§lReborn §8§lOVERLAY.zip',
    },
  },
  {
    version: 'v1.5.1',
    name: 'Overheated Hotfix',
    variants: {
      fl: '/files/v1.5.1/§4§lFurfSky §6§lReborn §8§lFULL.zip',
      ov: '/files/v1.5.1/§4§lFurfSky §6§lReborn §8§lOV.zip',
    },
  },
  {
    version: 'v1.5',
    name: 'Overheated',
    variants: {
      fl: '/files/v1.5/§4§lFurfSky §6§lReborn §8§lFULL.zip',
      ov: '/files/v1.5/§4§lFurfSky §6§lReborn §8§lOV.zip',
    },
  },
  {
    version: 'v1.4.2',
    name: '(Not So) Set In Stone',
    variants: {
      fl: '/files/v1.4.2/§2§lFurf§b§lSky §5§lReborn §8§lFL§8§l[§71.4.2§8§l].zip',
      ov: '/files/v1.4.2/§2§lFurf§b§lSky §5§lReborn §8§lOV §8§l[§71.4.2§8§l].zip',
    },
  },
  {
    version: 'v1.4.1',
    name: "Rosetta's Wares",
    variants: {
      fl: '/files/v1.4.1/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.4.1§8§l].zip',
      ov: '/files/v1.4.1/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.4.1§8§l].zip',
    },
  },
  {
    version: 'v1.4',
    name: "Journey's Beginning",
    description: 'Crystal Hollows items and more!',
    variants: {
      fl: '/files/v1.4/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.4§8§l].zip',
      ov: '/files/v1.4/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.4§8§l].zip',
      ovp: '/files/v1.4/§r§lFurfSky §6§lReborn §8§lOV+ §8§l[§71.4§8§l].zip',
    },
  },
  {
    version: 'v1.3.2',
    name: "v1.3's Loose Ends, Pets, and some SB UI",
    description: "Motor's name for this update sucked, so it's different here",
    variants: {
      fl: '/files/v1.3.2/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.3.2§8§l].zip',
      ov: '/files/v1.3.2/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.3.2§8§l].zip',
      ovp: '/files/v1.3.2/§r§lFurfSky §6§lReborn §8§lOV+ §8§l[§71.3.2§8§l].zip',
    },
  },
  {
    version: 'v1.3.1',
    name: 'Voidgloom Twilight',
    variants: {
      fl: '/files/v1.3.1/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.3.1§8§l].zip',
      ov: '/files/v1.3.1/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.3.1§8§l].zip',
      ovp: '/files/v1.3.1/§r§lFurfSky §6§lReborn §8§lOV+ §8§l[§71.3.1§8§l].zip',
    },
  },
  {
    version: 'v1.3',
    name: 'The Update that Textured Everything*',
    variants: {
      fl: '/files/v1.3/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.3§8§l].zip',
      ov: '/files/v1.3/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.3§8§l].zip',
      ovp: '/files/v1.3/§r§lFurfSky §6§lReborn §8§lOV+ §8§l[§71.3§8§l].zip',
    },
  },
  {
    version: 'v1.2.6',
    name: 'La Resistance',
    variants: {
      fl: '/files/v1.2.6/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.2.6§8§l].zip',
      ov: '/files/v1.2.6/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.2.6§8§l].zip',
    },
  },
  {
    version: 'v1.2.5',
    name: "T5 Revs + Spider's Den items",
    variants: {
      fl: '/files/v1.2.5/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.2.5§8§l].zip',
      ov: '/files/v1.2.5/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.2.5§8§l].zip',
    },
  },
  {
    version: 'v1.69',
    name: 'April Fools!',
    variants: {
      fl: '/files/v1.69/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.69§8§l].zip',
      ov: '/files/v1.69/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.69§8§l].zip',
    },
  },
  {
    version: 'v1.2.4',
    name: 'Wither Swords Redux',
    variants: {
      fl: '/files/v1.2.4/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.2.4§8§l].zip',
      ov: '/files/v1.2.4/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.2.4§8§l].zip',
    },
  },
  {
    version: 'v1.2.3',
    name: 'Mod UIs',
    description: 'Yes, 99% of the SB mods you can name are textured here',
    variants: {
      fl: '/files/v1.2.3/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.2.3§8§l].zip',
      ov: '/files/v1.2.3/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.2.3§8§l].zip',
    },
  },
  {
    version: 'v1.2.2',
    name: 'Dwarven Mines and Internal Rewrite',
    variants: {
      fl: '/files/v1.2.2/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.2.2§8§l].zip',
      ov: '/files/v1.2.2/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.2.2§8§l].zip',
    },
  },
  {
    version: 'v1.1',
    name: 'someone was too lazy to give it a title',
    variants: {
      fl: '/files/v1.1/§r§lFurfSky §6§lReborn §8§lFL §8§l[§71.1.0§8§l].zip',
      ov: '/files/v1.1/§r§lFurfSky §6§lReborn §8§lOV §8§l[§71.1.0§8§l].zip',
    },
  },
  {
    version: 'v1.0',
    name: 'FULL RELEASE',
    variants: {
      fl: '/files/v1.0/§r§lFurfSky §c§lR§6§le§e§lb§a§lo§9§lr§d§ln §8§lFL §8§l[§71.0.0§8§l].zip',
      ov: '/files/v1.0/§r§lFurfSky §c§lR§6§le§e§lb§a§lo§9§lr§d§ln §8§lOV §8§l[§71.0.0§8§l].zip',
    },
  },
  {
    version: 'v0.2',
    name: ' F7 and Jacob Events',
    variants: {
      fl: '/files/v0.2/§6Furf§5Sky §eReborn §8§lFL [§70.2.0.§8§l].zip',
      ov: '/files/v0.2/§6Furf§5Sky §eReborn §8§lOV [§70.2.0.§8§l].zip',
    },
  },
];
