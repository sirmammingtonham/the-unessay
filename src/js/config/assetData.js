const BACKGROUND_MUSIC = undefined;

const assetData = {
  intro: {
    "Pokemon Platinum - Jubilife City.mp3": BACKGROUND_MUSIC,
  },
  background: {
    "1-07 Lake.mp3": BACKGROUND_MUSIC,
    "1200x0.jpg": { caption: "Atari Home Pong (1975)" },
    "Atari-2600-Wood-4Sw-Set.png": { caption: "Atari 2600 (1977)" },
    "81ZidrCuzRL._AC_SY879_.jpg": { caption: "Pac-Man Arcade Cabinet (1980)" },
    "1200px-Commodore-64-Computer-FL.jpg": { caption: "Commodore 64 (1982)" },
    "1200px-NES-Console-Set.jpg": {
      caption: "Nintendo Entertainment System (1983)",
    },
    "Game-Boy-FL.jpg": { caption: "Game Boy (1989)" },
    "SNES-1-Player-Pak-Disc__36020.1623954804.jpg": {
      caption: "Super Nintendo Entertainment System (1990)",
    },
    "61j0V37zKcL._SL1500_.jpg": { caption: "PlayStation (1994)" },
    "Xbox-console.jpg": { caption: "Xbox (2001)" },
    "Titan.png": { caption: "Gaming PC (2020)" },
  },
  baby: {
    "Arcade Game - Pong (1972 Atari) [Re-Uploaded].mp3": BACKGROUND_MUSIC,
    "Pong-360p.mp4": {
      caption: "Pong (Arcade, 1972)",
      content: `Pong contained the first "true" sound effect from a 
video game by generating a sonar-blip.`,
    },
    "Arcade Game - Gun Fight.mp4": {
      caption: "Gun Fight (Arcade, 1975)",
      content: `First arcade game with music. Played Chopin's funeral march!
A dedicated computer chip would change code into analog sound waves on the fly.`,
    },
    "Arcade Longplay - Breakout.mp4": {
      caption: "Breakout (Arcade, 1976)",
      content: `Plays pitched tones when the ball bounces. Single player Pong!
Was later ported to the Atari 2600, which was the first console
to contain dedicated sound hardware.`,
    },
    "Space Invaders.mp4": {
      caption: "Space Invaders (Arcade, 1978)",
      content: `4 note loop that gets faster as enemies approach (initially a coding bug)!
First instance of a background soundtrack and dynamic game audio.`,
    },
  },
  arcade: {
    "Inside an Arcade _ Ambience.mp3": BACKGROUND_MUSIC,
    "Pac-Man Original.mp4": {
      caption: "Pac-Man (Arcade, 1980)",
      content: `One of the earliest and most recognizable video game jingles.
Instead of simple beeps, the tone is being modulated slightly to produce the sound.`,
    },
    "frogger.mp4": {
      caption: "Frogger (Arcade, 1981)",
      content: `Switches out background music as you complete levels.
Contains 13 different gameplay tracks!`,
    },
    "Pole Position.mp4": {
      caption: "Pole Position (Arcade, 1982)",
      content: `Simulated real world engine noise by playing a tone.
Early case of simulating real world sounds in a video game.`,
    },
    "Rally-x.mp4": {
      caption: "Rally-X (Arcade, 1980)",
      content: `First game to feature continuous, melodic background music.
First game to us a digital-to-analog (DAC) converter to produce sampled tones.`,
    },
    "Journey Escape.mp4": {
      caption: "Journey Escape (Atari 2600, 1982)",
      content: `Initially released for arcade cabinets. 
First instance of licensed music (Don't Stop Believin' and more) in a video game.`,
    },
    "Gyruss.mp4": {
      caption: "Gyruss (Arcade, 1983)",
      content: `Utilized 5 synthesis sound chips and a DAC.
Very advanced sound hardware for the time
(see FM Synthesis for more)`,
      volume: 1,
    },
  },
  consoles: {
    "Super Mario Bros. Original Theme by Nintendo.mp3": BACKGROUND_MUSIC,
    "mariobro_Trim.mp4": {
      caption: "Super Mario Bros. (Famicon/NES, 1983/1985)",
      content: `Arguably the most popular soundtrack of all time.
Helped push music into an intengral part of game design, not just to draw attention.`,
    },
    "Final Fantasy NES Solo White Mage.mp4": {
      caption: "Final Fantasy (NES, 1987)",
      content: `Another critically acclaimed early sound track.`,
    },
    "[c64] Sanxion (1986)-WDg1GX37bkU_Trim.mp4": {
      caption: "Sanxion (Commodore 64, 1986)",
      content: `Won the first Golden Joystick Award for Best Soundtrack of the Year.`,
    },
    "Commando (C64) gameplay.mp4": {
      caption: "Commando (Commodore 64, 1985)",
      content: `A port of the original arcade version, the C64 version 
has a much more complex soundtrack that still follows the themes from the original.`,
    },
    "Pokemon Blue (GB _ Game Boy) - Vizzed.com GamePlay-cnEOLsf-2bM_Trim.mp4": {
      caption: "Pokémon Red/Blue (Game Boy, 1996)",
      content: `The Game Boy, despite being released a decade after the NES, 
utilized modest sound hardware to remain portable.
It only supported 4 sound channels, so technically 
the Commodore 64's chip was more advanced.`,
    },
  },
  sampling: {
    "PASSING BREEZE (Out Run).mp3": BACKGROUND_MUSIC,
    "../arcade/Gyruss.mp4": {
      caption: "Gyruss (Arcade, 1983)",
      content: `Mentioned in the Arcade Era section as the first game 
to utilize synthesis chips (wavetable synthesis).`,
      volume: 1,
    },
    "Arcade Longplay [519] Marble Madness-XzlA1JTPMto_Trim.mp4": {
      caption: "Marble Madness (Arcade, 1984)",
      content: `The first game to use an FM synth chip (Yamaha YM2151).
Notice the tonal differences between it and chiptune game audio.`,
    },
    "1987 Outrun Passing Breeze Arcade Old School Game Playthrough  Retro Game-hMv0Pg1AxFc_Trim.mp4":
      {
        caption: "Out Run (Arcade, 1986)",
        content: `Featured an in-game selectable soundtrack and made heavy use of FM synthesis. 
So much so in fact that the game's title 
has been adopted as a nickname for the synthwave music genre (outrun music)!`,
        volume: 0.7,
      },
    "linktothepast.mp4": {
      caption: "The Legend of Zelda: A Link to the Past (SNES 1991)",
      content: `Experimented with architectural acoustics.
Notice how the music has more reverb when link enters a building.`,
    },
    "Super Nintendo - Donkey Kong Country (Part 1_40 Jungle Hijinxs!)-DoaaAuLmGyU_Trim.mp4":
      {
        caption: "Donkey Kong Country (SNES, 1994)",
        volume: 0.5,
        content: `The composer was only allocated 32 kilobits to compose the soundtrack,
and was still able to create a dynamic 
and critically acclaimed jungle themed soundtrack.`,
      },
    "Ryu Strategy - Defeating Sagat on Hardest Difficulty (Street Fighter 2)-TH5_OuY03Mc.mp4":
      {
        caption: "Street Fighter II: The World Warrior (Arcade, 1991)",
        content: `Utilized voice samples extensively along with sampled sound effects and percussion.`,
      },
    "Streets of Rage 2 - Stage 7 (Axel, Hard)-8Tt9OtkL6UU_Trim.mp4": {
      caption: "Streets of Rage 2 (Sega Genesis, 1992)",
      content: `"A new high watermark for what music in games could sound like"
Utilized an FM synthesizer, sampling, and tones.
`,
    },
  },
  midi: {
    "Doom E1M1 (Classic Midi Version).mp3": BACKGROUND_MUSIC,
    "DOOM - [1993] ... (MS-DOS_PC) Gameplay-oJXjR49NU6E_Trim.mp4": {
      caption: "Doom (MS-DOS, 1993)",
      content: `The audio in this clip uses an FM sound card. 
Notice how it sounds less "full" and more electronic than 
the Roland MIDI version playing in the timeline!`,
    },
    "Castle of Dr. Brain - video game Loop Demo (MT-32 music) PC MS-DOS, 1991-75hpsc8wOaU_Trim.mp4":
      {
        caption: "Castle of Dr. Brain (Amiga/MS-DOS, 1991)",
        volume: 0.5,
        content: `Used MIDI for the soundtrack. 
Allowed for MIDI playback on the Amiga with extra hardware.`,
      },
    "Monkey Island 2 Lechuck's Revenge - Intro_Opening FR (Roland MT-32) PC MS-DOS Game, 1991-QN_LFCjv0Vo_Trim.mp4":
      {
        caption: "Monkey Island 2: LeChuck's Revenge (Amiga/MS-DOS, 1991)",
        content: `Featured a very dynamic soundtrack. 
Notice how the music seamlessly changes when the player enters a building!`,
      },
    "Day Of The Tentacle - Loop Demo -  MT32 Music (1993, DOS, ENG)-EYgi_D8uyTQ_Trim.mp4":
      {
        caption: "Day of the Tentacle (MS-DOS, 1993)",
        content: `Utilized great voice recordings in addition to MIDI audio.`,
      },
  },
  cd: {
    "Ys I Complete - First Step Towards Wars.mp3": BACKGROUND_MUSIC,
    "Ys Book II Intro Turbografx CD-5a0GVtsK7nU_Trim.mp4": {
      caption: "Ys I & II (TurboGrafx-CD, 1989)",
      content: `One of the earliest examples of Mixed Mode CD audio.
Regarded as some of the most influential video game music ever composed.`,
    },
    "Castlevania - Symphony of the Night (PS1) - Part 2-pfz8mLTG9Ok_Trim.mp4": {
      caption: "Castlevania: Symphony of the Night (PlayStation, 1997)",
      volume: 0.5,
      content: `Highly praised soundtrack that utilized the PlayStation's 
specialized formats for compressed audio playback.`,
    },
    "gta ps1-02kMHWKaMg8_Trim.mp4": {
      caption: "Grand Theft Auto (MS-DOS/PlayStation, 1997)",
      content: `PlayStation version mixed music composed for the game 
and preexisting popular music using CD audio.`,
    },
    "Dance Dance Revolution USA PSX (2001)-I588xfrafCM_Trim.mp4": {
      caption: "Dance Dance Revolution (Arcade/PlayStation, 1998/1999)",
      volume: 0.5,
      content: `PlayStation version also mixed music composed for the game 
and preexisting popular music using CD audio. 
Contained dozens of different full length tracks.`,
    },
    "Final Fantasy 7 ... (PS1) Gameplay-Ha9N-I_3aIc_Trim.mp4": {
      caption: "Final Fantasy VII (PlayStation, 1997)",
      content: `The composer Nobuo Uematsu considered using CD audio for FF7 
but decided to forgo it due to its trade-offs with performance.
He instead opted to use sounds produced by the PlayStation's internal sound sequencer.`,
    },
    "Pokémon Diamond (NDS) - Longplay Part 1_2-D4O77H95aTg_Trim.mp4": {
      caption: "Pokémon Diamond and Pearl (Nintendo DS, 2006)",
      content: `Despite the popularity of CD and streamed audio, 
the Nintendo DS still used sequenced music samples due to storage limitations.`,
    },
  },
  // dynamic: { "Main Title - Banjo-Kazooie.mp3": BACKGROUND_MUSIC },
  modern: {
    "Destiny 2 - Beyond Light Original Soundtrack - Track 06 - Deep Stone Lullaby.mp3":
      BACKGROUND_MUSIC,
    "Halo CE Anniversary Mission 4- The Silent Cartographer (No Commentary)-wR86Wda59VI_Trim.mp4":
      {
        caption: "Halo: Combat Evolved [Anniversary] (Xbox, 2001)",
        content: `The Halo theme has become iconic in pop culture.`,
      },
    "The moment I fell in love with the Deep Stone Crypt Raid-ClSL0c4043s_Trim.mp4":
      {
        caption: "Destiny 2 (PC/PS4/Xbox One, 2017)",
        content: `The melancholic orchestral soundtrack in Destiny 2's Deep Stone Crypt 
is one of the most memorable aspects of any Destiny activity.`,
      },
    "GTA 5 Radio Station Pack - Liberty Rock Radio, V-ROCK, K-DST, K-ROSE, Radio X, L.C.H.C, Tuff Gong-k0HNxHS_UUY_Trim.mp4":
      {
        caption: "Grand Theft Auto V (PS3/Xbox 360, 2013)",
        volume: 0.5,
        content: `GTA V has over 20 hours of original soundtrack,
along with 441 tracks of licensed music playing on the 16 in game radio stations.`,
      },
    "Breath of the Wild - Switch Exploration Gameplay. No commentary-jc9buqCEVRw_Trim.mp4":
      {
        caption:
          "The Legend of Zelda: Breath of the Wild (Nintendo Switch/Wii U, 2017)",
        content: `The music of Breath of the Wild is incredibly scenic and relaxing.`,
      },
    "[Undertale] Sans' boss fight - Genocide Run-Vr4IYjeplJA_Trim.mp4": {
      caption: "Undertale (PC, 2015)",
      volume: 0.5,
      content: `Megalovania emulates a chiptune style to great success.`,
    },
    "Cuphead Gameplay No Commentary - 8 Minutes of Inkwell Isle (Direct Feed)-5Yuh40ywJIE_Trim.mp4":
      {
        caption: "Cuphead (PC/Xbox One, 2017)",
        volume: 0.5,
        content: `Cuphead shows how diverse genres can make for 
amazing music in modern games, with 51 jazz and big band tracks.`,
      },
    "GRIS - 10 Minutes of Gameplay (No Commentary)-2WMxpRnO5w0_Trim.mp4": {
      caption: "Gris (PC/MacOS/Nintendo Switch, 2018)",
      content: `The music for each level in GRIS is carefully constructed to match that level's art and mood.`,
    },
  },
  end: { "Pokemon Platinum - Jubilife City.mp3": BACKGROUND_MUSIC },
};

export default assetData;
