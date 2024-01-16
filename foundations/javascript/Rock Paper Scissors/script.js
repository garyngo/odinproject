function getComputerChoice(arr) {

    let RandomIndex = Math.floor(Math.random() * arr.length);

    let choice = arr[RandomIndex];

    return choice;

}

let array = ['Rock', 'Paper', 'Scissors'];

let result = getComputerChoice(array);

console.log(result);


function playround(pr) {
    let userChoice = prompt("Rock, Paper, Scissors?");
}