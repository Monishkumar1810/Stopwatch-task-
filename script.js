let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const lapsList = document.getElementById("laps");

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

startBtn.onclick = () => {
  if (timer === null) {
    timer = setInterval(stopwatch, 1000);
  }
};

pauseBtn.onclick = () => {
  clearInterval(timer);
  timer = null;
};

resetBtn.onclick = () => {
  clearInterval(timer);
  timer = null;
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  lapsList.innerHTML = "";
};

lapBtn.onclick = () => {
  if (timer !== null) {
    const li = document.createElement("li");
    li.textContent = display.textContent;
    lapsList.appendChild(li);
  }
};

updateDisplay();
