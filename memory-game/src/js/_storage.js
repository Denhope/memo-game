import { creareResultTabble } from "./_gamesResults";

let resArray = [];

function setLocalStorage() {
  localStorage.setItem("result", JSON.stringify(resArray));
}

function getLocalStorage() {
  if (localStorage.getItem("result")) {
    const res = localStorage.getItem("result");
    resArray = JSON.parse(res);
    creareResultTabble(resArray);
    console.log(`Game results:`);
    console.log(resArray);
    // return resArray;
  }
}

window.addEventListener("load", getLocalStorage);
window.addEventListener("beforeunload", setLocalStorage);

export { resArray };
