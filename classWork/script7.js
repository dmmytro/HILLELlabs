class TelephoneBook{
    constructor(name, surname, gender, number){
        this.setData(name);
        this.setData(surname);
        this.setData(gender);
        this.setData(number);
    }

    getData(){
        return[this.name, this.surname, this.gender, this.number];
    }

    setData(nameData, surData, genData, numData){
        if((nameData || surData || genData || numData) === ''){
            throw 'Enter missing data'
        }
        this.name = nameData;
        this.surname = surData;
        this.gender = genData;
        this.number = numData;
    }
}

let person = new TelephoneBook();
let person1 = new TelephoneBook();
person1.setData('Sarah', 'Connor', 'female', '555-4345');
person.setData('John', 'Smith', 'male', '555-4354');
console.log(person1.getData());
console.log(person.getData());
