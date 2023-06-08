import { Application, Container, Loader, Point, Sprite } from "pixi.js";

const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 1280,
  height: 720,
});

// Cambio de Tamaño
window.addEventListener("resize", () => {
  // Escalas del Juego
  const scaleX = window.innerWidth / app.screen.width;
  const scaleY = window.innerHeight / app.screen.height;
  const scale = Math.min(scaleX, scaleY);

  // Tamaño del Juego
  const gameWidth = Math.round(app.screen.width * scale);
  const gameHeight = Math.round(app.screen.height * scale);

  // Centrado del Juego
  const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
  const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2);

  // Tamaño de renderizado del Juego
  app.view.style.width = gameWidth + "px";
  app.view.style.height = gameHeight + "px";

  app.view.style.marginLeft = marginHorizontal + "px";
  app.view.style.marginRight = marginHorizontal + "px";

  app.view.style.marginTop = marginVertical + "px";
  app.view.style.marginBottom = marginVertical + "px";
});
window.dispatchEvent(new Event("resize"));

Loader.shared.add({ url: "./dino.png", name: "Dino" });
Loader.shared.add({ url: "./dinohat.png", name: "Hat" });

Loader.shared.onComplete.add(() => {
  //------------Dinosaurio--------------//
  const dino: Sprite = Sprite.from("Dino");
  dino.scale.set(0.1, 0.1);
  dino.position.set(100, 100);

  //---------------Gorro----------------//
  const hat: Sprite = Sprite.from("Hat");
  hat.scale.set(0.2, 0.2);
  hat.position.set(157, 50);

  //-------------Container-------------//
  const dinoWithHat: Container = new Container();

  dinoWithHat.addChild(dino);
  dinoWithHat.addChild(hat);

  dinoWithHat.scale.set(1.2);
  dinoWithHat.x = 300;
  dinoWithHat.y = 100;
  app.stage.addChild(dinoWithHat);

  console.log(hat.toGlobal(new Point()));
  console.log(hat.parent.toGlobal(hat.position));

  // const aux = hat.parent.toLocal(new Point(0, 0));
  // hat.position.x = aux.x;
  // hat.position.y = aux.y;
  // app.stage.addChild(dino);
  // app.stage.addChild(hat);
});

Loader.shared.load();
