//Task1
/* const student = {
    averageMark: 4.8,
    firstName: 'John',
    lastName: 'Doe',

    getFullName: function(){
        console.log(`Student name is ${this.firstName + ' ' + this.lastName}`);
    },

    isGrantHolder: function(){
        if (this.averageMark >= 4) {
            console.log('This student is a grant holder');
        }else{
            console.log('This student is not a grant holder')
        }
    },
};

function Aspirant(){
     this.isDissertationComplete = true;
     this.dissertationTopic = ' ';
     this.averageMark = 3.5;

     this.isGrantHolder = function(){
        if(this.isDissertationComplete == true && this.averageMark >= 4){
            console.log('This aspirant is a grant holder');
        }else{
            console.log('This aspirant is not a grant holder');
        }
     }
}

Aspirant.prototype = student;
let aspirant = new Aspirant();

for(let prop in aspirant){
    console.log(prop);
}

// averageScore: 4.8
student.isGrantHolder(); // true
// averageScore: 4.8, isDissertationComplete: false
aspirant.isGrantHolder(); // false */




//Task 2
class Plane{
    constructor(name){
        this.isFlying = false;
        this.name = name;
    }

    takeOff(){
        this.isFlying = true;
    }

    land(){
        this.isFlying = false;
    }
}

let elem;
const airport = {
    planes: [elem],
    getFlyingPlanes: function(){
        for(let el in this.planes){
            if(Plane.isFlying === true){
                return this.planes;
            }else{
                return this.planes.pop(el);
            }
        }
    },
};

let plane1 = new Plane("First");
let plane2 = new Plane("Killer");
plane2.takeOff();
airport.planes.push(plane1, plane2);
console.log(airport.getFlyingPlanes());
