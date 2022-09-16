
console.log("Welocme to TicTacToe");
let music = new Audio("Komiku_-_12_-_Bicycle.mp3");
let audioturn = new Audio("43704_download_trill_ringtone_apple_sms_ringtones");
let gameover = new Audio("mixkit-melodic-game-over-956.wav");
let isgameOver = false;
let Turn = "X"

//change the turn

const changeTurn = () =>{
    return Turn === "X"? "0" : "X";
}

//funtion to check win

const checkWin = ()=>{
    let boxTxt = document.getElementsByClassName('cell');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxTxt[e[0]].innerText === boxTxt[e[1]].innerText && boxTxt[e[2]].innerText === boxTxt[e[1]].innerText && boxTxt[e[0]].innerText != "")){
            document.querySelector('.info').innerText = boxTxt[e[0]].innerText + " Win";
            isgameOver = true;
        }
    })
}


//Game logic------------>

let boxes = document.getElementsByClassName("cell");
Array.from(boxes).forEach(element =>{
    let boxTxt  = element.querySelector(".boxTxt");
    element.addEventListener('click' , ()=>{
        if(boxTxt.innerText === ''){
            boxTxt.innerText = Turn;
            Turn = changeTurn();
            audioturn.play();
            checkWin();
            if(!isgameOver){
                document.getElementsByClassName('info')[0].innerText = "Turn for " + Turn;
            
            }
        }
    })
})

//add onclick listener to reset button

reset.addEventListener('click',()=>{
    let boxTxt = document.querySelectorAll('.boxTxt');
    Array.from(boxTxt).forEach(element =>{
        element.innerText = "";
    })
    Turn = "X";
    isgameOver = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for " + Turn;

})