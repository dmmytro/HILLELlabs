function getTime(){
    let date = new Date();
    return date;
}
console.log(getTime());

function intervalTime(){
    let counter = 0;
    let timeInterval = 2;
    if(counter === 0){
      console.log('Enabled')
    }
    const interval = setInterval(() => {
      counter++;
      console.log(`${timeInterval} seconds have passed`);      
      timeInterval+= 2;  
      if(counter === 5){
        console.log('Timer stoped');
        clearInterval(interval);
      }
    }, 2000);

}
intervalTime();



//Task 2
/* function timer(time) {

    const interval = setInterval(() => {
      console.log(time);
      time--;
      if(time === 0){
        clearInterval(interval);
        console.log('Timer End');
      }
    }, 1000);

}
timer(20); */