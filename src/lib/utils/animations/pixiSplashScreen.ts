import { gsap } from 'gsap';
import { PixiPlugin } from 'gsap/PixiPlugin';
import { GlowFilter } from 'pixi-filters';
import * as PIXI from 'pixi.js';

import type { Renderer } from 'pixi.js';

export class PixiSplashScreen {
  app = new PIXI.Application<Renderer>();
  divTag: HTMLDivElement | null = null;
  width = 0;
  height = 0;
  center: { x: number; y: number } = { x: 0, y: 0 };
  logoText: string;

  constructor(divTag: HTMLDivElement) {
    this.divTag = divTag;
    // this.logoText = 'REACH BEYOND';
    // this.logoText = 'GO BEYOND';
    this.logoText = 'To boldly go where\nno one has gone before';
  }

  async load() {
    // load texture
    // for (let i = 0; i < this.textureImageFile.length - 1; i++) {
    //   const fileName = this.textureImageFile[i];
    //   if (!fileName) {
    //     continue;
    //   }
    //   const texture = await PIXI.Assets.load('/' + fileName);
    //   this.textures[fileName] = texture;
    // }
  }

  async create() {
    if (!this.divTag) {
      return;
    }
    gsap.registerPlugin(PixiPlugin);
    PixiPlugin.registerPIXI(PIXI);

    await this.load();
    await this.app.init({ backgroundAlpha: 0, resizeTo: window });
    this.width = this.app.screen.width;
    this.height = this.app.screen.height;
    this.center = { x: this.width / 2, y: this.height / 2 };
    this.divTag.appendChild(this.app.canvas);
    await this.build();
  }

  async build() {
    this.drawBackground();
    this.drawLogoText();
    this.drawRect1();
    this.drawRect2();
    this.drawRect3();
  }

  drawBackground() {
    const background = new PIXI.Graphics();
    background.rect(0, 0, this.width, this.height);
    background.fill(0x000000);
    background.alpha = 1;
    this.app.stage.addChild(background);

    const backgroundTimeline = gsap.timeline();
    backgroundTimeline.to(background, {
      pixi: { alpha: 0 },
      duration: 1,
      delay: 4,
    });
  }

  drawLogoText() {
    const logoText = new PIXI.Text({
      text: this.logoText,
      style: {
        fontFamily: 'Arial',
        fontSize: 50,
        fill: '0xee82ee',
        stroke: { color: '0xD02090', width: 5 },
        align: 'center',
        lineHeight: 70,
        dropShadow: {
          color: '0xD02090',
          blur: 4,
          distance: 3,
        },
      },
      anchor: 0.5,
    });
    logoText.x = this.center.x;
    logoText.y = this.center.y;
    logoText.alpha = 0;
    logoText.scale.set(0);
    this.app.stage.addChild(logoText);

    const glowFilter4 = new GlowFilter({
      distance: 15,
      outerStrength: 0, // 初期は光を0に設定
      innerStrength: 0,
      color: 0xee82ee,
      quality: 0.5,
    });
    logoText.filters = [glowFilter4];

    const logoTimeline = gsap.timeline();
    logoTimeline
      .to(logoText, {
        pixi: { alpha: 1, scale: 1, ease: 'back.inOut' },
        duration: 1,
        delay: 0.2,
      })
      .to(
        glowFilter4,
        {
          duration: 1,
          outerStrength: 1, // 光の強さを変化
          ease: 'power2.easeIn',
          delay: 1.5,
        },
        0,
      )
      .to(logoText, {
        pixi: { alpha: 0 },
        duration: 1,
        delay: 0.5,
      });
  }

  drawRect1() {
    const rect1W = this.width * 0.6;
    const rect1H = this.height * 0.6;

    const rect1 = new PIXI.Graphics();
    rect1.roundRect(0, 0, rect1W, rect1H);
    rect1.stroke({
      width: 2,
      color: 0xee82ee,
      texture: PIXI.Texture.WHITE,
    });

    // 軸の位置を長方形の中心にする
    rect1.pivot.set(rect1W / 2, rect1H / 2);
    // 表示位置を画面中央にする
    rect1.position.set(this.center.x, this.center.y);

    // GlowFilterを適用
    const glowFilter = new GlowFilter({
      distance: 15,
      outerStrength: 0, // 初期は光を0に設定
      innerStrength: 0,
      color: 0xee82ee,
      quality: 0.5,
    });
    rect1.filters = [glowFilter];

    this.app.stage.addChild(rect1);

    const rect1Timeline = gsap.timeline();
    rect1Timeline
      .to(
        glowFilter,
        {
          duration: 1,
          outerStrength: 4, // 光の強さを変化
          ease: 'power2.easeIn',
          delay: 1.5,
        },
        0,
      )
      .to(rect1, {
        pixi: { scale: 1.5, duration: 3, ease: 'power2.easeIn' },
      })
      .to(rect1, {
        pixi: { alpha: 0 },
        duration: 1,
      });
  }

  drawRect2() {
    const rect2W = this.width * 0.55;
    const rect2H = this.height * 0.51;

    const rect2 = new PIXI.Graphics();
    rect2.roundRect(0, 0, rect2W, rect2H);
    rect2.stroke({
      width: 2,
      color: 0xee82ee,
      texture: PIXI.Texture.WHITE,
    });
    // 軸の位置を長方形の中心にする
    rect2.pivot.set(rect2W / 2, rect2H / 2);
    // 表示位置を画面中央にする
    rect2.position.set(this.center.x, this.center.y);
    rect2.alpha = 0;

    // GlowFilterを適用
    const glowFilter2 = new GlowFilter({
      distance: 15,
      outerStrength: 0, // 初期は光を0に設定
      innerStrength: 0,
      color: 0xee82ee,
      quality: 0.5,
    });
    rect2.filters = [glowFilter2];

    this.app.stage.addChild(rect2);

    const rect2Timeline = gsap.timeline();
    rect2Timeline
      .to(rect2, { pixi: { alpha: 1 }, delay: 0.5 })
      .to(
        glowFilter2,
        {
          duration: 1.5,
          outerStrength: 4, // 光の強さを変化
          ease: 'power2.easeIn',
          delay: 1,
        },
        0,
      )
      .to(rect2, {
        pixi: { scale: 1.5, duration: 3, ease: 'power2.easeIn' },
      })
      .to(rect2, {
        pixi: { alpha: 0 },
        duration: 1,
      });
  }

  drawRect3() {
    const rect3W = this.width * 0.5;
    const rect3H = this.height * 0.42;

    const rect3 = new PIXI.Graphics();
    rect3.roundRect(0, 0, rect3W, rect3H);
    rect3.stroke({
      width: 2,
      color: 0xee82ee,
      texture: PIXI.Texture.WHITE,
    });
    // 軸の位置を長方形の中心にする
    rect3.pivot.set(rect3W / 2, rect3H / 2);
    // 表示位置を画面中央にする
    rect3.position.set(this.center.x, this.center.y);
    rect3.alpha = 0;

    // GlowFilterを適用
    const glowFilter3 = new GlowFilter({
      distance: 15,
      outerStrength: 0, // 初期は光を0に設定
      innerStrength: 0,
      color: 0xee82ee,
      quality: 0.5,
    });
    rect3.filters = [glowFilter3];

    this.app.stage.addChild(rect3);

    const rect3Timeline = gsap.timeline();
    rect3Timeline
      .to(rect3, { pixi: { alpha: 1 }, delay: 1 })
      .to(
        glowFilter3,
        {
          duration: 0.5,
          outerStrength: 4, // 光の強さを変化
          ease: 'power2.easeIn',
          delay: 2,
        },
        0,
      )
      .to(rect3, {
        pixi: { scale: 1.5, duration: 3, ease: 'power2.easeIn' },
      })
      .to(rect3, {
        pixi: { alpha: 0 },
        duration: 1,
      });
  }

  async update() {
    return;
  }
}
