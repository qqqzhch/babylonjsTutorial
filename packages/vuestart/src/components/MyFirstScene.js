import { Engine, Scene, FreeCamera, Vector3,
  MeshBuilder,Texture,
      HemisphericLight } from "@babylonjs/core";
// import { AdvancedDynamicTexture,Image } from '@babylonjs/gui/2D';
import {SceneLoader} from "@babylonjs/core/Loading/sceneLoader"; 
// import { Color3} from "@babylonjs/core/Maths";   
import "@babylonjs/loaders/glTF";
const createScene = async (canvas) => {
  const engine = new Engine(canvas);
  const scene = new Scene(engine);

  const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);

  new HemisphericLight("light", Vector3.Up(), scene);

  const box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
  console.log(box)
  // const material = new StandardMaterial("box-material", scene);
  // material.diffuseColor = Color3.Blue();
  // box.material = material;

  // const advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");
  //   const image = new Image("CrossHair", "https://playground.babylonjs.com/textures/sand.jpg");
  //   image.width = "30px";
  //   image.height = "30px";
  //   image.stretch = Image.STRETCH_NONE;
  //   advancedTexture.addControl(image);  

    const snowBall = await SceneLoader.ImportMeshAsync("",`/`, "index.gltf", scene);
     console.log('async',snowBall);
     snowBall.transformNodes.forEach((n)=>{
        console.log('transformNodes',n.name);

    });
    const transformNodes = snowBall.transformNodes;
    

     const snowBallParent = snowBall.meshes[0];
     const newRoot = snowBall.transformNodes[0];
     newRoot.setParent(null);
     
  
     
     snowBallParent.dispose();
     transformNodes.forEach((one)=>{
         if(one.name=="art_frame"){
            one.scaling.x=512/100;
            one.scaling.y=316/100;
            one.scaling.z=5;
           const mysons = one.getChildMeshes();
           mysons.forEach((cube)=>{
               if(cube.name=="art"){
                // cube.material.albedoTexture
                cube.material.albedoTexture=new Texture('/13470259.jpg',scene);
                
                // cube.material =new StandardMaterial("test1" ,scene);
                // cube.material.diffuseTexture=new Texture('/img/13470259.jpg',scene);
                

               }

           });
           
        
            
         }
     });

  engine.runRenderLoop(() => {
    scene.render();
  });
  return scene;
};

export { createScene };