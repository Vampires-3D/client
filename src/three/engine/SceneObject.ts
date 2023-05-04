export abstract class SceneObject {
    update?(deltaTime: number): void;

    awake?(): Promise<void>;

    start?(): Promise<void>;
}
