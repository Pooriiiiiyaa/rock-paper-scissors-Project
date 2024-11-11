const choices = ["sang" , "kaghaz" , "gheychi"]

let playerScore = 0 ;
let computerScore = 0 ;

const score = (result) =>{
    if(result === "player"){
        console.log("You Win.")
        playerScore++
    }else if(result === "computer"){
        console.log("You Lose!")
        computerScore++
    }else{
        console.log("Its a Tie.")
    }
    console.log(`your Score Is ${playerScore}`);
    console.log(`Computer Score Is ${computerScore}`);
    console.log("-----------------------");
}


const whoWinner = (player , computer) => {
    if(player === computer) {
        return "Draw"
    }else if(player === "sang") {
        return computer === "gheychi" ? "player" : "computer" ;
    }else if(player === "kaghaz") {
        return computer === "sang" ? "player" : "computer" ;
    }else {
        return computer === "kaghaz" ? "player" : "computer" ;
    }
}

const play = () => {
    const playerChoice = prompt("Choice sang , kaghaz , gheychi")
    if(choices.indexOf(playerChoice?.toLowerCase()) !== -1) {
        console.log(`Your Choice is ${playerChoice}`);
    }else {
        console.log("Cheated!");
        return ;
    }

    const randomIndex = Math.floor(Math.random() * choices.length)
    const computerChoice = choices[randomIndex]
    console.log(`computer Choice is ${computerChoice}`);


    const result = whoWinner(playerChoice , computerChoice)
     score(result)
    if(playerScore === 5) {
        console.log("YOUUUUU WIIIIIIIN")
        return
    }else if(computerScore === 5) {
        console.log("YOU LOSSSSSSSSSSE")
        return;
    }
    play()
}
play()