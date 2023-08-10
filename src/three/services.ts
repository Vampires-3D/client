import { Token } from "typedi";
import Scene from "./engine/Scene";
import Camera from "./engine/Camera";
import Renderer from "./engine/Renderer";
import Stats from "./engine/Stats";

export const SCENE = new Token<Scene>("scene");
export const CONTAINER = new Token<HTMLDivElement>("container");
export const CAMERA = new Token<Camera>("camera");
export const STATS = new Token<Stats>("stats");
export const RENDERER = new Token<Renderer>("renderer");
