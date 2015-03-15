export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

if (require.main === module) {
    let pt = new Point(7,4);
    console.log(`My point: ${JSON.stringify(pt)}`);
}
