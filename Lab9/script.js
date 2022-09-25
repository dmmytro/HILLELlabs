const object = {

    a: 5,
    
    b: { g: 8, y: 9, t: { q: 48 } },
    
    x: 47
    
}


let cloneObject = {};
cloneObject = JSON.parse(JSON.stringify(object));

console.log('Original object with changes');
object.b.g = 10;
object.b.t.q = 50;
object.a = 76;
object.x = 94;
object.b.y = 107;

console.log(object);
console.log('Clone ')
console.log(cloneObject);






