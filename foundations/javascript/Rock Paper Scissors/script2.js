function getComputerChoice(arr) {

    let RandomIndex = Math.floor(Math.random() * arr.length);

    let choice = arr[RandomIndex];

    return choice;

}

let array = ['Rock', 'Paper', 'Scissors'];

let result = getComputerChoice(array);

function playRound(playerSelection, computerSelection) {

       switch(computerSelection) {
        case "Scissors":
            return 'Rock vs Scissors: You Win'
        case "Paper":
            return 'Rock vs Paper: You Lose'
        case "Rock":
            return 'Tie - Replay round'
       }

    }
    
function game() {
    playRound(playerSelection, computerSelection)
    console.log(playRound(playerSelection, computerSelection));
}
    

   
  const playerSelection = 'Rock'
  const computerSelection = getComputerChoice(array);
  console.log(playRound(playerSelection, computerSelection));