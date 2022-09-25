//Task 1
/* try {
    for (let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 10);
    if (number > 6) {
        throw error;
    }else{
    console.log(number);
    }
}
} catch (error) {
        console.log('Error');
    
} */

//Task 2
/* let response = fetch('https://rickandmortyapi.com/api/character/430')
.then(resp => resp.json())
.then(function (data) {
    console.log(data.name);
    console.log(data.id);
    console.log(data.status);
})

console.log(response); */

//Task 3
/* async function getData(){
    let response = await fetch('https://rickandmortyapi.com/api/character/430')

    let resp = await response.json();
    console.log(resp.id);    
    console.log(resp.name);
    console.log(resp.status);
}

getData(); */

//Task 4
try {
    async function getData(){
        let response = await fetch('https://rickandmortyapi.com/api/character/430')
    
        let resp = await response.json();

        if (resp.ok) {
            throw error;
        }else{
            console.log(resp.id);    
            console.log(resp.name);
            console.log(resp.status);
        }
    }
} catch (error) {
    console.log('ERROR!!! There is no such element');
}



