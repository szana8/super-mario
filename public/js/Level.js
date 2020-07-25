import Compositor from "./Compositor";

import Compositor from './Compositor.js';

export default class Level {
    constructor() {
        this.composition = new Compositor();
        this.entities = new Set();
    }
}