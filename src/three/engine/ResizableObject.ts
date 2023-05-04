import {SceneObject} from './SceneObject';

export abstract class ResizableObject extends SceneObject {
    abstract onResize(): void;
}
