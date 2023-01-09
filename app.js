"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ShapesContainer_1 = require("./ShapesContainer");
const shapes = [new ShapesContainer_1.ShapesContainer([{ width: 3, height: 4 },
        { width: 1, height: 2 },
        { width: 2, height: 1 }])];
const sumOfPerimeter = shapes[0].getPerimeter();
const sumtOfSquare = shapes[0].getSquare();
console.log(`sumOfPerimeter: ${sumOfPerimeter}, sumtOfSquare: ${sumtOfSquare}`);
//# sourceMappingURL=app.js.map