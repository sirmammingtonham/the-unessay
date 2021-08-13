import * as THREE from "three";
import { ImageItem, TextItem } from "./Item";

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

    let pageName = new THREE.Mesh(textGeom, this.timeline.textMat);
    pageName.position.set(
      this.timeline.pages[this.section].offset || 0,
      y ?? 0,
      0
    );
    this.add(pageName);
  }

  addSubtitle(subtitle, y = null) {
    let textGeom = new THREE.TextBufferGeometry(subtitle, {
      font: this.timeline.assets.fonts["SuisseIntl-Bold"],
      size: 50,
      height: 0,
      curveSegments: 10,
    }).center();

    let pageName = new THREE.Mesh(textGeom, this.timeline.textMat);
    pageName.position.set(
      this.timeline.pages[this.section].offset || 0,
      y ?? -100,
      0
    );
    this.add(pageName);
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

  createIntroSection() {
    this.timeline.audioLoader.load(
      "music/Pokemon Platinum - Jubilife City.mp3",
      (buffer) => {
        this.timeline.audio.setBuffer(buffer);
        this.timeline.audio.setLoop(true);
        this.timeline.audio.setVolume(0.5);
      }
    );

    this.addImage({
      file: "assets/general/Pokemon+Music.png",
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
  }

  createBabySection() {
    this.addTitle("BABY STEPS");
    this.addSubtitle("When sound was first", -150);
    this.addSubtitle("introduced to video games.", -250);
  }

  createArcadeSection() {
    this.addTitle("ARCADE ERA");
  }

  createConsolesSection() {
    this.addTitle("HOME CONSOLES");
  }

  createSamplingSection() {
    this.addTitle("FM SYNTHESIS & SAMPLING");
  }

  createMIDISection() {
    this.addTitle("SOUND CARDS & MIDI");
  }

  createCdSection() {
    this.addTitle("CD AUDIO");
  }

  createDynamicSection() {
    this.addTitle("DYNAMIC MUSIC");
  }

  createModernSection() {
    this.addTitle("MODERN SOUND DESIGN");
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
