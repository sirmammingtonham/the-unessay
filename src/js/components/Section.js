import * as THREE from "three";
import { ImageItem, TextItem, VideoItem } from "./Item";

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
        this.addTitle("burh");
        break;
      }
    }
  }

  addTitle(title, y = null) {
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

  addSubtitle(subtitle, y = null) {
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

  addEra(era, y = null) {
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

  addLinkBox(args) {
    let linkBox = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(args.size, args.size),
      new THREE.MeshBasicMaterial({ alphaTest: 0, visible: false })
    );
    linkBox.position.set(args.x, args.y, args.z);
    linkBox.onClick = args.onClick;
    this.add(linkBox);
  }

  addText(args) {
    let textGeom = new THREE.TextBufferGeometry(args.text, {
      font: this.timeline.assets.fonts[args.font],
      size: args.size,
      height: 0,
      curveSegments: args.segments ?? 6,
    }).center();
    let text = new THREE.Mesh(textGeom, this.timeline.textMat);
    text.position.set(args.x, args.y, args.z);
    this.add(text);
  }

  addImage(args) {
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

  addVids() {
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

  createIntroSection() {
    this.addImage({
      file: "assets/intro/Pokemon+Music.png",
      scalex: 1200,
      scaley: 800,
      scalez: 1,
      x: 0,
      y: 0,
      z: -500,
    });

    this.addText({
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
    this.addTitle("BACKGROUND");

    this.addText({
      text: `The music and sounds of video games enhance gameplay immensely,
and are often the most memorable aspects of our favorite games!
However, early video games were limited to the simple sounds 
of programmable sound generator chips.`,
      font: "SuisseIntl-Bold",
      size: 26,
      x: 0,
      y: 0,
      z: -800,
    });

    this.addText({
      text: `So how did we get from the simple beeps and bloops of early games 
to the dynamic and complex soundtracks of modern games?
Keep scrolling to find out!`,
      font: "SuisseIntl-Bold",
      size: 26,
      x: 0,
      y: 0,
      z: -1700,
    });
  }

  createBabySection() {
    this.addTitle("BABY STEPS");
    this.addSubtitle("When sound was first", -150);
    this.addSubtitle("introduced to video games.", -250);
    this.addEra("The '70s", -350);

    this.addText({
      text: `
The first time sound was added to video games was in 1972 with Pong.
Click a video to listen and learn more!`,
      font: "Suisse Intl",
      size: 26,
      x: 0,
      y: 0,
      z: -700,
    });

    this.addVids();
  }

  createArcadeSection() {
    this.addTitle("ARCADE ERA");
    this.addSubtitle("A glorious cacophany.", -150);
    this.addEra("1980-1985");
    this.addText({
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nVestibulum aliquam imperdiet risus, ut condimentum velit ultricies eu.\nPraesent auctor bibendum dui non pharetra.\nInteger luctus, metus nec fringilla consectetur,\nleo sem lacinia dolor, quis iaculis lectus diam eget nisi.",
      font: "SuisseIntl-Bold",
      size: 26,
      x: 0,
      y: 0,
      z: -700,
    });

    this.addVids();
  }

  createConsolesSection() {
    this.addTitle("ADVENT OF HOME CONSOLES");
    this.addSubtitle("NES FTW.", -150);
    this.addEra("1983-1985");
    this.addText({
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nVestibulum aliquam imperdiet risus, ut condimentum velit ultricies eu.\nPraesent auctor bibendum dui non pharetra.\nInteger luctus, metus nec fringilla consectetur,\nleo sem lacinia dolor, quis iaculis lectus diam eget nisi.",
      font: "SuisseIntl-Bold",
      size: 26,
      x: 0,
      y: 0,
      z: -700,
    });

    this.addVids();
  }

  createSamplingSection() {
    this.addTitle("FM SYNTHESIS & SAMPLING");
    this.addSubtitle("80s, synths, and long hair.", -150);
    this.addEra("1984-1990");
    this.addText({
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nVestibulum aliquam imperdiet risus, ut condimentum velit ultricies eu.\nPraesent auctor bibendum dui non pharetra.\nInteger luctus, metus nec fringilla consectetur,\nleo sem lacinia dolor, quis iaculis lectus diam eget nisi.",
      font: "SuisseIntl-Bold",
      size: 26,
      x: 0,
      y: 0,
      z: -700,
    });

    this.addVids();
  }

  createMIDISection() {
    this.addTitle("SOUND CARDS & MIDI");
    this.addSubtitle("Big leaps.", -150);
    this.addEra("1990-1993");
    this.addText({
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nVestibulum aliquam imperdiet risus, ut condimentum velit ultricies eu.\nPraesent auctor bibendum dui non pharetra.\nInteger luctus, metus nec fringilla consectetur,\nleo sem lacinia dolor, quis iaculis lectus diam eget nisi.",
      font: "SuisseIntl-Bold",
      size: 26,
      x: 0,
      y: 0,
      z: -700,
    });

    this.addVids();
  }

  createCdSection() {
    this.addTitle("CD AUDIO & MP3");
    this.addSubtitle("Changed the game.", -150);
    this.addEra("1993-2000");
    this.addText({
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nVestibulum aliquam imperdiet risus, ut condimentum velit ultricies eu.\nPraesent auctor bibendum dui non pharetra.\nInteger luctus, metus nec fringilla consectetur,\nleo sem lacinia dolor, quis iaculis lectus diam eget nisi.",
      font: "SuisseIntl-Bold",
      size: 26,
      x: 0,
      y: 0,
      z: -700,
    });

    this.addVids();
  }

  // createDynamicSection() {
  //   this.addTitle("DYNAMIC MUSIC");
  //   this.addSubtitle("Immersive af.", -150);
  //   this.addText({
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nVestibulum aliquam imperdiet risus, ut condimentum velit ultricies eu.\nPraesent auctor bibendum dui non pharetra.\nInteger luctus, metus nec fringilla consectetur,\nleo sem lacinia dolor, quis iaculis lectus diam eget nisi.",
  //     font: "SuisseIntl-Bold",
  //     size: 26,
  //     x: 0,
  //     y: 0,
  //     z: -700,
  //   });

  //   this.addVids();
  // }

  createModernSection() {
    this.addTitle("MODERN GAME AUDIO");
    this.addSubtitle("Look how far we've come!", -150);
    this.addEra("Unkown-Present");
    this.addText({
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nVestibulum aliquam imperdiet risus, ut condimentum velit ultricies eu.\nPraesent auctor bibendum dui non pharetra.\nInteger luctus, metus nec fringilla consectetur,\nleo sem lacinia dolor, quis iaculis lectus diam eget nisi.",
      font: "SuisseIntl-Bold",
      size: 26,
      x: 0,
      y: 0,
      z: -700,
    });

    this.addVids();
  }

  createEndSection() {
    this.addText({
      text: "THANKS FOR STOPPING BY",
      font: "SuisseIntl-Bold",
      size: 60,
      x: 0,
      y: 50,
      z: 0,
    });

    this.addText({
      text: "HOPE YOU LEARNED",
      font: "SuisseIntl-Bold",
      size: 35,
      x: 0,
      y: -50,
      z: 0,
    });

    this.addText({
      text: "SOMETHING NEW!",
      font: "SuisseIntl-Bold",
      size: 35,
      x: 0,
      y: -100,
      z: 0,
    });

    this.addText({
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
}
