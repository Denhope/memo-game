import { getRandomPicture } from "./js/_data";
import {
  closeGameResultsWindow,
  createCard,
  playAgain,
  startPlay,
  toggleGameResultsWindow,
} from "./js/_gameBoard";
import { viewScor } from "./js/_score";

const startPlayButton = document.querySelector(".start-play");
const buttonResult = document.querySelector(".result-score_button");
const playAgainButton = document.querySelector(".start-playAgain");
const resultGamesWindow = document.querySelector(".games-results-window");
const card = document.querySelector(".card");

// create board field
let cardData = getRandomPicture();
cardData.forEach((element) => createCard(element));

//startplay
startPlayButton.addEventListener("click", startPlay);

// open card
card.addEventListener("click", function (evt) {
  this.classList.toggle("card__toggle");
  //check cards
  checkCards(evt);
  //start step counter
  stepCounterStart();
});

//playAgain
playAgainButton.addEventListener("click", playAgain);

// showResult
buttonResult.addEventListener("click", function () {
  toggleGameResultsWindow();
});
// close result window
resultGamesWindow.addEventListener("click", closeGameResultsWindow);

// createscore
viewScor();
