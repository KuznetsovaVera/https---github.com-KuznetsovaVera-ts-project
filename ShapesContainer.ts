import { Shape } from "./ShapeInterface";
type ArrayObj = {
    width: number,
    height: number
}
export class ShapesContainer implements Shape {
   
    constructor (private arrayShape: Array<ArrayObj>) {

    }
    getSquare(): number {
        return this.arrayShape.reduce ((res, cur) =>
        res + cur.height*cur.width, 0);
      
    }
    getPerimeter(): number {
        return this.arrayShape.reduce ((res, cur) =>
        res + (cur.height+cur.width)*2, 0);
    }

}