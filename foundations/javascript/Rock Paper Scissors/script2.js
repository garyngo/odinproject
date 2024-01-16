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
            break;
        case "Rock":
            return 'Rock vs Rock: Tie'
        case "Paper":
            return 'Rock vs Paper: You Lose'
    
       }

    }   
    

   
  const playerSelection = prompt("Rock, Paper, Scissors?")
  const computerSelection = getComputerChoice(array);
  console.log(playRound(playerSelection, computerSelection));