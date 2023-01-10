export class ShapesContainer implements Shape {
   
    constructor (private arrayShape: Array<Shape>) {

    }
    getSquare(): number {
        return this.arrayShape.reduce ((res, cur) =>
        res + cur.getSquare(), 0)     
    }
    getPerimeter(): number {
        return this.arrayShape.reduce ((res, cur) =>
        res + cur.getPerimeter(), 0)
    }

}