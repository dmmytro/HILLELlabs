const array = [...Array(15)].map(elem => Math.floor(Math.random() * 20));
console.log(array);

//Task 2
/* const arrayDividedByThree = array.filter(el => !(elem % 3));
console.log(arrayDividedByThree); */

//Task 3*
/* const errorString = 'There is no element more then seven';
const arraySeven = array.filter(el => (el > 7)) ? array.reduce((previous, current) => array.slice(previous, current)) : Array.from(errorString);
console.log(arraySeven); */


//Task 4
/* const multiplyArr = array.map(el => el * 2);
console.log(multiplyArr); */

//Task 5
/* const sumElements = array.filter(el => !(el % 2)).reduce((previous , current) => previous + current, 0);
console.log(sumElements); */

//Task 6
/* const array2 = [].concat(array);
const array3 = [].concat(array);
const delFirst = array2.shift();
const delLast = array3.pop();
console.log(array2);
console.log(array3); */

//Task 7*
/* const arrayOne = ['dog', 'cat', 'bird', 'rabbit', 'horse'];
const arrayTwo = ['apple', 'car', 'cat', 'ball', 'horse'];

const concated = arrayOne.concat(arrayTwo);

const arrayThree = concated.filter(function(item, pos) {
    return concated.indexOf(item) !== pos;
});

//Right Method, using 'includes'
const arrayOne = ['dog', 'cat', 'bird', 'rabbit', 'horse'];
const arrayTwo = ['apple', 'car', 'cat', 'ball', 'horse'];
const found = arrayOne.filter(ele => arrayTwo.includes(ele));
console.log(found);*/

