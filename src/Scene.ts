import { Container } from "pixi.js";
import { DinoHat } from "./DinoHat";

export class Scene extends Container {
  constructor() {
    super();

    const dinoWithHat: DinoHat = new DinoHat();

    dinoWithHat.scale.set(1.2);
    dinoWithHat.x = 300;
    dinoWithHat.y = 100;
    this.addChild(dinoWithHat);
  }
}
