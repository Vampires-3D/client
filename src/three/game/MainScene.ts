import { Service } from "typedi";
import Scene from "../engine/Scene";
import { SCENE } from "../services";

@Service(SCENE)
export default class MainScene extends Scene {
  async awake(): Promise<void> {
    await super.awake();
  }

  update(deltaTime: number) {
    super.update(deltaTime);
  }
}
