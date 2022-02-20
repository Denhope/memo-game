// constract Object

// import { scoreCounterHigh } from "./_scoreCounter";
import { stepCounterStart } from "./_stepCounter";
// import { timerStop } from "./_timer";

let scoreStorge = document.querySelector(".final-score");
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
    document.getElementById("player-name").value,
    scoreStorge.textContent,
    timerStorage.textContent,
    stepCounterStart().toString()
  );
  return player;
};

//Local storage
function setLocalStorage() {
  localStorage.setItem("resultGames", JSON.stringify(resArray));
}

function getLocalStorage() {
  if (localStorage.getItem("resultGames")) {
    const res = localStorage.getItem("resultGames");
    resArray = JSON.parse(res);
  }
  console.log(resArray);
  return resArray;
}

window.addEventListener("load", getLocalStorage);
window.addEventListener("beforeunload", setLocalStorage);

export { Player, createPlayerResult, resArray };
