import { checkCards } from "./_gameLogic";
import { getRandomPicture } from "./_data";
import { timer } from "./_timer";
import { restart } from "./_restart";

// create game field
export function createBoard() {
  let steps = 0;
  const stepCounter = document.querySelector(".step_counter");
  const body = document.querySelector("body");
  const gameBoard = document.querySelector(".game-board__wrapper");
  const startPlayButton = document.querySelector(".start-play");
  const playAgainButton = document.querySelector(".start-playAgain");
  const startWindow = document.querySelector(".start-window");
  const scoreWindow = document.querySelector(".result-window");
  let cardData = getRandomPicture();

  const createFieldCard = (element) => {
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

    //clisk card
    card.addEventListener("click", (evt) => {
      card.classList.toggle("card__toggle");
      checkCards(evt);
      steps++;
      stepCounter.innerHTML = steps;
    });
  };

  const startPlay = () => {
    startWindow.classList.add("start-window__hidden");
    body.classList.remove("body_lock");
    gameBoard.style.pointerEvents = "auto";
    timer();
  };
  //set listener
  startPlayButton.addEventListener("click", startPlay);
  cardData.forEach((element) => createFieldCard(element));
  playAgainButton.addEventListener("click", () => {
    scoreWindow.classList.add("hidden");
    restart();
    startPlay();
  });
}
