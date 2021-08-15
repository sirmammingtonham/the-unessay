const BACKGROUND_MUSIC = undefined;

const assetData = {
  intro: {
    "Pokemon Platinum - Jubilife City.mp3": BACKGROUND_MUSIC,
  },
  background: {
    "1-07 Lake.mp3": BACKGROUND_MUSIC,
  },
  baby: {
    "Arcade Game - Pong (1972 Atari) [Re-Uploaded].mp3": BACKGROUND_MUSIC,
    "Pong-360p.mp4": {
      caption: "Pong (Arcade, 1972)",
content: `Pong was the first video game to incorporate sound.`,
    },
    "Arcade Game - Gun Fight.mp4": {
      caption: "Gun Fight (Arcade, 1975)",
    },
    "Arcade Longplay - Breakout.mp4": {
      caption: "Breakout (Arcade, 1976)",
      // ported to atari 2600 later
    },
    "Space Invaders.mp4": {
      caption: "Space Invaders (Arcade, 1978)",
    },
  },
  arcade: {
    "Pac-man theme remix - By Arsenic1987.mp3": BACKGROUND_MUSIC,
    "Pac-Man Original.mp4": {
      caption: "Pac-Man (Arcade, 1980)",
    },
    "frogger.mp4": {
      caption: "Frogger (Arcade, 1981)",
    },
    "Pole Position.mp4": {
      caption: "Pole Position (Arcade, 1982)",
    },
    "Rally-x.mp4": {
      caption: "Rally-X (Arcade, 1980)",
    },
    "Journey Escape.mp4": {
      caption: "Journey Escape (Atari 2600, 1982)",
    },
    "Gyruss.mp4": {
      caption: "Gyruss (Arcade, 1983)",
      volume: 0.5,
    },
  },
  consoles: {
    "Super Mario Bros. Original Theme by Nintendo.mp3": BACKGROUND_MUSIC,
    "mariobro_Trim.mp4": {
      caption: "Super Mario Bros. (Famicon/NES, 1985)",
    },
    "Final Fantasy NES Solo White Mage.mp4": {
      caption: "Final Fantasy (NES, 1987)",
    },
    "[c64] Sanxion (1986)-WDg1GX37bkU_Trim.mp4": {
      caption: "Sanxion (Commodore 64, 1986)",
    },
    "Commando (C64) gameplay.mp4": {
      caption: "Commando (Commodore 64, 1985)",
    },
    "Super Nintendo - Donkey Kong Country (Part 1_40 Jungle Hijinxs!)-DoaaAuLmGyU_Trim.mp4":
      {
        caption: "Donkey Kong Country (SNES, 1994)",
        volume: 0.5,
      },
    "Pokemon Blue (GB _ Game Boy) - Vizzed.com GamePlay-cnEOLsf-2bM_Trim.mp4": {
      caption: "Pokémon Red/Blue (Game Boy, 1996)",
    },
  },
  sampling: {
    "PASSING BREEZE (Out Run).mp3": BACKGROUND_MUSIC,
    "../arcade/Gyruss.mp4": {
      caption: "Gyruss (Arcade, 1983)",
    },
    "Arcade Longplay [519] Marble Madness-XzlA1JTPMto_Trim.mp4": {
      caption: "Marble Madness (Arcade, 1984)",
    },
    "1987 Outrun Passing Breeze Arcade Old School Game Playthrough  Retro Game-hMv0Pg1AxFc_Trim.mp4":
      {
        caption: "Out Run (Arcade, 1986)",
      },
    "linktothepast.mp4": {
      caption: "The Legend of Zelda: A Link to the Past (SNES 1991)",
    },
    "Ryu Strategy - Defeating Sagat on Hardest Difficulty (Street Fighter 2)-TH5_OuY03Mc.mp4":
      {
        caption: "Street Fighter II: The World Warrior (Arcade, 1991)",
      },
    "Streets of Rage 2 - Stage 7 (Axel, Hard)-8Tt9OtkL6UU_Trim.mp4": {
      caption: "Streets of Rage 2 (Sega Genesis, 1992)",
    },
    "Super Return of the Jedi Boss Battles-v8VKQ9-5oQ8_Trim.mp4": {
      caption: "Super Star Wars: Return of the Jedi (SNES, 1994)",
    },
  },
  midi: {
    "Doom E1M1 (Classic Midi Version).mp3": BACKGROUND_MUSIC,
    "DOOM - [1993] ... (MS-DOS_PC) Gameplay-oJXjR49NU6E_Trim.mp4": {
      caption: "Doom (MS-DOS, 1993)",
    },
    "Castle of Dr. Brain - video game Loop Demo (MT-32 music) PC MS-DOS, 1991-75hpsc8wOaU_Trim.mp4":
      {
        caption: "Castle of Dr. Brain (Amiga/MS-DOS, 1991)",
        volume: 0.5,
      },
    "Monkey Island 2 Lechuck's Revenge - Intro_Opening FR (Roland MT-32) PC MS-DOS Game, 1991-QN_LFCjv0Vo_Trim.mp4":
      {
        caption: "Monkey Island 2: LeChuck's Revenge (Amiga, 1991)",
      },
    "Day Of The Tentacle - Loop Demo -  MT32 Music (1993, DOS, ENG)-EYgi_D8uyTQ_Trim.mp4":
      {
        caption: "Day of the Tentacle (MS-DOS, 1993)",
      },
  },
  cd: {
    "Final Fantasy VII - One Winged Angel [HQ].mp3": BACKGROUND_MUSIC,
    "Final Fantasy 7 ... (PS1) Gameplay-Ha9N-I_3aIc_Trim.mp4": {
      caption: "Final Fantasy VII (PlayStation, 1997)",
    },
    "Ys Book II Intro Turbografx CD-5a0GVtsK7nU_Trim.mp4": {
      caption: "Ys I & II (TurboGrafx-CD, 1989)",
    },
    "Castlevania - Symphony of the Night (PS1) - Part 2-pfz8mLTG9Ok_Trim.mp4": {
      caption: "Castlevania: Symphony of the Night (PlayStation, 1997)",
      volume: 0.5,
    },
    "gta ps1-02kMHWKaMg8_Trim.mp4": {
      caption: "Grand Theft Auto (MS-DOS/PlayStation, 1997)",
    },
    "Dance Dance Revolution USA PSX (2001)-I588xfrafCM_Trim.mp4": {
      caption: "Dance Dance Revolution (Arcade/PlayStation, 1998/1999)",
      volume: 0.5,
    },
    "Pokémon Diamond (NDS) - Longplay Part 1_2-D4O77H95aTg_Trim.mp4": {
      caption: "Pokémon Diamond and Pearl (Nintendo DS, 2006)",
    },
  },
  // dynamic: { "Main Title - Banjo-Kazooie.mp3": BACKGROUND_MUSIC },
  modern: {
    "Destiny 2 - Beyond Light Original Soundtrack - Track 06 - Deep Stone Lullaby.mp3":
      BACKGROUND_MUSIC,
    "Halo CE Anniversary Mission 4- The Silent Cartographer (No Commentary)-wR86Wda59VI_Trim.mp4":
      {
        caption: "Halo: Combat Evolved [Anniversary] (Xbox, 2001)",
      },
    "The moment I fell in love with the Deep Stone Crypt Raid-ClSL0c4043s_Trim.mp4":
      {
        caption: "Destiny 2 (PC/PS4/Xbox One, 2017)",
      },
    "GTA 5 Radio Station Pack - Liberty Rock Radio, V-ROCK, K-DST, K-ROSE, Radio X, L.C.H.C, Tuff Gong-k0HNxHS_UUY_Trim.mp4":
      {
        caption: "Grand Theft Auto V (PS3/Xbox 360, 2013)",
        volume: 0.5,
      },
    "Breath of the Wild - Switch Exploration Gameplay. No commentary-jc9buqCEVRw_Trim.mp4":
      {
        caption: "The Legend of Zelda: Breath of the Wild (Nintendo Switch/Wii U, 2017)",
      },
    "[Undertale] Sans' boss fight - Genocide Run-Vr4IYjeplJA_Trim.mp4": {
      caption: "Undertale (PC, 2015)",
      volume: 0.5,
    },
    "Cuphead Gameplay No Commentary - 8 Minutes of Inkwell Isle (Direct Feed)-5Yuh40ywJIE_Trim.mp4":
      {
        caption: "Cuphead (PC/Xbox One, 2017)",
        volume: 0.5,
      },
    "GRIS - 10 Minutes of Gameplay (No Commentary)-2WMxpRnO5w0_Trim.mp4": {
      caption: "Gris (PC/MacOS/Nintendo Switch, 2018)",
    },
  },
  end: { "Pokemon Platinum - Jubilife City.mp3": BACKGROUND_MUSIC },
};

export default assetData;
