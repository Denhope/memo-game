import { getRandomPicture } from "./_data";
import { timerStop } from "./_timer";
export const restartGame = () => {
  let openCards = document.querySelectorAll(".card__toggle");
  let pictures = document.querySelectorAll(".picture");
  let cards = document.querySelectorAll(".card");
  let cardData = getRandomPicture();

  openCards.forEach((element) => {
    element.style.pointerEvents = "auto";
    element.classList.remove("card__toggle");
  });

  cardData.forEach((element, index) => {
    pictures[index].src = element.imgSrc;
    cards[index].setAttribute("data-name", element.name);
  });
  // timerStop();
};
