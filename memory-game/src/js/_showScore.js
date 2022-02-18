import { restart } from "./_restart";

export const showScore = () => {
  const scoreWindow = document.querySelector(".result-window");
  const timeCounter = document.querySelector(".final-time");
  const stepCounter = document.querySelector(".final-step");
  const scoreCounter = document.querySelector(".final-score");
  // const playAgainButton = document.querySelector("start-playAgain");

  console.log(`YoU win ag`);
  scoreWindow.classList.remove("hidden");
};
