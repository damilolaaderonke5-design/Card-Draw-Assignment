// =====================================================
// CHALLENGE: Card Draw Duel
// =====================================================
// Every time this page loads, Player 1 and Player 2 each
// draw a random card (numbered 1 to 13). Whoever draws
// the higher number wins. Update the page to show the
// correct card images and announce the winner as text.

// STEP 1:
// Generate a random number between 1 and 13 for each
// player's card.

// Your code here
let randomNumber1 = Math.floor(Math.random() * 13)+1;
let randomNumber2 = Math.floor(Math.random() * 13)+1;



// STEP 2:
// Select the two <img> elements using their IDs
// (player1-card and player2-card).

// Your code here

let player1Card = document.querySelector("#player1-card");
let player2Card = document.querySelector("#player2-card");




// STEP 3:
// Update each image's "src" so it points to the correct
// card file, e.g. "images/card7.png" for a roll of 7.
// Hint: build the file path using string concatenation.

// Your code here

// document.querySelector("#player1-card").setAttribute("src", randomCardImage);
// document.querySelector("#player2-card").setAttribute("src", randomCardImage2);

let randomCardImage = "images/card" + randomNumber1 + ".png";
let randomCardImage2 = "images/card" + randomNumber2 + ".png";

player1Card.setAttribute("src", randomCardImage);
player2Card.setAttribute("src", randomCardImage2);

// STEP 4:
// Select the result heading (id="result") and update its
// text to announce the winner:
//   - Player 1 higher -> "Player 1 Wins!"
//   - Player 2 higher -> "Player 2 Wins!"
//   - Equal            -> "Draw!"

// Your code here
if (randomNumber1 > randomNumber2) {
    document.getElementById("result").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1 ) {
    document.getElementById("result").innerHTML = "Player 2 Wins!"
}
else {
    document.getElementById("result").innerHTML = "Draw!"
}


//strech goal
let player1Score = 0;
let player2Score = 0;

function drawAgainButton() {
    let randomNumber1 = Math.floor(Math.random() * 13) + 1;
    let randomNumber2 = Math.floor(Math.random() * 13) + 1;

    document.getElementById("player1-card").src =
        "images/card" + randomNumber1 + ".png";

    document.getElementById("player2-card").src =
        "images/card" + randomNumber2 + ".png";

    if (randomNumber1 > randomNumber2) {
        document.getElementById("result").textContent = "Player 1 Wins!";
        player1Score++;
        document.getElementById("player1-score").textContent = player1Score;
    } else if (randomNumber2 > randomNumber1) {
        document.getElementById("result").textContent = "Player 2 Wins!";
        player2Score++;
        document.getElementById("player2-score").textContent = player2Score;
    } else {
        document.getElementById("result").textContent = "Draw!";
    }
}

// First draw
drawAgainButton();

// Draw again when button is clicked
document.getElementById("draw-button").addEventListener("click", drawAgainButton);