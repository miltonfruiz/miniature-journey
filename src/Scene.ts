import {
  AnimatedSprite,
  Container,
  Graphics,
  NineSlicePlane,
  Text,
  Texture,
} from "pixi.js";
import { DinoHat } from "./DinoHat";

export class Scene extends Container {
  constructor() {
    super();

    // Class extending from container
    const dinoWithHat: DinoHat = new DinoHat();
    dinoWithHat.scale.set(0.7);
    dinoWithHat.x = 100;
    dinoWithHat.y = 200;
    this.addChild(dinoWithHat);

    // AnimatedSprite
    const dinoAnimated: AnimatedSprite = new AnimatedSprite(
      [
        Texture.from("DinoRun01"),
        Texture.from("DinoRun02"),
        Texture.from("DinoRun03"),
        Texture.from("DinoRun04"),
        Texture.from("DinoRun05"),
        Texture.from("DinoRun06"),
        Texture.from("DinoRun07"),
        Texture.from("DinoRun08"),
      ],
      true
    );
    dinoAnimated.play();
    dinoAnimated.animationSpeed = 0.2;
    this.addChild(dinoAnimated);

    // Graphics
    const myGraph: Graphics = new Graphics();

    myGraph.lineStyle({ color: 0xa30000, width: 10, alpha: 1 });
    myGraph.moveTo(0, 0);
    myGraph.lineTo(300, 500);
    myGraph.lineTo(300, 100);
    myGraph.moveTo(0, 0);

    myGraph.clear();

    myGraph.lineStyle({ color: 0xa30000, width: 10, alpha: 1 });
    myGraph.beginFill(0xf3f3f3, 1);
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
    //const panel = Sprite.from("Panel");
    const panel = new NineSlicePlane(Texture.from("Panel"), 35, 35, 35, 35);
    this.addChild(panel);
    panel.width = 300;
    panel.height = 200;
    panel.scale.set(1);
    panel.position.x = 900;
    panel.position.y = 400;
  }
}
