import { Container, Sprite } from "pixi.js";

export class DinoHat extends Container {
  constructor() {
    super();
    //------------Dinosaurio--------------//
    const dino: Sprite = Sprite.from("Dino");
    dino.scale.set(0.1, 0.1);
    dino.position.set(100, 100);

    //---------------Gorro----------------//
    const hat: Sprite = Sprite.from("Hat");
    hat.scale.set(0.2, 0.2);
    hat.position.set(157, 50);

    this.addChild(dino);
    this.addChild(hat);
  }
}
