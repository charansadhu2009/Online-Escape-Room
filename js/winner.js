
const player =
localStorage.getItem("playerName") || "Guest";

const score =
localStorage.getItem("score") || 0;

document.getElementById("playerName").innerHTML =
"👤 " + player;

document.getElementById("score").innerHTML =
score;

function playAgain(){

localStorage.clear();

window.location.href="index.html";

}

function downloadCertificate(){

window.location.href="certificate.html";

}
