import { stepCounterStart } from "./_stepCounter";

let scoreStorge = document.querySelector(".final-score");
let timerStorage = document.querySelector(".final-time");

//create Player
class Player {
  constructor(name, score, time, steps) {
    this.name = name;
    this.score = score;
    this.time = time;
    this.steps = steps;
  }
}
//game result function
const createPlayerResult = () => {
  let player = new Player(
    document.getElementById("player-name").value,
    scoreStorge.textContent,
    timerStorage.textContent,
    stepCounterStart().toString()
  );
  return player;
};

// create result tabble function
const creareResultTabble = (resArray) => {
  document.querySelector(".results-game").textContent = "";
  let userCount = resArray.length;
  let title = document.createElement("tr");
  title.innerHTML = `<td colspan name=tabble-title>№</td><td colspan name=tabble-title>Name</td><td colspan name=tabble-title>Score</td><td colspan name=tabble-title>Time</td><td colspan name=tabble-title>Steps</td>`;
  document.querySelector(".results-game").appendChild(title);
  for (let i = 0; i < userCount; i++) {
    let name = resArray[i].name;
    let score = resArray[i].score;
    let time = resArray[i].time;
    let steps = resArray[i].steps;
    let row = document.createElement("tr");
    row.innerHTML = `<td colspan>${
      i + 1
    }</td><td colspan>${name}</td><td colspan>${score}<td colspan>${time}<td colspan>${steps}`;
    document.querySelector(".results-game").appendChild(row);
  }
};

export { creareResultTabble, createPlayerResult };
