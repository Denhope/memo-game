//constants
const timeCounterField = document.querySelector(".time_counter");
const timeCounterResult = document.querySelector(".final-time");
let seconds_str = "";
let minutes_str = "";
let timerStartID;

// time functions
const timerStart = (seconds, minutes) => {
  timerStartID = setInterval(() => {
    seconds > 58 ? ((minutes += 1), (seconds = 0)) : (seconds += 1);
    seconds_str = seconds > 9 ? `${seconds}` : `0${seconds}`;
    minutes_str = minutes > 9 ? `${minutes}` : `0${minutes}`;
    timeCounterField.innerHTML = `${minutes_str}:${seconds_str}`;
    timeCounterResult.innerHTML = `${minutes_str}:${seconds_str}`;
  }, 1000);
  return timerStartID;
};
const timerStop = () => {
  clearInterval(timerStartID);
  return timerStartID;
};
export { timerStart, timerStop };
