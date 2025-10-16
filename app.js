"use strict";

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