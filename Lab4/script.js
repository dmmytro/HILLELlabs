//Task 1
const array = ['455',87.15, true, undefined, 7, null, 'false', [], {}]
array.forEach(element => {
    console.log(typeof element);
    if(typeof element == 'number'){
        element+= 3;
        console.log(element);
    }
});

//Task 2
/* let array1 = new Array;
array1.length = parseInt(prompt("Enter array length", 7));

for (let i = 0; i < array1.length; i++) {
    array1[i] = Math.floor(Math.random() * 10);
    console.log(array1[i]);
    //console.log('\n');    
}

let array2 = new Array;
array2 = array1.slice();
console.log('Second array = ');
for (let i = 0; i < array2.length; i++) {
    if ((i+1) % 3 == 0) {
        array2[i] *= 3;
    }else{
        array2[i] *= 1;
    }
    console.log(array2[i]); 
    //console.log('\n');
} */


//Task 3
/* const student1 = {
    firstName: "Alex",
    lastName: "Mercer",
    mark: 5
};

const student2 = {...student1};
student2.mark = 4;

const student3 = Object.assign({}, student1);
student3.mark = 3;

let averageMark = (student1['mark'] + student2['mark'] + student3['mark']) / 3

console.log(student1);
console.log(student2);
console.log(student3);
console.log('Average mark = ' + averageMark);

console.log('Student1 mark = '  + student1.mark);
console.log('Student2 mark = '  + student2.mark);
console.log('Student3 mark = '  + student3.mark);

for (const key in student1) {
    console.log(key +  ':' + student1[key]);
}
 */