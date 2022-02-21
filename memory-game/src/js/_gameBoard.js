import { checkCards } from "./_gameLogic";
// import { getRandomPicture } from "./_data";
import { restartGame } from "./_restartGame";
import { timerStart } from "./_timer";
import { stepCounterStart, stepCounterStop } from "./_stepCounter";
import { scoreCounterStop } from "./_scoreCounter";

// constants
const body = document.querySelector("body");
const gameBoard = document.querySelector(".game-board");
const startWindow = document.querySelector(".start-window");
const resultGameWindow = document.querySelector(".result-window");
const playerName = document.querySelector(".player-name");
const timeCounterField = document.querySelector(".time_counter");
const buttonResult = document.querySelector(".result-score_button");
const resultGamesWindow = document.querySelector(".games-results-window");

// create cards function
const createCard = (item) => {
  const card = document.createElement("div");
  const picture = document.createElement("img");
  const backSide = document.createElement("div");
  card.classList = "card";
  picture.classList = "picture";
  backSide.classList = "backside";
  gameBoard.appendChild(card);
  card.appendChild(picture);
  card.appendChild(backSide);
  card.setAttribute("data-name", item.name);
  picture.src = item.imgSrc;
};

//start Play function
const startPlay = () => {
  if (playerName.value.length !== 0) {
    startWindow.classList.add("start-window_hidden");
    body.classList.remove("body_lock");
    gameBoard.style.pointerEvents = "auto";
    buttonResult.style.pointerEvents = "none";
    timerStart(0, 0);
  }
};

//playAgain function
const playAgain = () => {
  resultGameWindow.classList.add("result-window_hidden");
  stepCounterStop();
  scoreCounterStop();
  timeCounterField.innerHTML = "00.00";
  startWindow.classList.remove("start-window_hidden");
  restartGame();
};

//showResults functions
const toggleGameResultsWindow = () => {
  startWindow.classList.toggle("start-window_hidden");
  resultGamesWindow.classList.toggle("games-results-window_hidden");
};

const closeGameResultsWindow = () => {
  startWindow.classList.remove("start-window_hidden");
  resultGamesWindow.classList.add("games-results-window_hidden");
};

export {
  createCard,
  startPlay,
  playAgain,
  toggleGameResultsWindow,
  closeGameResultsWindow,
};
