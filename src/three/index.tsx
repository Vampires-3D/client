import React, { memo, useEffect, useRef } from "react";
import "reflect-metadata";
import "./game";
import { Container } from "typedi";
import { CONTAINER } from "./services";
import initializeEngine from "./engine";

let rendered = false;
const Three = memo(() => {
  if (rendered) {
    throw new Error("Three initialized twice!");
  }
  rendered = true;

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    Container.set(CONTAINER, ref.current);

    initializeEngine();
  }, []);

  return <div ref={ref} />;
});

export default Three;
