let player_choice = "";
// let computer_choice = getComputerChoice();

player_img = document.querySelector("#player-img");
computer_img = document.querySelector("#computer-img");

result_label = document.querySelector("#result");

rock_button = document.querySelector("#rock-button");
paper_button = document.querySelector("#paper-button");
scissors_button = document.querySelector("#scissors-button");
play_button = document.querySelector("#play-button");

function changeImage(choice) {
  console.log(`${choice} clicked!`);
  if (choice === "rock") {
    player_img.src = "./assets/rock.png";
    player_choice = "rock";
  } else if (choice === "paper") {
    player_img.src = "./assets/paper.png";
    player_choice = "paper";
  } else if (choice === "scissors") {
    player_img.src = "./assets/scissors.png";
    player_choice = "scissors";
  }
}

function getComputerChoice() {
  let computer_choice = Math.floor(Math.random() * 3);

  if (computer_choice === 0) {
    computer_img.src = "./assets/rock.png";
    return "rock";
  } else if (computer_choice === 1) {
    computer_img.src = "./assets/paper.png";
    return "paper";
  } else {
    computer_img.src = "./assets/scissors.png";
    return "scissors";
  }
}

function gameLogic(p1, p2) {
  // console.log(`Player 1 ${p1}`);
  // console.log(`Player 2 ${p2}`);

  if (p1 == "rock") {
    if (p2 == "rock") {
      result_label.innerHTML = "Tied!";
    } else if (p2 == "paper") {
      result_label.innerHTML = "Computer Wins!";
    } else if (p2 == "scissors") {
      result_label.innerHTML = "You win!";
    }
  } else if (p1 == "paper") {
    if (p2 == "rock") {
      result_label.innerHTML = "You win!";
    } else if (p2 == "paper") {
      result_label.innerHTML = "Tied!";
    } else if (p2 == "scissors") {
      result_label.innerHTML = "Computer wins!";
    }
  } else if (p1 == "scissors") {
    if (p2 == "rock") {
      result_label.innerHTML = "Computer wins!";
    } else if (p2 == "paper") {
      result_label.innerHTML = "You win!";
    } else if (p2 == "scissors") {
      result_label.innerHTML = "Tied!";
    }
  } else {
    console.log("Please enter a valid input");
  }
}

rock_button.addEventListener("click", function () {
  //anonymous function
  changeImage("rock");
});
paper_button.addEventListener("click", () => changeImage("paper"));
scissors_button.addEventListener("click", () => changeImage("scissors"));

play_button.addEventListener("click", () => {
  let computer_choice = getComputerChoice();
  gameLogic(player_choice, computer_choice);
});
