let timer; // Timer variable
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let running = false;

function startStop() {
  if (running) {
    clearInterval(timer);
    document.getElementById("startStopButton").innerHTML = "Start";
    running = false;
  } else {
    timer = setInterval(updateDisplay, 10); // Update display every 10ms
    document.getElementById("startStopButton").innerHTML = "Stop";
    running = true;
  }
}

function reset() {
  clearInterval(timer);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  running = false;
  document.getElementById("display").innerHTML = "00:00:00";
  document.getElementById("startStopButton").innerHTML = "Start";
}

function updateDisplay() {
  milliseconds++;
  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  document.getElementById("display").innerHTML = 
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds);
}
