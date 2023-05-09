import {Object3D} from 'three/src/core/Object3D';

export abstract class SceneObject {
    update?(deltaTime: number): void;

    awake?(): Promise<void>;

    start?(): Promise<void>;

    onResize?(): void;

    sceneObjects?(): Object3D[];
}
