const scoreCounterResult = document.querySelector(".final-score");
const scoreCounterField = document.querySelector(".score_counter");
let score = 0;

const scoreCounterHigh = () => {
  score = score + 5;
  scoreCounterResult.innerHTML = score;
  scoreCounterField.innerHTML = score;
  return score;
};

const scoreCounterLow = () => {
  if (score > 0) {
    score = score - 2;
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
