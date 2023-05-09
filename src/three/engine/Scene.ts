import {SceneObject} from './SceneObject';
import {AnimationMixer, Color, Scene as ThreeScene} from 'three';
import {RoomEnvironment} from 'three/examples/jsm/environments/RoomEnvironment';
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {Container} from 'typedi';
import {RENDERER} from '../services';

export default class Scene extends SceneObject {
    private mixer!: AnimationMixer;
    private scene!: ThreeScene;

    private initialized = false;
    private objects: SceneObject[] = [];

    async awake(): Promise<void> {
        for (const object of this.objects) {
            await object.awake?.();
        }

        const renderer = Container.get(RENDERER);
        const pmremGenerator = renderer.createPMREMGenerator();

        this.scene = new ThreeScene();
        this.scene.background = new Color(0xbfe3dd);
        this.scene.environment = pmremGenerator.fromScene(
            new RoomEnvironment(),
            0.04,
        ).texture;

        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('jsm/libs/draco/gltf/');

        const loader = new GLTFLoader();
        loader.setDRACOLoader(dracoLoader);
        const gltf = await loader.loadAsync('models/gltf/LittlestTokyo.glb');
        const model = gltf.scene;
        model.position.set(1, 1, 0);
        model.scale.set(0.01, 0.01, 0.01);
        this.scene.add(model);

        this.mixer = new AnimationMixer(model);
        this.mixer.clipAction(gltf.animations[0]).play();
    }

    async start(): Promise<void> {
        for (const object of this.objects) {
            await object.start?.();
        }

        for (const object of this.objects) {
            await this.addSceneObjects(object);
        }

        this.initialized = true;
    }

    update(deltaTime: number): void {
        this.mixer.update(deltaTime);
        for (const object of this.objects) {
            object.update?.(deltaTime);
        }
    }

    get sceneObject() {
        return this.scene;
    }

    async add(object: SceneObject) {
        if (this.initialized) {
            await object.awake?.();
            await object.start?.();
            await this.addSceneObjects(object);
        }

        this.objects.push(object);
    }

    onResize(): void {
        if (!this.initialized) {
            return;
        }

        for (const object of this.objects) {
            object.onResize?.();
        }
    }

    private async addSceneObjects(object: SceneObject) {
        const sceneObjects = await object.sceneObjects?.();
        if (sceneObjects == null) {
            return;
        }

        this.scene.add(...sceneObjects);
    }
}
