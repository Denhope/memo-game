import { checkCards } from "./_gameLogic";
import { getRandomPicture } from "./_data";
import { restartGame } from "./_restart";
import { timerStart, timerStop } from "./_timer";
import { stepCounterStart, stepCounterStop } from "./_stepCounter";

import { scoreCounterStop } from "./_scoreCounter";

const body = document.querySelector("body");
const gameBoard = document.querySelector(".game-board__field");
const startPlayButton = document.querySelector(".start-play");
const playAgainButton = document.querySelector(".start-playAgain");
const startWindow = document.querySelector(".start-window");
const resultGameWindow = document.querySelector(".result-window");
// const scoreWindow = document.querySelector(".result-window");
let cardData = getRandomPicture();
// create cards field
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

  //click card
  card.addEventListener("click", function (evt) {
    this.classList.toggle("card__toggle");
    checkCards(evt);
    stepCounterStart();
  });
};

cardData.forEach((element) => createCard(element));

const startPlay = () => {
  startWindow.classList.add("start-window__hidden");
  body.classList.remove("body_lock");
  gameBoard.style.pointerEvents = "auto";
  timerStart(0);
};

//set listener
//startPlay
startPlayButton.addEventListener("click", function () {
  startPlay();
});

//playAgain
playAgainButton.addEventListener("click", () => {
  resultGameWindow.classList.add("hidden");

  restartGame();
  startPlay();
  stepCounterStop();
  scoreCounterStop();
});

export { createCard, startPlay };
