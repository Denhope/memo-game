import { checkCards } from "./_gameLogic";
import { getRandomPicture } from "./_data";
import { timer } from "./_timer";
import { setStepCounter } from "./_scoreCounter";
import { getScoreCounter } from "./_scoreCounter";

// create game field
export function createBoard() {
  let steps = 0;
  const stepCounter = document.querySelector(".step_counter");

  const body = document.querySelector("body");
  const gameBoard = document.querySelector(".game-board__wrapper");
  const startPlayButton = document.querySelector(".start-play");
  const startWindow = document.querySelector(".start-window");
  const cardData = getRandomPicture();
  cardData.forEach((element) => {
    const card = document.createElement("div");
    const picture = document.createElement("img");
    const backSide = document.createElement("div");
    card.classList = "card";
    picture.classList = "picture";
    backSide.classList = "backside";
    gameBoard.appendChild(card);
    card.appendChild(picture);
    card.appendChild(backSide);
    card.setAttribute("data-name", element.name);
    picture.src = element.imgSrc;

    //set listener
    card.addEventListener("click", (evt) => {
      card.classList.toggle("card__toggle");
      checkCards(evt);
      steps++;
      stepCounter.innerHTML = steps;
    });

    startPlayButton.addEventListener("click", (evt) => {
      startWindow.classList.add("start-window__hidden");
      body.classList.remove("body_lock");
      gameBoard.style.pointerEvents = "auto";
      timer();
    });
  });
}
