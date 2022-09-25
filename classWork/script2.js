//Task 2*
/* let array = [0, 1, 2, null, undefined, 'qwerty', false];
function filterArray(array, ...args){
  return array.filter(el => !args.includes(el));
}
let result = filterArray(array, false, undefined, '', 0, null); 
console.log(result); */
// result - [1,2, 'qwerty'];


//Recurcion task
/* function findFile(obj, pattern, deep = 0){
    if(obj === undefined){
      return 'There is no such file';
    }
    return(obj.filename === pattern) ?
    {'Content: ': obj.content, deep} :
    findFile(obj.folder, pattern, ++deep)
}

const fileSystem = {
    folder: {
      filename: 'text.txt',
      content: '',
      folder: {
        filename: 'text.txt',
        content: '',
        folder: {
          filename: 'thisone.txt',
          content: 'hello',
          folder: {
            filename: 'text.txt',
            content: '',
          }
        }
      }
    }
}

console.log(findFile(fileSystem, 'thisone.txt')); */



//Locks Task
/* function createDec(){ 
   const greetings = ' Hello ';
    return function greeting(someText){
        return(greetings + someText);
    }
}

const dec = createDec();
console.log(dec('Name')); // Hello Name
 */