
var player;
const player1Btn = document.getElementById("player1"),
    player2Btn = document.getElementById("player2"),
    startQuote = document.querySelector(".select-player-container h2");


function player1Onclick(){
    player = 1;
    sessionStorage.setItem("Player", player);
    player1Btn.classList.add("active");
    startQuote.classList.add("active");
    location.href = "index.html";
}
function player2Onclick(){
    player = 2;
    sessionStorage.setItem("Player", player);
    player2Btn.classList.add("active");
    startQuote.classList.add("active");
    location.href = "index.html";
}
