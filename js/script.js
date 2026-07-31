// ==============================
// ESCAPE ROOM - SCRIPT.JS
// ==============================

// Buttons
const startBtn = document.getElementById("startBtn");
const aboutBtn = document.getElementById("aboutBtn");

// Welcome Message
window.onload = function () {
    console.log("Escape Room Website Loaded Successfully!");
};

// ==============================
// Start Game Button
// ==============================

if (startBtn) {
    startBtn.addEventListener("click", function () {

        alert(
            "🔐 Welcome to Escape Room!\n\n" +
            "Your adventure begins now.\n" +
            "Find clues, solve puzzles and escape before time runs out!"
        );

        window.location.href = "login.html";

    });
}

// ==============================
// About Button
// ==============================

if (aboutBtn) {
    aboutBtn.addEventListener("click", function () {

        alert(
            "🎮 Escape Room\n\n" +
            "✔ Solve Puzzles\n" +
            "✔ Find Hidden Clues\n" +
            "✔ Unlock Secret Doors\n" +
            "✔ Beat the Countdown Timer\n" +
            "✔ Reach the Leaderboard"
        );

    });
}

// ==============================
// Hero Title Animation
// ==============================

const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {

    let colors = [
        "#ffffff",
        "#ff0000",
        "#ffcc00",
        "#00ffff"
    ];

    let index = 0;

    setInterval(function () {

        heroTitle.style.color = colors[index];

        index++;

        if (index >= colors.length) {
            index = 0;
        }

    }, 1000);

}

// ==============================
// Feature Cards Animation
// ==============================

const cards = document.querySelectorAll(".card");

cards.forEach(function(card){

    card.addEventListener("mouseenter",function(){

        card.style.transform = "scale(1.05)";

    });

    card.addEventListener("mouseleave",function(){

        card.style.transform = "scale(1)";

    });

});

// ==============================
// Current Year in Footer
// ==============================

const footer = document.querySelector("footer p");

if (footer) {

    const year = new Date().getFullYear();

    footer.innerHTML =
        "© " + year + " Escape Room Game | Designed by Charan";

}

// ==============================
// Console Message
// ==============================

console.log("Escape Room Game Ready!");
