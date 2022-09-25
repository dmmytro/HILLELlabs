//Task 1
let textOnly = document.getElementById("textField").value;
let telOnly = document.getElementById("telephoneField").value;
let mailOnly = document.getElementById("emailField").value;
let url = document.getElementById("urlField").value;
let firstAccept = document.getElementById("acceptColor");
let secondAcept = document.getElementById("acceptColor1");
let thirdAccept = document.getElementById("acceptColor2");
let fourthAccept = document.getElementById("acceptColor3");
let submit = document.getElementById("submithBtn");


function checkText(textOnly){
    return textOnly.match(/\w/g);
}

function checkPhone(telOnly) {
    //+380975435577 - random mobile for testing
    return telOnly.match(/^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/);
}

function checkMail(mailOnly) {
    //flip@gmail.com - random email for testing
    return mailOnly.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}

function checkUrl(url) {
    return url.match(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
}

function showText(){
    if(checkText('TOYOTAAAA')){
        firstAccept.style.backgroundColor = 'lime';
    }else{
        firstAccept.style.backgroundColor = 'lightcoral';
    }
}

function showPhone(){
    if(checkPhone('+380975435577')){
        secondAcept.style.backgroundColor = 'lime';
    }else{
        secondAcept.style.backgroundColor = 'lightcoral';
    }
}

function showMail(){
    if(checkMail('flip@gmail.com')){
        thirdAccept.style.backgroundColor = 'lime';
    }else{
        thirdAccept.style.backgroundColor = 'lightcoral';
    }
}

function showUrl(){
    if(checkUrl('https://www.youtube.com/')){
        fourthAccept.style.backgroundColor = 'lime';
    }else{
        fourthAccept.style.backgroundColor = 'lightcoral';
    }
}

submit.addEventListener("click", function(){
    showText();
    showPhone();
    showMail();
    showUrl();
})



//Task 2
let x, y, even = 0;
const colors = document.getElementsByClassName('colors');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

for (var i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', function (event) {
    console.log('Colors were chosen');
    event.target.style.color = event.target.innerHTML;

    ctx.strokeStyle = event.target.innerHTML;
    drawLine();

})
}

const easel = document.getElementById('easel');

function drawLine(){
easel.addEventListener('mousedown', function(event){
    
        if (even) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke(); 
    
        x = event.offsetX;
        y = event.offsetY;
        even = 0;  
      } else {
        x = event.offsetX;
        y = event.offsetY;
        even = 1;
      } 
})
}









