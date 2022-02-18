const scoreCounterResult = document.querySelector(".final-score");
const scoreCounterField = document.querySelector(".score_counter");
let score = 0;

const scoreCounterHigh = () => {
  score = score + 10;
  scoreCounterResult.innerHTML = score;
  scoreCounterField.innerHTML = score;
  return score;
};

const scoreCounterLow = () => {
  if (score > 1) {
    score = score - 2;
  } else if ((score = 1)) {
    score = score - 1;
  }

  scoreCounterResult.innerHTML = score;
  scoreCounterField.innerHTML = score;
  return score;
};
const scoreCounterStop = () => {
  score = 0;
  scoreCounterField.innerHTML = score;
};

export { scoreCounterHigh, scoreCounterLow, scoreCounterStop };
