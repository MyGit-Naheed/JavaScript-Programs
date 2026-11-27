// ReadOnly

interface Point{
    x:number;
    y:number;
}

const point: Point={
    x:10,
    y:11,
}

console.log(point);
point.x = 15;
point.y = 15;
console.log(point);
