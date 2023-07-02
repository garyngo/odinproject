let choice = ['Rock', 'Paper', 'Scissors'];
let randomchoice = Math.floor(Math.random() * choice.length);


function getComputerChoice(arr) {

    let RandomIndex = Math.floor(Math.random() * arr.length);

    let item = arr[RandomIndex];

    return item;

}

let array = ['Rock', 'Paper', 'Scissors'];

let result = getComputerChoice(array);

console.log(result);