//Task 1
/* let name = prompt("Enter your name: ");
let string = '';
for(let i = 1; i <= 4; i++){
   
    if( i == 3){
        string+=(`Happy birthday, dear ${name} \n`);
    }
    else{
        string+=('Happy birthday to you \n');
    }
}
    console.log(string)   */



//Task 2
/* let n = prompt("Enter number of repetitions of symbol: ");
let str = '';
for(let i = 0;i < n; i++){
    str+= '.#';
}
console.log(str); */


//Task 3
/* let someNumber = parseInt(prompt("Enter number: ", 7));
let sum = 0;
do{
    someNumber = prompt("Invalid. You should enter a number", 7);
}while(isNaN(someNumber))

for(let i = 0; i <= someNumber;i++){
    if(i % 2  !== 0){
        sum+= i;
    }
}
console.log(sum); */


//Task 4
/* let number = Math.random();
let iterations = 0;  
while(true){
    console.log(number);
    console.log('\n');
    iterations++;
    if(Math.random() > 0.7){
        console.log(`Loop was finished because of: ${number}`);
        console.log(`Number of iterations: ${iterations}`);
        break;      
    }
} */



//Task 5
/* let num = 50;
for(let i = 1; i <= 50; i++){

    switch(true){
        case (i % 3 === 0 && i % 5 === 0):
            console.log('Div by 3 and 5');
            break;
        case (i % 5 === 0):
            console.log('Div by 5');
            break;
        case (i % 3 === 0 ):
            console.log('Div by 3');
            break;
        default:  
          console.log(i);
          break;
    } 
} */



//Task 6
/* const today = new Date(); 
console.log(now); */

/* const now = today.getTimezoneOffset() / 60;
console.log(today); */