"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapesContainer = void 0;
class ShapesContainer {
    constructor(arrayShape) {
        this.arrayShape = arrayShape;
    }
    getSquare() {
        return this.arrayShape.reduce((res, cur) => res + cur.height * cur.width, 0);
    }
    getPerimeter() {
        return this.arrayShape.reduce((res, cur) => res + (cur.height + cur.width) * 2, 0);
    }
}
exports.ShapesContainer = ShapesContainer;
//# sourceMappingURL=ShapesContainer.js.map