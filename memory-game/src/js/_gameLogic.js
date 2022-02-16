import * as timer from "./_timer";

export const checkCards = (evt) => {
  const clickedCard = evt.target;
  clickedCard.classList.add("active");
  // const time = document.querySelector(".time_counter");
  const activeCards = document.querySelectorAll(".active");
  const taggleCard = document.querySelectorAll(".card__toggle");
  const scoreWindow = document.querySelector(".result-window");
  const body = document.querySelector("body");
  let score = 0;
  let winCard = 0;

  if (activeCards.length === 2) {
    if (
      //same cards
      activeCards[0].getAttribute("data-name") ===
      activeCards[1].getAttribute("data-name")
    ) {
      score = score + 2;
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
    }
  }
  //win
  if (taggleCard.length === 20) {
    scoreWindow.classList.remove("hidden");
    body.classList.add("body_lock");
    clearInterval(timer);
    // time.innerHTML = "00.00";
  }
};
