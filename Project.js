BotResult = document.getElementById("botresult")
OutputResult = document.getElementById("ResultText")
WinCountHTML = document.getElementById("WinCount")
LoseCountHTML = document.getElementById("LoseCount")
DrawCountHTML = document.getElementById("DrawCount")
PlayerResult = document.getElementById("playerresult")
BotResultImg = document.getElementById("botresultimg")
PlayerResultImg = document.getElementById("playerresultimg")
WinCount = 0
LoseCount = 0
DrawCount = 0
console.log(Number(WinCount))
function Random(){
    Botinput = Math.floor((Math.random() * 100))% 3
    console.log(Botinput)
}

console.log(OutputResult)

function Rock() {
    Random()
    if (Botinput == 0){
        console.log("Draw")
      OutputResult.innerText = "Draw"
      BotResult.innerText = "Bot chooses Rock"
      PlayerResult.innerText = "Player chooses Rock"
      DrawCount= Number(DrawCount) + 1
      DrawCountHTML.innerText = DrawCount
      PlayerResultImg.src = "Rock.png"
      BotResultImg.src = "Rock.png"
    }
    else if(Botinput == 1){
        console.log("Lose")
        OutputResult.innerText = "Lose"
        BotResult.innerText = "Bot chooses Paper"
        PlayerResult.innerText = "Player chooses Rock"
        LoseCount= Number(LoseCount) + 1
        LoseCountHTML.innerText = LoseCount
        PlayerResultImg.src = "Rock.png"
        BotResultImg.src = "Paper.png"
    }
    else{
        console.log("Win")
      OutputResult.innerText = "Win"
      BotResult.innerText = "Bot chooses Scissor"
      PlayerResult.innerText = "Player chooses Rock"
      WinCount= Number(WinCount) + 1
      WinCountHTML.innerText = WinCount
      PlayerResultImg.src = "Rock.png"
      BotResultImg.src = "Scissor.png"
    }
    console.log(Botinput)
}
function Paper() {
    Random()
    if (Botinput == 1){
        console.log("Draw")
      OutputResult.innerText = "Draw"
      BotResult.innerText = "Bot chooses Paper"
      PlayerResult.innerText = "Player chooses Paper"
      DrawCount= Number(DrawCount) + 1
      DrawCountHTML.innerText = DrawCount
      PlayerResultImg.src = "Paper.png"
      BotResultImg.src = "Paper.png"
    }
    else if(Botinput == 2){
        console.log("Lose")
        OutputResult.innerText = "Lose"
        BotResult.innerText = "Bot chooses Scissor"
        PlayerResult.innerText = "Player chooses Paper"
        LoseCount= Number(LoseCount) + 1
      LoseCountHTML.innerText = LoseCount
      PlayerResultImg.src = "Paper.png"
      BotResultImg.src = "Scissor.png"
    }
    else{
        console.log("Win")
      OutputResult.innerText = "Win"
      BotResult.innerText = "Bot chooses Rock"
      PlayerResult.innerText = "Player chooses Paper"
      WinCount= Number(WinCount) + 1
      WinCountHTML.innerText = WinCount
      PlayerResultImg.src = "Paper.png"
      BotResultImg.src = "Rock.png"
    }
    console.log(Botinput)
}

function Scissor() {
    Random()
    if (Botinput == 2){
        console.log("Draw")
      OutputResult.innerText = "Draw"
      BotResult.innerText = "Bot chooses Scissor"
      PlayerResult.innerText = "Player chooses Scissor"
      DrawCount= Number(DrawCount) + 1
      DrawCountHTML.innerText = DrawCount
      PlayerResultImg.src = "Scissor.png"
      BotResultImg.src = "Scissor.png"
    }
    else if(Botinput == 0){
        console.log("Lose")
        OutputResult.innerText = "Lose"
        BotResult.innerText = "Bot choose Rock"
        PlayerResult.innerText = "Player chooses Scissor"
        LoseCount= Number(LoseCount) + 1
        LoseCountHTML.innerText = LoseCount
        PlayerResultImg.src = "Scissor.png"
        BotResultImg.src = "Rock.png"
    }
    else{
        console.log("Win")
      OutputResult.innerText = "Win"
      BotResult.innerText = "Bot choose Paper"
      PlayerResult.innerText = "Player chooses Scissor"
      WinCount= Number(WinCount) + 1
      WinCountHTML.innerText = WinCount
      PlayerResultImg.src = "Scissor.png"
      BotResultImg.src = "Paper.png"
    }
    console.log(Botinput)
}

function ResetScore() {
  WinCount = 0
  LoseCount = 0
  DrawCount = 0
  WinCountHTML.innerText = WinCount
  LoseCountHTML.innerText = LoseCount
  DrawCountHTML.innerText = DrawCount
  OutputResult.innerText = ""
  BotResult.innerText = ""
  PlayerResult.innerText = ""
  BotResultImg.src = "filp.png"
  PlayerResultImg.src = "images.png"
}



