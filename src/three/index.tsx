import 'reflect-metadata';
import './engine/Scene';
import './engine/Camera';
import './engine/Renderer';
import './engine/Stats';
import './game/MainScene';

import {Container} from 'typedi';
import {CONTAINER} from './services';
import initializeEngine from './engine';
import {memo, useEffect, useRef} from 'react';

const Three = memo(() => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        Container.set(CONTAINER, ref.current);

        initializeEngine();
    }, []);

    return (
        <div ref={ref}/>
    );
});

export default Three;
