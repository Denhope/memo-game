import { checkCard } from "./_checkCard";
import { getRandomPicture } from "./_data";

// create game board
export function createBoard() {
  const gameBoard = document.querySelector(".game-board__wrapper");
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
      checkCard(evt);
    });
  });
}
