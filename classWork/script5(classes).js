class Animal{
    constructor(animalName){
        this.name = animalName;
    }

    run(){
        console.log(`${this.name} is running`);
    }

    stop(){
        console.log(`${this.name} stops`);
    }

    color(){
        console.log('grey');
    }
}

const animal = new Animal();

class Dog extends Animal{
    
    sounds(){
        console.log('Bark');
    }

}

class Cat extends Animal{
    
    sounds(){
        console.log('Meow');
    }
}


const cat = new Cat('Cat');
const dog = new Dog('Dog');

cat.color();
dog.color();

cat.run();
cat.stop();

dog.run();
dog.stop();

dog.sounds();
cat.sounds();


