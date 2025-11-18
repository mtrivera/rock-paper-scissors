"use strict";

//const GAME_ROUNDS = 5;
let humanScore = 0;
let computerScore = 0;
let gameWinner;
let roundWinner;

//for (let roundCount = GAME_ROUNDS; roundCount > 0; roundCount--) {
roundWinner = playGame();

if (roundWinner === 'human') {
    humanScore++;
} else if (roundWinner === 'computer') {
    computerScore++;
}
//}

gameWinner = calcFinalScore(humanScore, computerScore);
console.log(displayFinalScore(gameWinner, humanScore, computerScore));

function playGame() {
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();

  return playRound(humanSelection, computerSelection);
}

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;

  let computerMove;

  switch(randomNum) {
    case 1:
      computerMove = 'paper';
      break;
    case 2:
      computerMove = 'rock';
      break;
    case 3:
      computerMove = 'scissors';
      break;
  }
  return computerMove;
}

function getHumanChoice() {
  return prompt('Please enter a move: rock, paper, scissors')
        .trim().toLowerCase();
}

function handleRockRules(humanChoice, computerChoice) {
  if (humanChoice === 'rock' && computerChoice === 'rock') {
    return 'Tied! Rock vs Rock';
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    return 'You Lose! Paper beats Rock';
  } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    return 'You Win! Rock beats Scissors';
  }
}

function handlePaperRules(humanChoice, computerChoice) {
  if (humanChoice === 'paper' && computerChoice === 'paper') {
    return 'Tied! Paper vs Paper';
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    return 'You Lose! Scissors beats Paper';
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    return 'You Win! Paper beats Rock';
  }
}

function handleScissorsRules(humanChoice, computerChoice) {
  if (humanChoice === 'scissors' && computerChoice === 'scissors') {
    return 'Tied! Scissors vs Scissors';
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    return 'You Lose! Rock beats Scissors';
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    return 'You Win! Scissors beats Paper';
  }
}

function playRound(humanChoice, computerChoice) {
  let winnerName;
  let ruleOutcomeMessage;

  if (humanChoice === 'rock') {
    ruleOutcomeMessage = handleRockRules(humanChoice, computerChoice);
  } else if (humanChoice === 'paper') {
    ruleOutcomeMessage = handlePaperRules(humanChoice, computerChoice);
  } else if (humanChoice === 'scissors') {
    ruleOutcomeMessage = handleScissorsRules(humanChoice, computerChoice);
  }

  console.log(ruleOutcomeMessage);

  if (ruleOutcomeMessage.includes('Win')) {
    winnerName = 'human';
  } else if (ruleOutcomeMessage.includes('Lose')) {
    winnerName = 'computer';
  } else if (ruleOutcomeMessage.includes('Tie')) {
    winnerName = 'tie';
  }

  return winnerName;
}

function calcFinalScore(humanScore, computerScore) {
  if (humanScore > computerScore) {
    return 'You Won!';
  } else if (humanScore < computerScore) {
    return 'You Lost!';
  } else {
    return 'Tie Match!';
  }
}

function displayFinalScore(gameResultMessage, humanScore, computerScore) {
  return `${gameResultMessage} *Final Score* Human: ${humanScore} Computer: ${computerScore}`
}