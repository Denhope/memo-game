import { scoreCounterHigh, scoreCounterLow } from "./_scoreCounter";
import { createPlayerResult } from "./_gamesResults";
import * as timer from "./_timer";
import { resArray } from "./_storage";

//check cards function
const checkCards = (evt) => {
  //constants
  const clickedCard = evt.target;
  clickedCard.classList.add("active");
  const activeCards = document.querySelectorAll(".active");
  const taggleCard = document.querySelectorAll(".card__toggle");
  const scoreWindow = document.querySelector(".result-window");
  const body = document.querySelector("body");
  const gameBoard = document.querySelector(".game-board");

  // check card for counting result
  if (activeCards.length === 2) {
    gameBoard.style.pointerEvents = "none";
    if (
      //same cards
      activeCards[0].getAttribute("data-name") ===
      activeCards[1].getAttribute("data-name")
    ) {
      scoreCounterHigh();

      activeCards.forEach((item) => {
        item.style.pointerEvents = "none";
        item.classList.remove("active");
        gameBoard.style.pointerEvents = "auto";
      });
    } else {
      //diferent cards
      activeCards.forEach((item) => {
        item.classList.remove("active");
        setTimeout(() => {
          item.classList.remove("card__toggle");
          gameBoard.style.pointerEvents = "auto";
        }, 900);
      });
      scoreCounterLow();
    }
  }

  //win game
  if (taggleCard.length === 20) {
    scoreWindow.classList.remove("result-window_hidden");
    // buttonResult.style.pointerEvents = "auto";
    body.classList.add("body_lock");
    timer.timerStop();

    if (resArray.length <= 9) {
      resArray.push(createPlayerResult());
    } else if (resArray.length >= 9) {
      resArray.pop();
      resArray.unshift(createPlayerResult());
    }
    // creareResultTabble();
    console.log(resArray);
  }
};
export { checkCards };
