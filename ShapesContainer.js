"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapesContainer = void 0;
/*
type ArrayObj = {
    width: number,
    height: number
}
*/
class ShapesContainer {
    constructor(arrayShape) {
        this.arrayShape = arrayShape;
    }
    getSquare() {
        return this.arrayShape.reduce((res, cur) => res + cur.getSquare(), 0);
    }
    getPerimeter() {
        return this.arrayShape.reduce((res, cur) => res + cur.getPerimeter(), 0);
    }
}
exports.ShapesContainer = ShapesContainer;
//# sourceMappingURL=ShapesContainer.js.map