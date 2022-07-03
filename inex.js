function computerPlay() {
    let rand = Math.floor(Math.random() * 3) + 1;
    if(rand == 3) return "Scissors";
    if(rand == 2) return "Paper";
    if(rand == 1) return "Rock";
}

// console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
    p = playerSelection.toUpperCase();
    c = computerSelection.toUpperCase();

    if((p === "ROCK" && c === "SCISSORS") || 
        (p === "SCISSORS" && c === "PAPAER") ||
        (p === "PAPER" && c === "ROCK")
        ) return "WIN";

    if(p === c) return "TIE";


    return "LOSS";

    // rock > scissors > paper > rock
}

function game() {
    let pRecord = 0;
    let cRecord = 0;

    for(let i=0; i<5; i++) {
        let playerSelection = prompt();
        let computerSelection = computerPlay();
        let res = playRound(playerSelection, computerSelection)
        let message;
        if(res == "WIN") {
            message = `You win! ${playerSelection} beats ${computerSelection}`;
            pRecord++;
        } else if(res == "LOSS") {
            message = `You lose! ${computerSelection} beats ${playerSelection}`;
            cRecord++;
        } else message = res;
        console.log(message)
    }
    console.log(`Player score = ${pRecord}, Computer score = ${cRecord}`)
}

game();