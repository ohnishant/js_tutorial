function getComputerChoice() {
  let computer_choice = Math.floor(Math.random() * 3);

  if (computer_choice === 0) {
    return "rock";
  } else if (computer_choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

let user_input = prompt("Enter a rock, paper or scissors: ").toLowerCase();
let computer = getComputerChoice();

function gameLogic(p1, p2) {
  console.log(`Player 1 ${p1}`);
  console.log(`Player 2 ${p2}`);

  if (p1 == "rock") {
    if (p2 == "rock") {
      console.log("Tied!");
    } else if (p2 == "paper") {
      console.log("Computer Wins!");
    } else if (p2 == "scissors") {
      console.log("You win!");
    }
  } else if (p1 == "paper") {
    if (p2 == "rock") {
      console.log("You win!");
    } else if (p2 == "paper") {
      console.log("Tied!");
    } else if (p2 == "scissors") {
      console.log("Computer wins!");
    }
  } else if (p1 == "scissors") {
    if (p2 == "rock") {
      console.log("Computer wins!");
    } else if (p2 == "paper") {
      console.log("You win!");
    } else if (p2 == "scissors") {
      console.log("Tied!");
    }
  } else {
    console.log("Please enter a valid input");
  }
}

gameLogic(user_input, computer);
