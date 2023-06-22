import { Container, Graphics, Sprite, Text } from "pixi.js";
import { DinoHat } from "./DinoHat";

export class Scene extends Container {
  constructor() {
    super();

    const dinoWithHat: DinoHat = new DinoHat();

    dinoWithHat.scale.set(0.7);
    dinoWithHat.x = 100;
    dinoWithHat.y = 200;
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

    // Text
    const myText: Text = new Text("Hello World!", {
      fontSize: 1500,
      fill: 0xff0000,
      fontFamily: "Comic Sans MS",
    });
    myText.text = "Bienvenido!";
    myText.position.x = 250;
    myText.angle = 0;
    myText.scale.set(0.1);
    this.addChild(myText);

    // Nine-Slice Plane
    const panel = Sprite.from("Panel");
    this.addChild(panel);
    panel.scale.set(1, 1);
  }
}
