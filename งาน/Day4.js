function UserInput(){
    userinput = document.getElementById("UserInput").value 
    console.log(userinput)
}

function BotInput(){
    botInput = Math.floor(Math.random() * 100) % 3
    console.log(botInput)
}

function CompareValue(){
    if (userinput == botInput) {
        console.log("DRAW")
    } else if (userinput == 0 && botInput == 2) {
        console.log("User wins")
    } else if (userinput == 1 && botInput == 0) {
        console.log("User wins")
    } else if (userinput == 2 && botInput == 1){
        console.log("User")
    } else {
        console.log("Bot wins")
    }
}
Wins = "User wins"
Lose = "Bot wins"
Draw = "DRAW"
Result_Mes = document.getElementById("Result") 
function PlayGame(){
    userinput = document.getElementById("UserInput").value 
    console.log(userinput)

    botInput = Math.floor(Math.random() * 100) % 3
    console.log(botInput)

    if (userinput == botInput) {
        console.log("DRAW")
        Result_Mes.innerText = Draw
    } else if (userinput == 0 && botInput == 2) {
        console.log("User wins")
        Result_Mes.innerText = Wins
    } else if (userinput == 1 && botInput == 0) {
        console.log("User wins")
        Result_Mes.innerText = Wins
    } else if (userinput == 2 && botInput == 1){
        console.log("User wins")
        Result_Mes.innerText = Wins
    } else {
        console.log("Bot wins")
        Result_Mes.innerText = Lose
    }

}