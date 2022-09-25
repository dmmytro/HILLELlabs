//Task 1
/* const triangle = {
    aSide: 0,
    bSide: 0,
    cSide: 0,
    setValues: function() { 
        this.aSide = +prompt('Enter first side');
        this.bSide = +prompt('Enter second side');
        this.cSide = +prompt('Enter third side');
    },
    getPerimeter: function() { 
        const perimeter = this.aSide + this.bSide + this.cSide;
        return perimeter;
    },
    isEqualSides: function() { 
        if(this.aSide === this.bSide && this.bSide === this.cSide && this.aSide === this.cSide){
            return true;
        }else{
            return false;
        }
    },
 }

 triangle.setValues(); // for examle 3 3 3
console.log(triangle.getPerimeter()); // 9
console.log(triangle.isEqualSides()); // true */


//Task 2
/* const calculator = {
    read() {
        this.x = +prompt('Enter X ', 0);
        this.y = +prompt('Enter Y ', 0);
    },

    sum(){
        const sum = this.x + this.y;
        return sum;
    },

    multi(){
        const mult = this.x * this.y;
        return mult;
    },

    div(){
        const div = this.x / this.y;
        return div;
    },

    diff(){
        const diff = this.x - this.y;
        return diff;
    }
};

calculator.read(); // for example 5 2
console.log(calculator.sum()); // 7
console.log(calculator.diff()); // 3
console.log(calculator.div()); // 2.5 */


//Task 3
/* var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
 };

 function format(start, end) {
    console.log(start + this.name + end);
 }
 
 format.call(country, '', ''); // Ukraine
 format.apply(country, ['[', ']']); // [Ukraine]
 format.call(country.capital, '', ''); // Kyiv
 format.apply(country.capital, ['', '']); // Kyiv
 format.apply(this.name, ['', '']); // undefined */


 //Task 4
/*  var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt(); */

/* Будет выведено undefined.
Причиной являеться то, что область видимости var работает таким образом, 
что переменные объявленные с использованием данного ключевого слова
 ограничивается либо функцией, либо, если переменная глобальная, то скриптом. 
 В функции переменная была объявленна после команды вывода.*/


