//Task 1
/* let promise = new Promise(function(resolve){
    setTimeout(() => {
        resolve('Hi there');
    }, 3000);
});

promise.then(res => {
    console.log(res);
}) */


//Task 2
/* let number;
let promise2 = new Promise(function isEven(resolve, reject) {
    number = Math.floor(Math.random() * 10);
    if(number % 2 === 0){
        setTimeout(() => resolve(`This number is ${number}. It is even`), 1000)
    }else{
        setTimeout(() => reject(`This number is ${number}. It is not even`), 1000)
    }
    
})

promise2.then(res => {
    console.log(res);
}).catch(err =>{
    console.log(err);
}) */


//Task 3
function delay(time) {
    return new Promise((resolve) => {
        setTimeout(() => {resolve(' ')}, time);
    })

}

async function callDelay(){
    console.log('First call');
    await delay(4000).then(console.log);
    console.log('Second call');
}

callDelay();


