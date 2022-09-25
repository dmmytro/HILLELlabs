//Task 1
/* let clicker = document.getElementById("myDiv");
clicker.addEventListener("click", function(){
    console.log('Div is clicked');
}); */


//Task 2
/* let elem = document.getElementById("enter");
elem.addEventListener("input", function(event) {
  console.log(event.target.value);
  console.log(this.value);
}); */

//Task 3
let elem = document.getElementById("enter");
elem.addEventListener("input", function(event) {
    if(event.target.value == [0-9]){
        document.body.style.backgroundColor = 'red';
    }else{
        document.body.style.backgroundColor = 'green';
    }
});




