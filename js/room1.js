let score = 1000;
let keyFound = false;

const message = document.getElementById("message");
const inventory = document.getElementById("inventory");

function showMessage(text) {
    message.innerHTML = text;
}

document.getElementById("table").onclick = () => {
    showMessage("Nothing is under the table.");
};

document.getElementById("clock").onclick = () => {
    showMessage("The clock shows 10:15.");
};

document.getElementById("window").onclick = () => {
    showMessage("The window is locked.");
};

document.getElementById("locker").onclick = () => {

    if (!keyFound) {
        keyFound = true;
        inventory.innerHTML = "Golden Key 🔑";
        score += 100;
        document.getElementById("score").innerHTML = score;
        showMessage("You found a Golden Key!");
    } else {
        showMessage("Locker is empty.");
    }

};

document.getElementById("unlockBtn").onclick = () => {

    const answer = document.getElementById("answer").value.trim();

    if (answer === "1015" && keyFound) {

        alert("🎉 Congratulations! Room 1 Completed!");

        window.location.href = "story.html";

    } else if (!keyFound) {

        showMessage("You need a key first.");

    } else {

        showMessage("Wrong password.");

        score -= 50;

        document.getElementById("score").innerHTML = score;

    }

};
// =====================
// Countdown Timer
// =====================

let minutes = 15;
let seconds = 0;

const timer = setInterval(() => {

    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(timer);
            alert("⏰ Time's Up! Game Over");
            window.location.href = "index.html";
            return;
        }

        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    let m = minutes.toString().padStart(2, "0");
    let s = seconds.toString().padStart(2, "0");

    document.getElementById("time").textContent = `${m}:${s}`;

}, 1000);

// =====================
// Hint System
// =====================

document.getElementById("hintBtn").onclick = () => {

    if (!keyFound) {

        showMessage("💡 Hint: Search inside the locker.");

    } else {

        showMessage("💡 Hint: The clock shows the password.");

    }

};
// =====================
// Flashlight
// =====================

const light = document.getElementById("flashlight");

document.addEventListener("mousemove", (e) => {

    light.style.left = (e.clientX - 90) + "px";
    light.style.top = (e.clientY - 90) + "px";

});
