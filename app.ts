import { Shape } from "./ShapeInterface";
import { ShapesContainer } from "./ShapesContainer";

const shapes: Array<Shape> = [new ShapesContainer(
                    [{width: 3, height: 4},
                     {width: 1, height: 2},
                     {width: 2, height: 1}])];

const sumOfPerimeter: number = shapes[0].getPerimeter();
const sumtOfSquare: number = shapes[0].getSquare();  
console.log (`sumOfPerimeter: ${sumOfPerimeter}, sumtOfSquare: ${sumtOfSquare}`);                   