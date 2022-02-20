// import { resArray } from "./_gamesResultsjs";
import { creareResultTabble } from "./_gamesResults";
import { scoreCounterHigh, scoreCounterLow } from "./_scoreCounter";
// import { stepCounterStart } from "./_stepCounter";
import { createPlayerResult } from "./_gamesResults";
import * as timer from "./_timer";
import { resArray } from "./_storage";

// let resArray = [];
const checkCards = (evt) => {
  const clickedCard = evt.target;
  clickedCard.classList.add("active");
  //constants
  const activeCards = document.querySelectorAll(".active");
  const taggleCard = document.querySelectorAll(".card__toggle");
  const scoreWindow = document.querySelector(".result-window");
  const body = document.querySelector("body");
  const buttonResult = document.querySelector(".result-score_button");

  // check logic
  if (activeCards.length === 2) {
    // console.log(player);
    if (
      //same cards
      activeCards[0].getAttribute("data-name") ===
      activeCards[1].getAttribute("data-name")
    ) {
      scoreCounterHigh();

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
    // let resArray = [];
    scoreWindow.classList.remove("result-window_hidden");
    buttonResult.style.pointerEvents = "auto";
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
