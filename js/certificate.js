
const player =
localStorage.getItem("playerName") || "Guest";

const score =
localStorage.getItem("score") || 0;

document.getElementById("player").innerHTML = player;

document.getElementById("score").innerHTML = score + " Points";
