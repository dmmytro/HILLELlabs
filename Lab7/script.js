//Task 1
/* const frameworks = [ 'AngularJS', 'jQuery'];
frameworks.unshift('Backbone.js');
frameworks.push('ReactJS', 'Vue.js');
frameworks.splice(2, 0, 'CommonJS')
console.log(frameworks);

function delElement(array, arg){
    const index = array.indexOf(arg);
    return array.splice(index, 1, 'Это здесь лишнее');
}

delElement(frameworks, 'jQuery');
console.log(frameworks); */


//Task 2
/* function removeNegativeElements(array){
    return array.filter(el => typeof el == 'string' || typeof el == 'number' && el >= 0);
}

let result1 = removeNegativeElements([-9, 2, 3, 0, -28, 'value']); // [2, 3, 0, 'value'];
let result2 = removeNegativeElements([-9, -21, -12]); // []
let result3 = removeNegativeElements(['-102', 102]); // ['-102', 102]

console.log(result1);
console.log(result2);
console.log(result3); */


//Task 3
/* function getStringElements(array){
    return array.filter(element => typeof element == 'string');
}

let arr = [1 , true , 42 , "red" , 64 , "green" , "web" , new Date() , -898 , false]
let result = getStringElements(arr); 
console.log(result); */


//Task 4
/* const array = [...Array(10)].map(el => Math.floor(Math.random() * 10));
console.log(array);

function sumElements(array){
    return (array.length === 0) ? 0 :
    array[0] + sumElements(array.slice(1));
}

console.log(sumElements(array)); */


//Task 5*   Don`t Work
const arr = [0, 2, 4, 5, 7, 10, 2, 3, 5, 6, 10, 3];

/* function sumTenth(array, args){
    if(array[args] !== args){
        return 'There is no such element'
    }
    return (array[args] === args) ?
    {'Sum = ': array[args]} :
    sumTenth(array, args);
} */

function sumTenth(array, args){
    let sum = array.shift();
    let accum = 0;
    if(array[args] !== args){
        return 'There is no such element'
    }else{
    accum = sum + sumTenth(array, args);
    return accum;
    }
}

console.log(sumTenth(arr, 10));

