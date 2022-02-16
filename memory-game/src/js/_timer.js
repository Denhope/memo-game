export function timer() {
  let seconds = 0;
  let minutes = 0;
  const time = document.querySelector(".time_counter");
  let seconds_str = "";
  let minutes_str = "";
  let timerCounter;
  timerCounter = setInterval(() => {
    seconds > 58 ? ((minutes += 1), (seconds = 0)) : (seconds += 1);
    seconds_str = seconds > 9 ? `${seconds}` : `0${seconds}`;
    minutes_str = minutes > 9 ? `${minutes}` : `0${minutes}`;
    time.innerHTML = `${minutes_str}:${seconds_str}`;
  }, 1000);
}
