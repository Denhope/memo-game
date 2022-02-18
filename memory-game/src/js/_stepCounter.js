const stepCounterField = document.querySelector(".step_counter");
// let steps = 0;
let steps_str = "";
const stepCounterStart = (steps) => {
  // let steps = 0;
  steps = steps + 1;
  steps_str = `${steps}`;

  stepCounterField.innerHTML = steps_str;
};
// const stepCounterSop = (steps) => {
//   steps++;
//   stepCounterField.innerHTML = steps;
// };

export { stepCounterStart };
