import { scoreCounterHigh, scoreCounterLow } from "./_scoreCounter";
import * as timer from "./_timer";

export const checkCards = (evt) => {
  const clickedCard = evt.target;
  clickedCard.classList.add("active");

  const activeCards = document.querySelectorAll(".active");
  const taggleCard = document.querySelectorAll(".card__toggle");
  const scoreWindow = document.querySelector(".result-window");
  const body = document.querySelector("body");

  if (activeCards.length === 2) {
    if (
      //same cards
      activeCards[0].getAttribute("data-name") ===
      activeCards[1].getAttribute("data-name")
    ) {
      scoreCounterHigh();
      // score = score + 2;
      activeCards.forEach((item) => {
        item.style.pointerEvents = "none";
        item.classList.remove("active");
      });
    } else {
      //diferent cards
      activeCards.forEach((item) => {
        item.classList.remove("active");
        setTimeout(() => item.classList.remove("card__toggle"), 900);
      });
      scoreCounterLow();
    }
  }
  //win
  if (taggleCard.length === 20) {
    scoreWindow.classList.remove("hidden");
    body.classList.add("body_lock");
    timer.timerStop();
  }
};
