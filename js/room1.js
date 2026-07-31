let score = 1000;

// Load saved score
const savedScore = localStorage.getItem("score");

if (savedScore) {
    score = parseInt(savedScore);
}
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
     localStorage.setItem("score", score);
        showMessage("You found a Golden Key!");
    } else {
        showMessage("Locker is empty.");
    }

};

document.getElementById("unlockBtn").onclick = () => {

    const answer = document.getElementById("answer").value.trim();
if (answer === "1015" && keyFound) {

    alert("🎉 Congratulations! Room 1 Completed!");

    window.location.href = "loading.html";

}

    } else if (!keyFound) {

        showMessage("You need a key first.");

    } else {

        showMessage("Wrong password.");

       score -= 50;
localStorage.setItem("score", score);
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
           window.location.href="gameover.html";
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

// =====================
// Sounds
// =====================

const bgMusic = document.getElementById("bgMusic");
const clickSound = document.getElementById("clickSound");
const unlockSound = document.getElementById("unlockSound");

// Start background music after first click
document.body.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.volume = 0.3;
        bgMusic.play();
    }
}, { once: true });

// Play click sound on every object
document.querySelectorAll(".object").forEach(obj => {
    obj.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });
});

// Play unlock sound
document.getElementById("unlockBtn").addEventListener("click", () => {
    unlockSound.currentTime = 0;
    unlockSound.play();
});
