const fs = require('fs');

const file = fs.readFileSync('./todos.csv', 'utf8')
console.log(file)


const loadToDos = function() {
    const toDosArr = [];
    const rowStrings = file.split('\n');
    for (const rowString of rowStrings) {
    toDosArr.push(rowString.split(', '));
    }
    console.log(toDosArr)
}
loadToDos()

const displayToDos = function(lists){
for (const toDos of lists){
    if (toDos[1] === 'complete'){
        toDos = '✅'
    } 
    if (toDos[1] === 'uncomplete'){
        toDos[1] = '✖'
    }
    let completeness = toDos[0] + '-' + toDos[1]
    console.log(completeness)
    }
}
displayToDos()


const readline = require('readline')
const interface = readline.createInterface({input: process.stdin, output: process.stdout})

const menu = `
Your options are:

1. Add a todo.
2. Remove a todo.
3. Mark a todo completed.
4. Mark a todo uncompleted.
5. Quit.

`

const handleMenu = function(userInput){
    
}