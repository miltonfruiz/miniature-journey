import { Container, Graphics } from "pixi.js";
import { DinoHat } from "./DinoHat";

export class Scene extends Container {
  constructor() {
    super();

    const dinoWithHat: DinoHat = new DinoHat();

    dinoWithHat.scale.set(1.2);
    dinoWithHat.x = 300;
    dinoWithHat.y = 100;
    this.addChild(dinoWithHat);

    // Graphics
    const myGraph: Graphics = new Graphics();

    myGraph.lineStyle({ color: 0xff00ff, width: 10, alpha: 1 });
    myGraph.moveTo(0, 0);
    myGraph.lineTo(300, 500);
    myGraph.lineTo(300, 100);
    myGraph.moveTo(0, 0);

    myGraph.clear();

    myGraph.lineStyle({ color: 0xff00ff, width: 10, alpha: 1 });
    myGraph.beginFill(0x00ff00, 1);
    myGraph.drawCircle(0, 0, 100);
    myGraph.endFill();
    myGraph.drawCircle(50, 50, 100);

    myGraph.position.set(1280 / 2, 720 / 2);
    this.addChild(myGraph);
  }
}
