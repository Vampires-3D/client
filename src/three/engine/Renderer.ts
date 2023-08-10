import { PMREMGenerator, WebGLRenderer } from "three";
import { Container, Inject, Service } from "typedi";
import Scene from "./Scene";
import Camera from "./Camera";
import { CAMERA, CONTAINER, RENDERER, SCENE } from "../services";
import { SceneObject } from "./SceneObject";

@Service(RENDERER)
export default class Renderer extends SceneObject {
  private renderer!: WebGLRenderer;

  @Inject(SCENE)
  private scene!: Scene;

  @Inject(CAMERA)
  private camera!: Camera;

  get domElement() {
    return this.renderer.domElement;
  }

  async awake(): Promise<void> {
    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    Container.get(CONTAINER).appendChild(this.renderer.domElement);
  }

  update(_deltaTime: number): void {
    this.renderer.render(this.scene.sceneObject, this.camera.camera);
  }

  onResize(): void {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  createPMREMGenerator() {
    return new PMREMGenerator(this.renderer);
  }
}
