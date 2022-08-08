var player = sessionStorage.getItem("Player");

const xTurnBtn = document.getElementById("x-turn"),
    oTurnBtn = document.getElementById("o-turn");

const btn0 = document.getElementById("0"),
    btn1 = document.getElementById("1"),
    btn2 = document.getElementById("2"),
    btn3 = document.getElementById("3"),
    btn4 = document.getElementById("4"),
    btn5 = document.getElementById("5"),
    btn6 = document.getElementById("6"),
    btn7 = document.getElementById("7"),
    btn8 = document.getElementById("8");

let array = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
let filled = [];
let complete = false;

var user;
var computer;
var Tcomputer;
var Tuser;

let xTurn = false;
let oTurn = false;

if(player == 1){
    xTurn = true;
    user = 'X';
    computer = 'O';
    Tcomputer = oTurnBtn;
    Tuser = xTurnBtn;
}else if(player == 2){
    oTurn = true;
    user = 'O';
    computer = 'X';
    Tuser = oTurnBtn;
    Tcomputer = xTurnBtn;
}

if(xTurn == true){
    xTurnBtn.classList.add("active");
    oTurnBtn.classList.remove("active");
}else if(oTurn == true){
    oTurnBtn.classList.add("active");
    xTurnBtn.classList.remove("active");
}

var userTurnFlag = true;

const btn0click = () =>{
    if(complete || userTurnFlag == false){
        return;
    }
    if(array[0] == ' '){
        if(xTurn){
            btn0.innerText = "X";
            array[0] = 'X';
            filled.push(0);
            setTimeout(function() {
                computerTurn();
              }, 2000);
        }else{
            btn0.innerText = "O";
            array[0] = 'O';
            filled.push(0);
            setTimeout(function() {
                computerTurn();
              }, 2000);
        }
    }
    Tcomputer.classList.add("active");
    Tuser.classList.remove("active");
    userTurnFlag = false;
}
const btn1click = () =>{
    if(complete || userTurnFlag == false){
        return;
    }
    if(array[1] == ' '){
        if(xTurn){
            btn1.innerText = "X";
            array[1] = 'X';
            filled.push(1);
            setTimeout(function() {
                computerTurn();
              }, 2000);
        }else{
            btn1.innerText = "O";
            array[1] = 'O';
            filled.push(1);
            setTimeout(function() {
                computerTurn();
              }, 2000);
        }
    }
    Tcomputer.classList.add("active");
    Tuser.classList.remove("active");
    userTurnFlag = false;
}
const btn2click = () =>{
    if(complete || userTurnFlag == false){
        return;
    }
    if(array[2] == ' '){
        if(xTurn){
            btn2.innerText = "X";
            array[2] = 'X';
            filled.push(2);
            setTimeout(function() {
                computerTurn();
              }, 2000);
        }else{
            btn2.innerText = "O";
            array[2] = 'O';
            filled.push(2);
            setTimeout(function() {
                computerTurn();
              }, 2000);
        }
    }
    Tcomputer.classList.add("active");
    Tuser.classList.remove("active");
    userTurnFlag = false;
}
const btn3click = () =>{
    if(complete || userTurnFlag == false){
        return;
    }
    if(array[3] == ' '){
        if(xTurn){
            btn3.innerText = "X";
            array[3] = 'X';
            filled.push(3);
            setTimeout(function() {
                computerTurn();
              }, 2000);
        }else{
            btn3.innerText = "O";
            array[3] = 'O';
            filled.push(3);
            setTimeout(function() {
                computerTurn();
              }, 2000);
        }
    }
    Tcomputer.classList.add("active");
    Tuser.classList.remove("active");
    userTurnFlag = false;
}
const btn4click = () =>{
    if(complete || userTurnFlag == false){
        return;
    }
    if(array[4] == ' '){
        if(xTurn){
            btn4.innerText = "X";
            array[4] = 'X';
            filled.push(4);
            setTimeout(function() {
                computerTurn();
              }, 2000);
        }else{
            btn4.innerText = "O";
            array[4] = 'O';
            filled.push(4);
            setTimeout(function() {
                computerTurn();
              }, 2000);
        }
    }
    Tcomputer.classList.add("active");
    Tuser.classList.remove("active");
    userTurnFlag = false;
}
const btn5click = () =>{
    if(complete  || userTurnFlag == false){
        return;
    }
    if(array[5] == ' '){
        if(xTurn){
            btn5.innerText = "X";
            array[5] = 'X';
            filled.push(5);
            setTimeout(function() {
                computerTurn();
              }, 2000);
        }else{
            btn5.innerText = "O";
            array[5] = 'O';
            filled.push(5);
            setTimeout(function() {
                computerTurn();
              }, 2000);
        }
    }
    Tcomputer.classList.add("active");
    Tuser.classList.remove("active");
    userTurnFlag = false;
}
const btn6click = () =>{
    if(complete  || userTurnFlag == false){
        return;
    }
    if(array[6] == ' '){
        if(xTurn){
            btn6.innerText = "X";
            array[6] = 'X';
            filled.push(6);
            setTimeout(function() {
                computerTurn();
              }, 2000);
        }else{
            btn6.innerText = "O";
            array[6] = 'O';
            filled.push(6);
            setTimeout(function() {
                computerTurn();
              }, 2000);
        }
    }
    Tcomputer.classList.add("active");
    Tuser.classList.remove("active");
    userTurnFlag = false;
}
const btn7click = () =>{
    if(complete  || userTurnFlag == false){
        return;
    }
    if(array[7] == ' '){
        if(xTurn){
            btn7.innerText = "X";
            array[7] = 'X';
            filled.push(7);
            setTimeout(function() {
                computerTurn();
              }, 2000);
        }else{
            btn7.innerText = "O";
            array[7] = 'O';
            filled.push(7);
            setTimeout(function() {
                computerTurn();
              }, 2000);
        }
    }
    Tcomputer.classList.add("active");
    Tuser.classList.remove("active");
    userTurnFlag = false;
}
const btn8click = () =>{
    if(complete  || userTurnFlag == false){
        return;
    }
    if(array[8] == ' '){
        if(xTurn){
            btn8.innerText = "X";
            array[8] = 'X';
            filled.push(8);
            setTimeout(function() {
                computerTurn();
              }, 2000);
        }else{
            btn8.innerText = "O";
            array[8] = 'O';
            filled.push(8);
            setTimeout(function() {
                computerTurn();
              }, 2000);
            
        }
    }
    Tcomputer.classList.add("active");
    Tuser.classList.remove("active");
    userTurnFlag = false;
}

const checkWin = (i1, i2, i3, sign) =>{
    if(array[i1] == sign && array[i2] == sign && array[i3] == sign){
        return true;
    }else{
        return false;
    }
}

const checkWinner = () =>{
    if(checkWin(0,1,2,'O') || checkWin(0,3,6,'O') || checkWin(0,4,8,'O') || checkWin(2,5,8,'O') || checkWin(6,7,8,'O') || checkWin(1,4,7,'O') || checkWin(3,4,5,'O') || checkWin(2,4,6,'O') ){
        return 'O';
    }else if(checkWin(0,1,2,'X') || checkWin(0,3,6,'X') || checkWin(0,4,8,'X') || checkWin(2,5,8,'X') || checkWin(6,7,8,'X') || checkWin(1,4,7,'X') || checkWin(3,4,5,'X') || checkWin(2,4,6,'X') ){
        return 'X';
    }else{
        return undefined;
    }
}

const computerClickBtn = (num, cSign) =>{
    switch(num){
        case 0: btn0.innerText = cSign;
            array[num] = cSign;
            filled.push(num);
            break;
        case 1: btn1.innerText = cSign;
            array[num] = cSign;
            filled.push(num);
            break;
        case 2: btn2.innerText = cSign;
            array[num] = cSign;
            filled.push(num);
            break;
        case 3: btn3.innerText = cSign;
            array[num] = cSign;
            filled.push(num);
            break;
        case 4: btn4.innerText = cSign;
            array[num] = cSign;
            filled.push(num);
            break;
        case 5: btn5.innerText = cSign;
            array[num] = cSign;
            filled.push(num);
            break;
        case 6: btn6.innerText = cSign;
            array[num] = cSign;
            filled.push(num);
            break;
        case 7: btn7.innerText = cSign;
            array[num] = cSign;
            filled.push(num);
            break;
        case 8: btn8.innerText = cSign;
            array[num] = cSign;
            filled.push(num);
            break;
        
    }
}

const matchState = document.querySelector(".status-of-match"),
    restartBtn = document.querySelector(".t-container a");

const computerTurn = () =>{
    let winner = checkWinner();
    if(winner == user)
    {
        matchState.classList.add("active1");
        matchState.innerText = "Congratulations!! You won";

        complete = true;
        restartBtn.classList.add("active");
        return;
    }else if(winner == computer)
    {
        matchState.classList.add("active");
        matchState.innerText = "You lost, try again!!";

        complete = true;
        restartBtn.classList.add("active");
        return;
    }
    
    if(filled.length == 9){
        matchState.classList.add("active2");
        matchState.innerText = "Match tied!!";

        complete = true;
        restartBtn.classList.add("active");
        return;
    }else{
        let flag = true;
        while(flag){
            let n = Math.floor(Math.random()*9);
            if(array[n] == ' '){
                computerClickBtn(n, computer);
                flag = false;
            }
        }
    }
    Tuser.classList.add("active");
    Tcomputer.classList.remove("active");
    userTurnFlag = true;
}
