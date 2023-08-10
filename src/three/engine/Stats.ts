import StatsJS from "stats.js";
import { Container, Service } from "typedi";
import { SceneObject } from "./SceneObject";
import { CONTAINER, STATS } from "../services";

@Service(STATS)
export default class Stats extends SceneObject {
  private stats!: StatsJS;

  async awake(): Promise<void> {
    this.stats = new StatsJS();
    Container.get(CONTAINER).appendChild(this.stats.dom);
  }

  update(_deltaTime: number): void {
    this.stats.update();
  }
}
