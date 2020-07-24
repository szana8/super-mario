import Entity from './Entity.js';
import { loadMarioSprites } from './Sprites.js';

export function createMario() {
  return loadMarioSprites().then((sprite) => {
    const mario = new Entity();
    mario.pos.set(64, 180);
    mario.vel.set(2, -10);

    mario.draw = function drawMario(context) {
      sprite.draw('idle', context, this.pos.x, this.pos.y);
    };

    mario.update = function updateMario(deltaTime) {
      this.pos.x += this.vel.x * deltaTime;
      this.pos.y += this.vel.y * deltaTime;
    };

    return mario;
  });
}
