//Task 1
/* function fillArray(length, args){
    const array = [...Array(length)].fill(args);
    return array;
}
let array = fillArray(10, 'qwerty'); // ['qwerty', 'qwerty', 'qwerty'...]
console.log(array); */

//Task 2
/* let array = [0, 1, 2, null, undefined, 'qwerty', false];
function filterArray(array, ...args){
    return array.filter(el => !args.includes(el));
}

let result = filterArray(array, false, undefined, '', 0, null); 
console.log(result);
// result - [1,2, 'qwerty']; */


//Task 3
/* function calcSum(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

let sum1 = calcSum(0); // 0
let sum2 = calcSum(1,2,3); // 6
let sum3 = calcSum(5,0,10, 1, 5); // 21
console.log(sum1, sum2, sum3); */


//Task 4
/* function createPipe(){
    return function(someThing){
    return "======= " + someThing + " =======";
    }
}
const pipeFunction = createPipe();
console.log(pipeFunction("'some text you like'")); */



//Task 5
/* function consoleFunction(str){
    console.log(str);
}

function alertFunction(num){
    alert(num);
}

function outputSomething(res, func){

    return func(res);
}

outputSomething('something', consoleFunction);
outputSomething('something', alertFunction); */