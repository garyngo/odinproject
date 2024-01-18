function getComputerChoice(arr) {

    let RandomIndex = Math.floor(Math.random() * arr.length);

    let choice = arr[RandomIndex];

    return choice;

}

let array = ['Rock', 'Paper', 'Scissors'];

let result = getComputerChoice(array);

function playRound(playerSelection, computerSelection) {

        if (computerSelection === "Scissors")
            return 'Rock vs Scissors: You Win'

        if (computerSelection === "Paper")
            return 'Rock vs Paper: You Lose'

        if (computerSelection === "Rock")
            return 'Rock vs Rock: Tie'
      

    }
    
function game() {
    playRound(playerSelection, computerSelection)
    console.log(playRound(playerSelection, computerSelection));
}
    

   
  const playerSelection = 'Rock'
  const computerSelection = getComputerChoice(array);
  console.log(playRound(playerSelection, computerSelection));