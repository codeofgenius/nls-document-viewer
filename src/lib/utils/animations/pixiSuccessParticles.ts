import { Application, Assets, Sprite } from 'pixi.js';
import { type Renderer, type Texture } from 'pixi.js';

import { getRandom } from '@/lib/utils/common';

class Heart extends Sprite {
  // rotation speed
  public rotationSpeed = 0;
  // initial X velocity
  public velocityX = 0;
  // initial Y velocity, negative number to upward
  public velocityY = 0;
}

export class PixiSuccessParticles {
  app = new Application<Renderer>();
  divTag: HTMLDivElement | null = null;
  // Sprite array
  hearts: Heart[] = [];
  // texture object
  textures: Record<string, Texture> = {};
  // number of sprite
  heartNum = 40;
  // gravitational acceleration
  gravity = 0.98;
  // gravity coefficient
  coefficientGravity = 0.5;

  // image filename
  textureImageFile = [
    'heart1.png',
    'heart2.png',
    'heart3.png',
    'heart4.png',
    'heart5.png',
    'heart6.png',
  ];

  constructor(divTag: HTMLDivElement) {
    this.divTag = divTag;
  }

  async load() {
    // load texture
    for (let i = 0; i < this.textureImageFile.length - 1; i++) {
      const fileName = this.textureImageFile[i];
      if (!fileName) {
        continue;
      }
      const texture = await Assets.load('/' + fileName);
      this.textures[fileName] = texture;
    }
  }

  async create() {
    if (!this.divTag) {
      return;
    }
    await this.load();
    await this.app.init({ backgroundAlpha: 0, resizeTo: window });
    this.divTag.appendChild(this.app.canvas);
    await this.build();
  }

  async build() {
    for (let i = 0; i < this.heartNum; i++) {
      // pick random texture
      const textureNum = getRandom(0, this.textureImageFile.length - 1);
      const textureName = this.textureImageFile[textureNum];
      if (!textureName) {
        continue;
      }
      const texture = this.textures[textureName];
      // create sprite
      const heart = new Heart(texture);
      // anchor point
      heart.anchor.set(0.5);
      // size
      heart.setSize(30, 30);
      // random sprite x
      heart.x = getRandom(0, this.app.screen.width);
      // random sprite y
      const minY = this.app.screen.height * 0.1;
      const maxY = this.app.screen.height * 0.5;
      heart.y = getRandom(minY, maxY);
      // random rotation speed
      heart.rotationSpeed = getRandom(-5, 5) * 0.02;
      // random velocityX
      heart.velocityX = getRandom(-3, 3);
      // random velocityY
      heart.velocityY = getRandom(-20, -10);
      // add sprite to array
      this.hearts.push(heart);
      this.app.stage.addChild(heart);
    }
  }

  async update() {
    this.app.ticker.add((ticker) => {
      const deltaTime = ticker.deltaTime;
      for (let i = 0; i < this.hearts.length; i++) {
        const heart = this.hearts[i];
        if (!heart) {
          return;
        }
        // rotate animation
        heart.rotation += heart.rotationSpeed;
        // calculate new x coordinate
        const newX = heart.x + heart.velocityX * deltaTime;
        // recalculate velocityY
        heart.velocityY += this.gravity * this.coefficientGravity * deltaTime;
        // calculate new y coordinate
        const newY = heart.y + heart.velocityY;
        // set new position
        heart.x = newX;
        heart.y = newY;
        // delete when sprite goes below screen
        if (heart.y > this.app.screen.height + 20) {
          this.app.stage.removeChild(heart);
          // remove from sprite array
          this.hearts.splice(i, 1);
        }
      }
    });
  }
}
