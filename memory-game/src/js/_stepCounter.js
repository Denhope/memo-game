const stepCounterField = document.querySelector(".step_counter");
const stepCounterResult = document.querySelector(".final-steps");
let steps = 0;

const stepCounterStart = () => {
  steps++;
  stepCounterField.innerHTML = steps;
  stepCounterResult.innerHTML = steps;
  return steps + 1;
};

const stepCounterStop = () => {
  steps = 0;
  stepCounterField.innerHTML = steps;
};

export { stepCounterStart, stepCounterStop };
