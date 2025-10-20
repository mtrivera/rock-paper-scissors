"use strict";

let humanScore = 0;
let computerScore = 0;
let roundWinner;

playGame();

function playGame(gameRounds = 5) {
  for (let roundCount = gameRounds; roundCount > 0; roundCount--) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    roundWinner = playRound(humanSelection, computerSelection);

    if (roundWinner === 'human') {
      humanScore++;
    } else if (roundWinner === 'computer') {
      computerScore++;
    }
  }

  console.log(calcFinalScore(humanScore, computerScore));
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
    return `You Won! *Final Score* Human: ${humanScore} Computer: ${computerScore}`;
  } else if (humanScore < computerScore) {
    return `You Lost! *Final Score* Human: ${humanScore} Computer: ${computerScore}`;
  } else {
    return `Tie Match! *Final Score* Human: ${humanScore} Computer: ${computerScore}`;
  }
}