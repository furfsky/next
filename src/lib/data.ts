interface Release {
  title: string;
  version: string;
  summary?: string;
  downloads: {
    [k: `1.${number}`]: {
      full: string;
      overlay?: string;
      overlayPlus?: string;
    };
  };
}

export const releases: Release[] = [
  {
    title: "Unnamed",
    version: "0.1.1",
    summary: "Fixed Fot, Last Breath and Holy Dragon.",
    downloads: {
      "1.8.9": {
        full: "https://www.mediafire.com/file/a9abf7s5ajsj6ck/%C2%A76Furf%C2%A75Sky_%C2%A7eReborn_%C2%A78%C2%A7l%5B%C2%A770.1.1%C2%A78%C2%A7l%5D.zip/file",
      },
    },
  },
  {
    title: "F7 and Jacob Events",
    version: "0.2.0",
    summary: "Adds textures for the new farming tools and items found in Floor 7 of the Catacombs.",
    downloads: {
      "1.8.9": {
        full: "https://www.mediafire.com/file/ft3tp78827re4rj/%C2%A76Furf%C2%A75Sky_%C2%A7eReborn_%C2%A78%C2%A7lFL_%5B%C2%A770.2.0.%C2%A78%C2%A7l%5D.zip/file",
        overlay:
          "https://www.mediafire.com/file/s4r98fe6o8ylun0/%C2%A76Furf%C2%A75Sky_%C2%A7eReborn_%C2%A78%C2%A7lOV_%5B%C2%A770.2.0.%C2%A78%C2%A7l%5D.zip/file",
      },
    },
  },
  {
    title: "Full Release",
    version: "1.0.0",
    summary: "The full release of FurfSky Reborn! Now with new textures for more Dungeon items!",
    downloads: {
      "1.8.9": {
        full: "https://www.mediafire.com/file/lk2is1j6n63p2dj/%C2%A7r%C2%A7lFurfSky_%C2%A7c%C2%A7lR%C2%A76%C2%A7le%C2%A7e%C2%A7lb%C2%A7a%C2%A7lo%C2%A79%C2%A7lr%C2%A7d%C2%A7ln_%C2%A78%C2%A7lFL_%C2%A78%C2%A7l%5B%C2%A771.0.0%C2%A78%C2%A7l%5D.zip/file",
        overlay:
          "https://www.mediafire.com/file/511i1misknnkw56/%C2%A7r%C2%A7lFurfSky_%C2%A7c%C2%A7lR%C2%A76%C2%A7le%C2%A7e%C2%A7lb%C2%A7a%C2%A7lo%C2%A79%C2%A7lr%C2%A7d%C2%A7ln_%C2%A78%C2%A7lOV_%C2%A78%C2%A7l%5B%C2%A771.0.0%C2%A78%C2%A7l%5D.zip/file",
      },
    },
  },
  {
    title: "Unnamed",
    version: "1.1.0",
    downloads: {
      "1.8.9": {
        full: "https://www.mediafire.com/file/cyhvloath8e1iwi/%C2%A7r%C2%A7lFurfSky_%C2%A76%C2%A7lReborn_%C2%A78%C2%A7lFL_%C2%A78%C2%A7l%5B%C2%A771.1.0%C2%A78%C2%A7l%5D.zip/file",
        overlay:
          "https://www.mediafire.com/file/1gd9xi0lwqbgx4g/%C2%A7r%C2%A7lFurfSky_%C2%A76%C2%A7lReborn_%C2%A78%C2%A7lOV_%C2%A78%C2%A7l%5B%C2%A771.1.0%C2%A78%C2%A7l%5D.zip/file",
      },
    },
  },
  {
    title: "Dwarven Mines and Internal Rewrite",
    version: "1.2.1",
    downloads: {
      "1.8.9": {
        full: "https://www.mediafire.com/file/di7u5qxs02ur0fv/%C2%A7r%C2%A7lFurfSky_%C2%A76%C2%A7lReborn_%C2%A78%C2%A7lFL_%C2%A78%C2%A7l%5B%C2%A771.2.1%C2%A78%C2%A7l%5D.zip/file",
      },
    },
  },
  {
    title: "Dwarven Mines and Internal Rewrite",
    version: "1.2.2",
    summary: "Adds textures for most items within the Dwarven Mines, pack rewrite included.",
    downloads: {
      "1.8.9": {
        full: "https://www.mediafire.com/file/ccnkyrcw5lmv9tr/%C2%A7r%C2%A7lFurfSky_%C2%A76%C2%A7lReborn_%C2%A78%C2%A7lFL_%C2%A78%C2%A7l%5B%C2%A771.2.2%C2%A78%C2%A7l%5D.zip/file",
        overlay:
          "https://www.mediafire.com/file/gqj3wji4n5krus4/%C2%A7r%C2%A7lFurfSky_%C2%A76%C2%A7lReborn_%C2%A78%C2%A7lOV_%C2%A78%C2%A7l%5B%C2%A771.2.2%C2%A78%C2%A7l%5D.zip/file",
        overlayPlus:
          "http://www.mediafire.com/file/9hd4odl306cw0oj/§r§lFurfSky+§6§lReborn+§8§lOV+§8§l%5B§71.2.2§8§l%5D.zip/file",
      },
    },
  },
  {
    title: "Mod UIs",
    version: "1.2.3",
    summary: "Introduces custom furf-styled UI to all your favorite SkyBlock mods.",
    downloads: {
      "1.8.9": {
        full: "https://www.mediafire.com/file/m6eus5i7uux26k4/§r§lFurfSky+§6§lReborn+§8§lFL+§8§l[§71.2.3§8§l].zip/file",
        overlay:
          "https://www.mediafire.com/file/m6eus5i7uux26k4/§r§lFurfSky+§6§lReborn+§8§lFL+§8§l[§71.2.3§8§l].zip/file",
      },
    },
  },
  {
    title: "Wither Swords Redux",
    version: "1.2.4",
    summary: "Adds textures for the Wither Swords as well as other dungeon items (and fixes!).",
    downloads: {
      "1.8.9": {
        full: "https://www.mediafire.com/file/2gytssx79uqqdu2/rlFurfSky_6lReborn_8lFL_8l71.2.48l.zip/file",
        overlay: "https://www.mediafire.com/file/lx62225ohrtfl67/rlFurfSky_6lReborn_8lOV_8l71.2.48l.zip/file",
      },
    },
  },
  {
    title: "Unnamed",
    version: "1.2.4.1",
    downloads: {
      "1.8.9": {
        full: "https://www.mediafire.com/file/hyqr5h1bpcy0don/§r§lFurfSky+§6§lReborn+§8§lFL+§8§l[§71.2.4.1§8§l].zip/file",
        overlay:
          "https://www.mediafire.com/file/47urrs51gd15eip/§r§lFurfSky+§6§lReborn+§8§lOV+§8§l[§71.2.4.1§8§l].zip/file",
      },
    },
  },
  {
    title: "April Fools!",
    version: "1.69.0",
    summary: "Adds all the textures, ever.",
    downloads: {
      "1.8.9": {
        full: "https://www.mediafire.com/file/ushyceewhc1i361/FurfSkyReborn_1.2.5.zip/file",
      },
    },
  },
  {
    title: "Revenants & Arachnids",
    version: "1.2.5",
    summary: "Adds items from the T5 Revenant Update and Spider's Den overhaul.",
    downloads: {
      "1.8.9": {
        full: "https://www.mediafire.com/file/abwd0ckx5c9648i/%C2%A7r%C2%A7lFurfSky_%C2%A76%C2%A7lReborn_%C2%A78%C2%A7lFL_%C2%A78%C2%A7l%5B%C2%A771.2.6%C2%A78%C2%A7l%5D.zip/file",
        overlay:
          "https://www.mediafire.com/file/dt6ifmp4z3iqnkl/%C2%A7r%C2%A7lFurfSky_%C2%A76%C2%A7lReborn_%C2%A78%C2%A7lOV_%C2%A78%C2%A7l%5B%C2%A771.2.6%C2%A78%C2%A7l%5D.zip/file",
      },
    },
  },
  {
    title: "La Resistance",
    version: "1.2.6",
    summary: "Quick update that adds items from the Dante event and some other less important things.",
    downloads: {
      "1.8.9": {
        full: "https://www.mediafire.com/file/abwd0ckx5c9648i/%C2%A7r%C2%A7lFurfSky_%C2%A76%C2%A7lReborn_%C2%A78%C2%A7lFL_%C2%A78%C2%A7l%5B%C2%A771.2.6%C2%A78%C2%A7l%5D.zip/file",
        overlay:
          "https://www.mediafire.com/file/dt6ifmp4z3iqnkl/%C2%A7r%C2%A7lFurfSky_%C2%A76%C2%A7lReborn_%C2%A78%C2%A7lOV_%C2%A78%C2%A7l%5B%C2%A771.2.6%C2%A78%C2%A7l%5D.zip/file",
      },
    },
  },
  {
    title: "The Update that Textured Everything*",
    version: "1.3.0",
    summary:
      "Adds post-Dante event item textures, some armor sets, some miscellaneous items, changes to existing items, UI both SkyBlock and Mod, new Vanilla textures, and bug fixes.",
    downloads: {
      "1.8.9": {
        full: "https://www.mediafire.com/file/o2yyksigdml2mrw/%C2%A7r%C2%A7lFurfSky_%C2%A76%C2%A7lReborn_%C2%A78%C2%A7lFL_%C2%A78%C2%A7l%5B%C2%A771.3%C2%A78%C2%A7l%5D.zip/file",
        overlay:
          "https://www.mediafire.com/file/1o3zs4li5wr3hq4/%C2%A7r%C2%A7lFurfSky_%C2%A76%C2%A7lReborn_%C2%A78%C2%A7lOV_%C2%A78%C2%A7l%5B%C2%A771.3%C2%A78%C2%A7l%5D.zip/file",
        overlayPlus:
          "https://www.mediafire.com/file/25cms0mxhrilqfd/%C2%A7r%C2%A7lFurfSky_%C2%A76%C2%A7lReborn_%C2%A78%C2%A7lOV%2B_%C2%A78%C2%A7l%5B%C2%A771.3%C2%A78%C2%A7l%5D.zip/file",
      },
    },
  },
  {
    title: "Voidgloom Twilight",
    version: "1.3.1",
    summary: "Adds textures for Enderman Slayer along with new SkyBlock and Mod UI, and of course bug fixes.",
    downloads: {
      "1.8.9": {
        full: "https://www.mediafire.com/file/tsjigmm4157j8ei/%C2%A7r%C2%A7lFurfSky_%C2%A76%C2%A7lReborn_%C2%A78%C2%A7lFL_%C2%A78%C2%A7l%5B%C2%A771.3.1%C2%A78%C2%A7l%5D.zip/file",
        overlay:
          "https://www.mediafire.com/file/00lcbxan07y8yuz/%C2%A7r%C2%A7lFurfSky_%C2%A76%C2%A7lReborn_%C2%A78%C2%A7lOV_%C2%A78%C2%A7l%5B%C2%A771.3.1%C2%A78%C2%A7l%5D.zip/file",
        overlayPlus:
          "https://www.mediafire.com/file/5wrsj94zq97u8k0/%C2%A7r%C2%A7lFurfSky_%C2%A76%C2%A7lReborn_%C2%A78%C2%A7lOV%2B_%C2%A78%C2%A7l%5B%C2%A771.3.1%C2%A78%C2%A7l%5D.zip/file",
      },
    },
  },
  {
    title: "Optimized",
    version: "1.3.2",
    summary: "Lots of new Pets, Items, updates to old items, but also a ton of optimizations!!!!!",
    downloads: {
      "1.8.9": {
        full: "https://www.mediafire.com/file/f5m9182v7q7a5a0/%C2%A7r%C2%A7lFurfSky_%C2%A76%C2%A7lReborn_%C2%A78%C2%A7lFL_%C2%A78%C2%A7l%5B%C2%A771.3.2%C2%A78%C2%A7l.zip/file",
        overlay:
          "https://www.mediafire.com/file/8cjkv9urhnvao30/%C2%A7r%C2%A7lFurfSky_%C2%A76%C2%A7lReborn_%C2%A78%C2%A7lOV_%C2%A78%C2%A7l%5B%C2%A771.3.2%C2%A78%C2%A7l%5D.zip/file",
        overlayPlus:
          "https://www.mediafire.com/file/8fasbkeo8q4h52o/%C2%A7r%C2%A7lFurfSky_%C2%A76%C2%A7lReborn_%C2%A78%C2%A7lOV%2B_%C2%A78%C2%A7l%5B%C2%A771.3.2%C2%A78%C2%A7l%5D.zip/file",
      },
    },
  },
  {
    title: "Journey's Beginning",
    version: "1.4.0",
    summary:
      "Adds all of the new Crystal Hollows items along with a bunch of miscellaneous items, changes, and fixes.",
    downloads: {
      "1.8.9": {
        full: "https://www.mediafire.com/file/55unsxtyyw41cj2/%C2%A7r%C2%A7lFurfSky_%C2%A76%C2%A7lReborn_%C2%A78%C2%A7lFL_%C2%A78%C2%A7l%5B%C2%A771.4%C2%A78%C2%A7l%5D.zip/file",
        overlay:
          "https://www.mediafire.com/file/sqfbqszzxvjnsjn/%C2%A7r%C2%A7lFurfSky_%C2%A76%C2%A7lReborn_%C2%A78%C2%A7lOV_%C2%A78%C2%A7l%5B%C2%A771.4%C2%A78%C2%A7l%5D.zip/file",
        overlayPlus:
          "https://www.mediafire.com/file/cnn16e52t86i16q/%C2%A7r%C2%A7lFurfSky_%C2%A76%C2%A7lReborn_%C2%A78%C2%A7lOV%2B_%C2%A78%C2%A7l%5B%C2%A771.4%C2%A78%C2%A7l%5D.zip/file",
      },
    },
  },
  {
    title: "Rosetta's Wares",
    version: "1.4.1",
    summary:
      "Adds textures for all the new arrows, early game armor sets, revamps reforge stones, adds several pets, and a ton of optimizations.",
    downloads: {
      "1.8.9": {
        full: "https://www.mediafire.com/file/bg9tvhiburm0r9s/%C2%A7r%C2%A7lFurfSky_%C2%A76%C2%A7lReborn_%C2%A78%C2%A7lFL_%C2%A78%C2%A7l%5B%C2%A771.4.1%C2%A78%C2%A7l%5D.zip/file",
        overlay:
          "https://www.mediafire.com/file/qf6s00vdsj8stri/%C2%A7r%C2%A7lFurfSky_%C2%A76%C2%A7lReborn_%C2%A78%C2%A7lOV_%C2%A78%C2%A7l%5B%C2%A771.4.1%C2%A78%C2%A7l%5D.zip/file",
      },
    },
  },
  {
    title: "(Not So) Set In Stone",
    version: "1.4.2",
    summary: "New Spooky Festival event items, an insane amount of changes, and quite a few fixes.",
    downloads: {
      "1.8.9": {
        full: "https://www.mediafire.com/file/if1qxjirykrqoor/%C2%A72%C2%A7lFurf%C2%A7b%C2%A7lSky_%C2%A75%C2%A7lReborn_%C2%A78%C2%A7lFL%C2%A78%C2%A7l%5B%C2%A771.4.2%C2%A78%C2%A7l%5D.zip/file",
        overlay:
          "https://www.mediafire.com/file/e5gay6604v77euu/%C2%A72%C2%A7lFurf%C2%A7b%C2%A7lSky_%C2%A75%C2%A7lReborn_%C2%A78%C2%A7lOV_%C2%A78%C2%A7l%5B%C2%A771.4.2%C2%A78%C2%A7l%5D.zip/file",
      },
    },
  },
  {
    title: "Overheated",
    version: "1.5.0",
    summary:
      "FurfSky Reborn's LARGEST update yet, with a large focus on items from the Crimson Isle update, compounded with a lot of other new textures, changes, fixes. and rewrites.",
    downloads: {
      "1.8.9": {
        full: "https://www.mediafire.com/file/cy2cefy47gs1lj1/%C2%A74%C2%A7lFurfSky_%C2%A76%C2%A7lReborn_%C2%A78%C2%A7lFULL.zip/file",
        overlay:
          "https://www.mediafire.com/file/0yomt3g8xf1g53m/%C2%A74%C2%A7lFurfSky_%C2%A76%C2%A7lReborn_%C2%A78%C2%A7lOV.zip/file",
      },
    },
  },
  {
    title: "Permafrost",
    version: "1.6.0",
    summary:
      "Adds textures for the Winter Island update, some missing Crimson Isle items, the Spider's Den Revamp, and includes a rewrite of the pack's UI.",
    downloads: {
      "1.8.9": {
        full: "https://cdn.modrinth.com/data/khMbd0K1/versions/2k3Ffs2I/§b§lFurfSky%20§f§lReborn%20§8§lFULL.zip",
        overlay:
          "https://cdn.modrinth.com/data/khMbd0K1/versions/14eGcKwO/§b§lFurfSky%20§f§lReborn%20§8§lOVERLAY.zip",
      },
    },
  },
  {
    title: "Full Bloom",
    version: "1.7.0",
    summary: "Garden, Accessories, The Rift and Crimson Isles.",
    downloads: {
      "1.8.9": {
        full: "https://cdn.modrinth.com/data/khMbd0K1/versions/BesdsSFC/§aFurfSky%20Reborn%20§8§lFULL§8.zip",
        overlay:
          "https://cdn.modrinth.com/data/khMbd0K1/versions/rRc6EBVF/§aFurfSky%20Reborn%20§8§lOVERLAY§8.zip",
      },
    },
  },
  {
    title: "Full Bloom (Patch 2)",
    version: "1.7.2",
    summary: "Even more fixes for Full Bloom",
    downloads: {
      "1.8.9": {
        full: "https://cdn.modrinth.com/data/khMbd0K1/versions/sTFEGbL9/§aFurfSky%20Reborn%20§8§lFULL§8.zip",
        overlay:
          "https://cdn.modrinth.com/data/khMbd0K1/versions/AFQIVEA2/§aFurfSky%20Reborn%20§8§lOVERLAY§8.zip",
      },
    },
  },
  {
    title: "Full Bloom (Patch 1)",
    version: "1.7.1",
    summary: "Fixes for Full Bloom",
    downloads: {
      "1.8.9": {
        full: "https://cdn.modrinth.com/data/khMbd0K1/versions/eV4uifP0/§aFurfSky%20Reborn%20§8§lFULL§8.zip",
        overlay:
          "https://cdn.modrinth.com/data/khMbd0K1/versions/rRc6EBVF/§aFurfSky%20Reborn%20§8§lOVERLAY§8.zip",
      },
    },
  },
  {
    title: "Full Bloom (Patch 3.3)",
    version: "1.7.3.3",
    summary: "Fixes head-based items as a result of Hypixel's changes.",
    downloads: {
      "1.8.9": {
        full: "https://cdn.modrinth.com/data/khMbd0K1/versions/fMUYhy5N/§a§lFurf§b§lSky%20§5§lReborn%20§8§lFULL.zip",
        overlay:
          "https://cdn.modrinth.com/data/khMbd0K1/versions/yinKro9q/§a§lFurf§b§lSky%20§5§lReborn%20§8§lOVERLAY.zip",
      },
    },
  },
  {
    title: "Full Bloom (Patch 3.2)",
    version: "1.7.3.2",
    summary: "Even even even more fixes for Full Bloom",
    downloads: {
      "1.8.9": {
        full: "https://cdn.modrinth.com/data/khMbd0K1/versions/Z3n2pUrH/§aFurfSky%20Reborn%20§8§lFULL§8.zip",
        overlay:
          "https://cdn.modrinth.com/data/khMbd0K1/versions/96BcgmJm/§aFurfSky%20Reborn%20§8§lOVERLAY§8.zip",
      },
    },
  },
  {
    title: "Full Bloom (Patch 3)",
    version: "1.7.3",
    summary: "Even even more fixes for Full Bloom",
    downloads: {
      "1.8.9": {
        full: "https://cdn.modrinth.com/data/khMbd0K1/versions/SalzBFWq/§aFurfSky%20Reborn%20§8§lFULL§8.zip",
        overlay:
          "https://cdn.modrinth.com/data/khMbd0K1/versions/b5Sv9RgC/§aFurfSky%20Reborn%20§8§lOVERLAY§8.zip",
      },
    },
  },
  {
    title: "Mayor Minery",
    version: "1.8.0",
    downloads: {
      "1.8.9": {
        full: "https://cdn.modrinth.com/data/khMbd0K1/versions/Dzth04ay/%C2%A7a%C2%A7lFurf%C2%A7b%C2%A7lSky%20%C2%A76%C2%A7lReborn%20%C2%A78%C2%A7lFULL.zip",
        overlay:
          "https://cdn.modrinth.com/data/khMbd0K1/versions/KVMKyVAM/%C2%A7a%C2%A7lFurf%C2%A7b%C2%A7lSky%20%C2%A76%C2%A7lReborn%20%C2%A78%C2%A7lOVERLAY.zip",
      },
    },
  },
  {
    title: "New Leaf",
    version: "1.9.0",
    summary: "1.21.5 Support + UI Overhaul + more textures!!",
    downloads: {
      "1.21": {
        full: "https://cdn.modrinth.com/data/khMbd0K1/versions/pQLXf70V/%C2%A7a%C2%A7lFurf%C2%A7b%C2%A7lSky%20%C2%A76%C2%A7lReborn%20%C2%A78%C2%A7lFULL%201.9%201.21.5.zip",
        overlay:
          "https://cdn.modrinth.com/data/khMbd0K1/versions/TnwyVHzM/%C2%A7a%C2%A7lFurf%C2%A7b%C2%A7lSky%20%C2%A76%C2%A7lReborn%20%C2%A78%C2%A7lOVERLAY%201.9%201.21.5.zip",
      },
      "1.8.9": {
        full: "https://cdn.modrinth.com/data/khMbd0K1/versions/6e4HNcIG/%C2%A7a%C2%A7lFurf%C2%A7b%C2%A7lSky%20%C2%A76%C2%A7lReborn%20%C2%A78%C2%A7lFULL%201.9%201.8.9.zip",
        overlay:
          "https://cdn.modrinth.com/data/khMbd0K1/versions/8nWQDW8h/%C2%A7a%C2%A7lFurf%C2%A7b%C2%A7lSky%20%C2%A76%C2%A7lReborn%20%C2%A78%C2%A7lOVERLAY%201.9%201.8.9.zip",
      },
    },
  },
  {
    title: "New Leaf (Patch 1)",
    version: "1.9.1",
    summary: "1.21.5 Support + UI Overhaul + more textures!!",
    downloads: {
      "1.21": {
        full: "https://cdn.modrinth.com/data/khMbd0K1/versions/OITsstM2/%C2%A7aFurf%C2%A7bSky%20%C2%A76Reborn%20%C2%A7f%C2%A7lFULL%C2%A7r%20%C2%A771.21.5%C2%A78.zip",
        overlay: "https://cdn.modrinth.com/data/khMbd0K1/versions/9h70KlKF/%C2%A7aFurf%C2%A7bSky%20%C2%A76Reborn%20%C2%A7f%C2%A7lOVERLAY%C2%A7r%20%C2%A771.21.5%C2%A78.zip",
      }
    },
  },

];

export const splashTextCollection: string[] = [
  "Furfsky+ but its reborn",
  "bottem text",
  "The second era of Furfsky+",
  "undefined",
  "i wanted free vbucks :(",
  "reload for another message",
  "Yet another skyblock pack",
  "please stop posting furry images.",
  "boost the server for a cool role",
  "5261796D6F6E6420486F6C74",
  "46 75 72 66 53 6B 79 20 52 65 62 6F 72 6E",
  "B99S5E17",
  "Furfsky never dies",
  "skyblock nerds apps are open btw",
  "we're trying to get an ssl cert for https support please stop pestering us",
  "Avocados 🥑 from Mexico 🇲🇽",
  "the only cookies allowed on this website are booster cookies",
  "did you do your experiments yet?",
  "god i just hate reality",
  "We have a lot of e-girls here",
  "why does the discord server exist",
  "I purchased a baby clown from the Russian terrorist black market.",
  "I don’t support furry rights, but I do support this server",
  "even more cursed than the original!",
  '"For Furries by Furries"',
  "Furfsky reborn - now with more shit, just worse.",
  "Now with 56% more shitposting!",
  "“Is this the United Airlines costumer service center?”",
  "He stomped on his fruit loops and thus became a cereal killer.",
  "why do they call it oven if you oven the cold food of out hot eat the food",
  "Help im locked in a data center",
  "what",
  "Never half-ass two things. Whole-ass one thing.",
  "Now works with Wynncraft!",
  "i can smell your fear through the screen",
  "we will steal your ip and sell it to china",
  "we will steal your china and sell it to ip",
  "i haven't left my house since furf posted on the forums!",
  "i havent left my house, tyler refuses to let me out!",
  "help, im locked in the basement",
  "i havent left my house pls help me i'm hungry",
  "fuck",
  "Is this illegal?",
  "furryegirl",
  "furryeboy AR racing simulator",
  "oh no",
  "the pack that smiles back",
  "I regret joining",
  "this is the worst thing to happen to humanity",
  "Gib coin pls I new",
  "OMG YOUTUBER GIVE COIN!!!1!!!11111!!",
  "gif bezos",
  "Making websites is hard",
  "The fur-suit is mandatory",
  "you fool you blongus you absolute utter clampongus",
  "ooga booga",
  "If I drop soap on the ground, is the soap dirty, or am I utterly screwed?",
  "doodoo woohoo",
  "it do be like that",
  "furf is into mice",
];
