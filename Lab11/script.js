//Task 1
function swap(elem){
    elem.parentNode.insertBefore(elem, elem.parentNode.firstChild);
}

function color(){
let element = document.getElementById("main").childNodes[5];
element.style.color = "blue";
}


//Task 2
function clearLights() {
    document.getElementById('redLight').style.backgroundColor = "black";
    document.getElementById('yellowLight').style.backgroundColor = "black";
    document.getElementById('greenLight').style.backgroundColor = "black";
    
}
    function illuminateRed() {
        clearLights();
        document.getElementById('redLight').style.backgroundColor = "red";
      }
      
    function illuminateYellow() {
        clearLights();
        document.getElementById('yellowLight').style.backgroundColor = "yellow";
    } 
    
    function illuminateGreen(){
       clearLights();
       document.getElementById('greenLight').style.backgroundColor = "green"; 
    }

    
    function illuminate() {

        setInterval(() => {
            illuminateRed();
            
        }, 3000);

        setInterval(() => {
            illuminateYellow();
            
        }, 6000);

        setInterval(() => {
            illuminateGreen();
            
        }, 9000);
    }





// Task 3
function createTable() {
    let array = [[1,2,3],[4,5,6],[7,8,9]];
    let table = document.createElement('table');
    table.style.width = '100px';
    table.style.height = '120px';
    table.style.textAlign = 'center';
    for (let row of array) {
    table.insertRow();
    for (let cell of row) {
        let newCell = table.rows[table.rows.length - 1].insertCell();
        newCell.textContent = cell;
    }
    }
    document.body.appendChild(table);
    table.setAttribute('border', '2');

}







