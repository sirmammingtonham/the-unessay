import * as THREE from "three";
import { ImageItem, VideoItem } from "./Item";
import { BufferGeometryUtils } from "../utils/BufferGeometryUtils";

export default class Section extends THREE.Group {
  constructor(opts = { timeline, section }) {
    super();
    Object.assign(this, opts);

    switch (this.section) {
      case "bibliography": {
        this.createBibliographySection();
        break;
      }
      case "intro": {
        this.createIntroSection();
        break;
      }
      case "background": {
        this.createBackgroundSection();
        break;
      }
      case "baby": {
        this.createBabySection();
        break;
      }
      case "arcade": {
        this.createArcadeSection();
        break;
      }
      case "consoles": {
        this.createConsolesSection();
        break;
      }
      case "sampling": {
        this.createSamplingSection();
        break;
      }
      case "midi": {
        this.createMIDISection();
        break;
      }
      case "cd": {
        this.createCdSection();
        break;
      }
      case "dynamic": {
        this.createDynamicSection();
        break;
      }
      case "modern": {
        this.createModernSection();
        break;
      }
      case "end": {
        this.createEndSection();
        break;
      }
      default: {
        this._addTitle("burh");
        break;
      }
    }
  }

  createIntroSection() {
    this._addImage({
      file: "assets/intro/Pokemon+Music.png",
      scalex: 1200,
      scaley: 800,
      scalez: 1,
      x: 0,
      y: 0,
      z: -500,
    });

    this._addText({
      text: "EXPLORE\nVIDEO GAME HISTORY\nTHROUGH MUSIC\n& SOUND",
      font: "SuisseIntl-Bold",
      size: 60,
      x: 0,
      y: 0,
      z: 0,
    });

    this.addIntroBadge();
  }

  addIntroBadge() {
    this.badge = new THREE.Group();

    let serifTextGeom = new THREE.TextGeometry("Scroll or hold to advance.", {
      font: this.timeline.assets.fonts["Schnyder L"],
      size: 26,
      height: 0,
      curveSegments: 6,
    });
    serifTextGeom.center();

    let serifText = new THREE.Mesh(serifTextGeom, this.timeline.textMat);
    serifText.position.set(0, 0, 1);
    this.badge.add(serifText);

    this.badge.position.set(0, 0, 50);
    this.badge.position.y =
      this.timeline.c.size.w < 600
        ? -this.timeline.c.size.h + 90
        : -this.timeline.c.size.h / 2 + 90;
    if (this.timeline.c.size.w < 600) this.badge.scale.set(1.5, 1.5, 1);

    this.add(this.badge);
  }

  createBackgroundSection() {
    this._addTitle("BACKGROUND");

    this._addMultilineText({
      text: `The music and sounds of video games enhance gameplay immensely,
and are often the most memorable aspects of our favorite games!
However, early video games were limited to the simple sounds 
of programmable sound generator chips.`,
      font: "SuisseIntl-Bold",
      size: 26,
      x: 0,
      y: 0,
      z: -800,
      offset: 20,
    });

    this._addMultilineText({
      text: `So how did we get from the simple beeps and bloops of early games 
to the dynamic and complex soundtracks of modern games?
Keep scrolling to find out!`,
      font: "SuisseIntl-Bold",
      size: 26,
      x: 0,
      y: 0,
      z: -1700,
      offset: 20,
    });

    let id,
      itemIndex = 0;

    this.timeline.assetList["background"].forEach((filename) => {
      if (~filename.indexOf(".mp3")) return;
      if (~filename.indexOf(".mp4")) return;

      id = `background/${filename}`;

      this.timeline.items[id] = new ImageItem({
        assetId: id,
        timeline: this.timeline,
        texture: this.timeline.assets.textures["background"][filename],
        data: this.timeline.assetData["background"][filename],
        page: "background",
        itemIndex: itemIndex,
        itemIndexTotal: itemIndex,
      });

      this.add(this.timeline.items[id]);

      itemIndex++;
    });
  }

  createBabySection() {
    this._addTitle("Early Game Sound");
    this._addSubtitle("Baby Steps", -150);
    // this._addEra("The '70s", -350);

    this._addMultilineText({
      text: `Sound was first added to video games in the 1971 arcade game Computer Space.
However, the sound was simply playing in the background.
A year later, Pong was released with the first "true" sound effects.
Click a video to listen and learn more!`,
      font: "Suisse Intl",
      size: 16,
      x: 0,
      y: 0,
      z: -700,
    });

    this._addVids();
  }

  createArcadeSection() {
    this._addTitle("ARCADE ERA");
    this._addSubtitle("A glorious cacophany.", -150);
    // this._addEra("1980-1985");
    this._addMultilineText({
      text: `As technological advances were made and costs fell, 
a new generation of arcade machines were built with programmable sound generators (PSGs) 
that supported a few different voices or "channels".
Composers had very limited resources and were essentially "programmers" for music`,
      font: "Suisse Intl",
      size: 16,
      x: 0,
      y: 0,
      z: -700,
    });

    this._addMultilineText({
      text: `The popular video game music of this era 
came to be known as "chiptune" due to the timbre or quality of the sounds. 
Because of the limited number of available channels, composers often utilized 
quick arpeggios to emulate polyphonic music with the available hardware.
`,
      font: "Suisse Intl",
      size: 16,
      x: 0,
      y: 0,
      z: -1600,
    });

    this._addVids();
  }

  createConsolesSection() {
    this._addTitle("ADVENT OF HOME CONSOLES");
    this._addSubtitle("NES FTW.", -150);
    this._addGen("2nd & 3rd Gen Consoles");
    this._addMultilineText({
      text: `The first home console with sound hardware was the Atari 2600 released in 1977.
However, it was only capable of generating two tones. 
These are often referred to as the 2nd-generation of video game consoles.

As arcade audio hardware advanced, so too did the audio hardware of home consoles.
(We will see this trend of increasing audio capabilities as we explore future console generations)`,
      font: "Suisse Intl",
      size: 16,
      x: 0,
      y: 40,
      z: -700,
    });

    this._addMultilineText({
      text: `The Commodore 64 (1982) had 3 channels with support for new waveforms and filtering.
The Nintendo Famicon/Entertainment System (1983/1985) had 5 channels and was capable of 
simple pulse-code modulation.

These are some notable examples from the 3rd-generation of consoles, 
and we can already see a big jump in terms of audio capability.`,
      font: "Suisse Intl",
      size: 16,
      x: 0,
      y: 20,
      z: -1600,
    });

    this._addVids();
  }

  createSamplingSection() {
    this._addTitle("FM SYNTHESIS & SAMPLING");
    this._addSubtitle("Synthwave > Chiptune?", -150);
    this._addGen("4th Gen Consoles");
    this._addMultilineText({
      text: `Starting in 1980, games started to move towards 
synthesized and sampled sounds rather than tone generators.

The introduction of frequency modulation synthesis (FM synthesis) allowed 
tones to be manipulated to have different sound characteristics programatically, 
whereas before the tone generated by the chip was limited to the design of the chip itself.`,
      font: "Suisse Intl",
      size: 16,
      x: 0,
      y: 40,
      z: -700,
    });

    this._addMultilineText({
      text: `At the same time, sequenced sampled music gained popularity. 
Samples were short recordings that could be stored in memory 
and played back in a sequence through the soundchip. 

This technique only required a little memory to store entire sequences, 
which was important during this era of limited game cartridge sizes. 
Notable 4th-gen consoles include the Sega Genesis (1988) and the SNES (1991), 
which brought FM synthesis and sampling to the home console.
`,
      font: "Suisse Intl",
      size: 16,
      x: 0,
      y: 70,
      z: -1600,
    });

    this._addVids();
  }

  createMIDISection() {
    this._addTitle("SOUND CARDS & MIDI");
    this._addSubtitle("Sounds too good to be true.", -150);
    this._addGen("Mac & PC");
    this._addMultilineText({
      text: `Audio technology began to standardize with the invention of MIDI in 1987.
MIDI is simply a set of playback intstructions, but when paired with 
a good sound card (like the Roland MT-32), it could produce very detailed audio. 

By the '90s, most PCs supported MIDI natively, 
and even the Sony PlayStation shipped with MIDI capability.
MIDI is still used extensively in modern music production!
`,
      font: "Suisse Intl",
      size: 16,
      x: 0,
      y: 50,
      z: -700,
    });

    this._addVids();
  }

  createCdSection() {
    this._addTitle("CD & COMPRESSED AUDIO");
    this._addSubtitle("The final pieces.", -150);
    this._addGen("5th Gen Consoles");
    this._addMultilineText({
      text: `Up to this point, game soundtrack composers had to work within 
the limitations of the technology and the sounds it could produce. 
Starting with 4th-gen consoles and becoming widespread in 5th-gen, 
we start to see support for playing entirely pre-recorded music. 

The TurboGrafx-CD (1987) supported playing audio from a CD track while the game was in play. 
The Ys soundtracks that utilize this technology are widely regarded 
as some of the most influential video game music ever composed.`,
      font: "Suisse Intl",
      size: 16,
      x: 0,
      y: 70,
      z: -700,
    });

    this._addMultilineText({
      text: `CD audio had some disadvantages, namely that a game could not 
access data from the disk while it was playing music. 
To address this, developers created container formats 
to store and play compressed audio (WAV, MP3, etc.), 
which was fully utilized in the 5th-gen consoles (PlayStation, N64, Sega Saturn). 

This was the last piece of tech that freed composers 
from the earlier technological limitations of audio hardware, 
as they were now free to record music for games in the same way as for standard listening,
though the best game composers of the era sometimes still 
used old audio hardware like sample sequencers (see the Final Fantasy VII example).`,
      font: "Suisse Intl",
      size: 16,
      x: 0,
      y: 30,
      z: -1600,
    });

    this._addVids();
  }

  // createDynamicSection() {
  //   this.addTitle("DYNAMIC MUSIC");
  //   this.addSubtitle("Immersive af.", -150);
  //   this.addText({
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nVestibulum aliquam imperdiet risus, ut condimentum velit ultricies eu.\nPraesent auctor bibendum dui non pharetra.\nInteger luctus, metus nec fringilla consectetur,\nleo sem lacinia dolor, quis iaculis lectus diam eget nisi.",
  //     font: "Suisse Intl",
  //     size: 26,
  //     x: 0,
  //     y: 0,
  //     z: -700,
  //   });

  //   this.addVids();
  // }

  createModernSection() {
    this._addTitle("MODERN GAME AUDIO");
    this._addSubtitle("Look how far we've come!", -150);
    this._addGen("6th Gen++");
    this._addMultilineText({
      text: `The possibilities for modern video game soundtracks 
are no longer limited by the technology of the time.
Video game music has diversified to the point where new original 
game soundtracks can be full orchestral ballads or simple chiptunes. 

While modern consoles continue to improve upon audio playback, 
further changes in video game music composition will likely have very little to do with 
technology, and more to do with other shifts in the gaming industry as a whole.`,
      font: "Suisse Intl",
      size: 16,
      x: 0,
      y: 80,
      z: -700,
    });

    this._addVids();
  }

  createEndSection() {
    this._addText({
      text: "THANKS FOR STOPPING BY",
      font: "SuisseIntl-Bold",
      size: 60,
      x: 0,
      y: 50,
      z: 0,
    });

    this._addText({
      text: "HOPE YOU LEARNED",
      font: "SuisseIntl-Bold",
      size: 35,
      x: 0,
      y: -50,
      z: 0,
    });

    this._addText({
      text: "SOMETHING NEW!",
      font: "SuisseIntl-Bold",
      size: 35,
      x: 0,
      y: -100,
      z: 0,
    });

    this._addText({
      text: "E",
      font: "icons",
      size: 580,
      x: 0,
      y: 0,
      z: -525,
      segments: 15,
    });

    this.addWhooshButton();
  }

  addWhooshButton() {
    this.whoosh = new THREE.Group();

    let whooshTexture = new THREE.TextureLoader().load("images/whoooosh.png");
    whooshTexture.magFilter = whooshTexture.minFilter = THREE.LinearFilter;
    let whooshMaterial = new THREE.MeshBasicMaterial({
      map: whooshTexture,
      transparent: true,
      depthWrite: false,
    });
    let whooshGeom = new THREE.PlaneGeometry(1, 1);
    this.circle = new THREE.Mesh(whooshGeom, whooshMaterial);
    this.circle.scale.set(200, 200, 1);
    this.whoosh.add(this.circle);

    let texture = new THREE.TextureLoader().load("images/arrowdown.png");
    texture.anisotropy = this.timeline.renderer.capabilities.getMaxAnisotropy();
    texture.magFilter = texture.minFilter = THREE.LinearFilter;
    let material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    let geom = new THREE.PlaneGeometry(1, 1);
    this.arrow = new THREE.Mesh(geom, material);
    this.arrow.scale.set(90, 90, 1);
    this.arrow.position.z = 20;
    this.whoosh.add(this.arrow);

    this.whoosh.position.set(0, -450, 50);
    if (this.timeline.c.size.w < 600) this.whoosh.scale.set(1.5, 1.5, 1);

    this.add(this.whoosh);
  }

  createBibliographySection() {
    this.position.set(0, 2000 / this.timeline.scene.scale.y, 0);
    this.visible = false;

    // let material = new THREE.MeshBasicMaterial({
    //   map: this.timeline.assets.textures["resume"]["resume.png"],
    //   transparent: true,
    // });
    // let geom = new THREE.PlaneGeometry(1, 1);
    // let resume = new THREE.Mesh(geom, material);
    // resume.scale.set(612, 792, 1);
    // resume.position.set(0, 0, 0);
    // this.add(resume);

    // for raycasting so it doesn't just pick up on letters
    this.linkBox = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(612, 792),
      new THREE.MeshBasicMaterial({ alphaTest: 0, visible: false })
    );
    this.linkBox.position.set(0, 0, 1);
    this.linkBox.onClick = () => {
      // window.open("assets/resume/resume.pdf", "_blank");
    };
    this.add(this.linkBox);
  }

  _addTitle(title, y = null) {
    let textGeom = new THREE.TextBufferGeometry(title, {
      font: this.timeline.assets.fonts["Schnyder L"],
      size: 100,
      height: 0,
      curveSegments: 10,
    }).center();

    let p = new THREE.Mesh(textGeom, this.timeline.textMat);
    p.position.set(this.timeline.pages[this.section].offset || 0, y ?? 0, 0);
    this.add(p);
  }

  _addSubtitle(subtitle, y = null) {
    let textGeom = new THREE.TextBufferGeometry(subtitle, {
      font: this.timeline.assets.fonts["SuisseIntl-Bold"],
      size: 50,
      height: 0,
      curveSegments: 10,
    }).center();

    let p = new THREE.Mesh(textGeom, this.timeline.textMat);
    p.position.set(this.timeline.pages[this.section].offset || 0, y ?? -100, 0);
    this.add(p);
  }

  _addGen(era, y = null) {
    let textGeom = new THREE.TextBufferGeometry(era, {
      font: this.timeline.assets.fonts["Schnyder L"],
      size: 40,
      height: 0,
      curveSegments: 10,
    }).center();

    let p = new THREE.Mesh(textGeom, this.timeline.textMat);
    p.position.set(this.timeline.pages[this.section].offset || 0, y ?? -250, 0);
    this.add(p);
  }

  _addLinkBox(args) {
    let linkBox = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(args.size, args.size),
      new THREE.MeshBasicMaterial({ alphaTest: 0, visible: false })
    );
    linkBox.position.set(args.x, args.y, args.z);
    linkBox.onClick = args.onClick;
    this.add(linkBox);
  }

  _addText(args) {
    let textGeom = new THREE.TextBufferGeometry(args.text, {
      font: this.timeline.assets.fonts[args.font],
      size: args.size,
      height: 0,
      curveSegments: args.segments ?? 6,
    }).center();

    let p = new THREE.Mesh(textGeom, this.timeline.textMat);
    p.position.set(args.x, args.y, args.z);
    this.add(p);
  }

  _addMultilineText(args) {
    const lines = args.text.split(/\r?\n/);
    const textGeoms = [];

    for (const i in lines) {
      let geom = new THREE.TextBufferGeometry(lines[i], {
        font: this.timeline.assets.fonts[args.font],
        size: args.size,
        height: 0,
        curveSegments: args.segments ?? 6,
      })
        .center()
        .translate(0, -i * (args.size + (args.offset ?? 10)), 0);
      textGeoms.push(geom);
    }

    const merged = BufferGeometryUtils.mergeBufferGeometries(textGeoms);
    let text = new THREE.Mesh(merged, this.timeline.textMat);
    text.position.set(args.x, args.y + 20, args.z);
    this.add(text);
  }

  _addImage(args) {
    let texture = new THREE.TextureLoader().load(args.file);
    texture.magFilter = texture.minFilter = THREE.LinearFilter;
    let material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
    });
    let geom = new THREE.PlaneGeometry(1, 1);
    let image = new THREE.Mesh(geom, material);
    image.scale.set(args.scalex, args.scaley, args.scalez);
    image.position.set(args.x, args.y, args.z);
    this.add(image);
  }

  _addVids() {
    let id,
      itemIndex = 0;

    this.timeline.assetList[this.section].forEach((filename) => {
      if (~filename.indexOf(".mp3")) return;
      id = `${this.section}/${filename}`;

      this.timeline.items[id] = new VideoItem({
        assetId: id,
        timeline: this.timeline,
        texture: this.timeline.assets.textures[this.section][filename],
        video: this.timeline.assets.videos[this.section][filename],
        data: this.timeline.assetData[this.section][filename],
        page: this.section,
        itemIndex: itemIndex,
        itemIndexTotal: itemIndex,
        // size: {x: 300, y: 300},
      });

      this.add(this.timeline.items[id]);

      itemIndex++;
    });
  }
}
