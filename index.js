const  choices =["sang","kaghaz","ghaeychi"]
let playerScore = 0 ;
let computerScore = 0 ;
const score =(result) =>{
    if(result === "player"){
        console.log("you win")
    playerScore++
}else if(result === "computer"){
    console.log("you lose!")    
    computerScore++
}else{
    console.log("its a tie.")
}
console.log(`your score is ${playerScore}`);
console.log(`computer score is ${computerScore}`)
console.log(".......................")
}

const whoWinner = (player , computer) => {
    if(player === computer){
        return "draw"
    }else if(player === "sang"){
        return computer === "gheychi" ? "player" : "coputer" ;
    }else if(player ==="kaghaz") {
        return computer === "gheychi"
    }
}
