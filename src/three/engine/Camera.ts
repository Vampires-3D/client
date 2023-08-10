import { PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Container, Service } from "typedi";
import { CAMERA, RENDERER } from "../services.ts";
import { SceneObject } from "./SceneObject.ts";

@Service(CAMERA)
export default class Camera extends SceneObject {
  public camera!: PerspectiveCamera;

  private controls!: OrbitControls;

  async awake(): Promise<void> {
    const renderer = Container.get(RENDERER);
    this.camera = new PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      1,
      100,
    );
    this.camera.position.set(5, 2, 8);

    this.controls = new OrbitControls(this.camera, renderer.domElement);
    this.controls.target.set(0, 0.5, 0);
    this.controls.update();
    this.controls.enabled = false;
  }

  update(): void {
    this.controls.update();
  }

  onResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  }
}
