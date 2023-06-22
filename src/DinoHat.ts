import { Container, Sprite } from "pixi.js";

export class DinoHat extends Container {
  constructor() {
    super();
    //------------Dinosaurio--------------//
    const dino: Sprite = Sprite.from("Dino");
    dino.scale.set(1.2, 1.2);
    dino.position.set(0, 70);

    //---------------Gorro----------------//
    const hat: Sprite = Sprite.from("Hat");
    hat.scale.set(0.2, 0.2);
    hat.position.set(217, 60);

    this.addChild(dino);
    this.addChild(hat);
  }
}
