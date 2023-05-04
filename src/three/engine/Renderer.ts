import {PMREMGenerator, WebGLRenderer} from 'three';
import {ResizableObject} from './ResizableObject';
import Scene from './Scene';
import Camera from './Camera';
import {Container, Inject, Service} from 'typedi';
import {CAMERA, CONTAINER, RENDERER, SCENE} from '../services';

@Service(RENDERER)
export default class Renderer extends ResizableObject {
    private renderer!: WebGLRenderer;
    private scene!: Scene;

    @Inject(CAMERA)
    private camera!: Camera;

    @Inject(CONTAINER)
    private container!: HTMLElement;

    get domElement() {
        return this.renderer.domElement;
    }

    async awake(): Promise<void> {
        this.scene = Container.get(SCENE);
        this.renderer = new WebGLRenderer({antialias: true});
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.container.appendChild(this.renderer.domElement);
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
