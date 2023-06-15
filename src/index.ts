import { Application, Loader } from "pixi.js";
import { assets } from "./assets";
import { DinoHat } from "./DinoHat";

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

Loader.shared.add(assets);

Loader.shared.onComplete.add(() => {
  //-------------Container-------------//
  const dinoWithHat: DinoHat = new DinoHat();

  dinoWithHat.scale.set(1.2);
  dinoWithHat.x = 300;
  dinoWithHat.y = 100;
  app.stage.addChild(dinoWithHat);
});

Loader.shared.load();
