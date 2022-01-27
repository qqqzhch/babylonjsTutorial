import { Engine, Scene, FreeCamera, Vector3, MeshBuilder, StandardMaterial,
     Color3, HemisphericLight } from "@babylonjs/core";
import { AdvancedDynamicTexture,Image } from '@babylonjs/gui/2D';
     
const createScene = (canvas) => {
  const engine = new Engine(canvas);
  const scene = new Scene(engine);

  const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);

  new HemisphericLight("light", Vector3.Up(), scene);

  const box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
  const material = new StandardMaterial("box-material", scene);
  material.diffuseColor = Color3.Blue();
  box.material = material;

  const advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");
    const image = new Image("CrossHair", "https://playground.babylonjs.com/textures/sand.jpg");
    image.width = "30px";
    image.height = "30px";
    image.stretch = Image.STRETCH_NONE;
    advancedTexture.addControl(image);  

  engine.runRenderLoop(() => {
    scene.render();
  });
  return scene;
};

export { createScene };