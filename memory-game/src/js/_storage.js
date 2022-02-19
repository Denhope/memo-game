// constract Object

import { scoreCounterHigh } from "./_scoreCounter";
import { stepCounterStart } from "./_stepCounter";
import { timerStop } from "./_timer";

// let scoreStorge = document.querySelector(".score_counter").innerHTML;
// let stepsStorage = document.querySelector(".final-steps").innerHTML;
let timerStorage = document.querySelector(".final-time");
let resArray = [];

//create obj
class Player {
  constructor(name, score, time, steps) {
    this.name = name;
    this.score = score;
    this.time = time;
    this.steps = steps;
  }
}

const createPlayerResult = () => {
  let player = new Player(
    "polina",
    scoreCounterHigh().toString(),
    timerStorage.textContent,
    // timerStop().toString(),
    stepCounterStart().toString()
  );
  return player;
};

export { Player, createPlayerResult, resArray };
