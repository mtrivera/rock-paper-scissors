"use strict";

let humanScore = 0;
let computerScore = 0;

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