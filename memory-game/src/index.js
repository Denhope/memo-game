import { getRandomPicture } from "./js/_data";
import {
  closeGameResultsWindow,
  createCard,
  playAgain,
  startPlay,
  toggleGameResultsWindow,
} from "./js/_gameBoard";
import { checkCards } from "./js/_gameLogic";
import { viewScor } from "./js/_score";
import { stepCounterStart } from "./js/_stepCounter";

const startPlayButton = document.querySelector(".start-play");
const buttonResult = document.querySelector(".result-score_button");
const playAgainButton = document.querySelector(".start-playAgain");
const resultGamesWindow = document.querySelector(".games-results-window");

// create board field
let cardData = getRandomPicture();
cardData.forEach((element) => createCard(element));

//startplay
startPlayButton.addEventListener("click", startPlay);

// open card

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
