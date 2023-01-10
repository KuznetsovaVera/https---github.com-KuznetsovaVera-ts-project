"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rectangle_1 = require("./Rectangle");
const ShapesContainer_1 = require("./ShapesContainer");
const Square_1 = require("./Square");
const shapes = [
    new Rectangle_1.Rectangle(3, 4),
    new Square_1.Square(5),
    new Square_1.Square(2),
    new Rectangle_1.Rectangle(1, 2),
];
const container = new ShapesContainer_1.ShapesContainer(shapes);
const sumOfSquare = container.getSquare();
const sumOfPerimeter = container.getPerimeter();
console.log(`sumOfPerimeter: ${sumOfPerimeter}, sumtOfSquare: ${sumOfSquare}`);
//# sourceMappingURL=app.js.map