function playGame() {
  const options = ["snake", "water", "gun"];
  const computerChoice = options[Math.floor(Math.random() * options.length)];
  const userChoice = prompt("Enter snake, water, or gun:");

  if (!userChoice) {
    return; // Exit the game if the user cancels or clicks "OK" without entering a value
  }

  const message = `You chose ${userChoice}. The computer chose ${computerChoice}.`;

  if (userChoice === computerChoice) {
    alert(message + " It's a tie!");
  } else if (userChoice === "snake") {
    if (computerChoice === "water") {
      alert(message + " You win!");
    } else {
      alert(message + " You lose!");
    }
  } else if (userChoice === "water") {
    if (computerChoice === "gun") {
      alert(message + " You win!");
    } else {
      alert(message + " You lose!");
    }
  } else if (userChoice === "gun") {
    if (computerChoice === "snake") {
      alert(message + " You win!");
    } else {
      alert(message + " You lose!");
    }
  } else {
    alert("Invalid input. Please enter snake, water, or gun.");
  }
}

// Play the game until the user says "no"
let play = true;

while (play) {
  playGame();
  play = confirm("Do you want to play again?");
}
