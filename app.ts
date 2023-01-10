import { Rectangle } from "./Rectangle";
import { Shape } from "./ShapeInterface";
import { ShapesContainer } from "./ShapesContainer";
import { Square } from "./Square";

const shapes: Array<Shape> = [
    new Rectangle(3,4),
    new Square(5),
    new Square(2),
    new Rectangle(1,2), 
];

const container = new ShapesContainer(shapes);
const sumOfSquare: number = container.getSquare();
const sumOfPerimeter: number = container.getPerimeter();
console.log (`sumOfPerimeter: ${sumOfPerimeter}, sumtOfSquare: ${sumOfSquare}`); 
