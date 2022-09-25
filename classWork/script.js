//Task 1
/* const array = new Array();
array.length = 10;
let doubleSum = 0;
//Method 1
for (let i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random()  * 100);
    console.log(array[i]);
    if(array[i] % 2 ==0){
        doubleSum+= array[i];      
    }continue;
}
console.log('Sum = ' + doubleSum); */


//'Map' method example
/* const array = [...Array(10)];
const newArray = array.map(el => {
    return Math.floor(Math.random() * 10)
});
console.log(newArray)
*/


//Task 2
/* const elements = ['Fire', 'Air', 'Water'];
const newElements = elements.reduce(function (previous, current){
   return (previous + current); 
})
console.log(newElements); */

//Task 3
/* const someArray = [...Array(10)].map(() => 
    Math.floor(Math.random() * 10)
    ).filter (elem => 
        elem < 5
    );
    console.log(someArray); */


//Task 4
/* const array = [1, 2, 3, [5, 4, 6]]; 
const newArray = array.flat();
console.log(array);
console.log(newArray); */


//Task 5
/* const array = [1, 2, 10, 3, 4, 0];
const newArray = array.find(elem => elem > 5); 
console.log(newArray); */


//Task 5 var 2
/* function stringFunction(str){
    console.log(str);
}

function numberFunction(num){
    alert(num);
}

function outputSomething(res, func1, func2){
    if(typeof res === 'string'){
        return func1(res);
    }else if(typeof res === 'number'){
        return func2(res);
    }
}

outputSomething('something', numberFunction, stringFunction);
outputSomething(12, numberFunction, stringFunction); */