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
