//Task 1
let coffeeMachine = {
    message: 'Your coffee is ready!',
    start: function() {
     setTimeout(() => console.log(this.message), 3000);
    },
 }

 //coffeeMachine.start();

let teaPlease = {
    message: 'Wanna some tea instead of coffee?',
    start: function(){
        setTimeout(() => console.log(this.message), 3000);
        //setTimeout(coffeeMachine.start(this.message).bind(this.message), 3000);
    },
} 
let start = coffeeMachine.start.bind(teaPlease);
start();


 //Task 2
/* function concatStr(greeting, split, name){
    greeting = 'Hello';
    split = ' ';
    return (greeting + split + name);
}

let hello = concatStr.bind(null, null, this.name);
let finalResult = hello('Matt');
let finalResult2 = hello('James');
let finalResult3 = hello('Andy');
console.log(finalResult);  
console.log(finalResult2);
console.log(finalResult3); */



//Task 3
//Using 'setInterval'
/* function showNumbers(from, to, interval){
    let current = from;
    setInterval(function move() {
        if(current <= to){  
            console.log(current);          
            ++current;
                           
        }    
    }, interval)
} */

//using 'recursive setTimeout'
/* function showNumbers(from, to, interval) {
    let current = from;
    setTimeout(function move(){
        
        if(current <= to){
            console.log(current);
            setTimeout(move, interval);
            current++;
        }
        
    }, interval)
}
showNumbers(5, 10, 1000) */


//Task 4
/* function addBase(base) {
    return function (num) {
      return base + num;
    };
  }
  let addOne = addBase(1);
  alert(addOne(5) + addOne(3));
//Выведет 10
//addOne прибавляет 1 к параметрам, которые находятся в вызове
// */


