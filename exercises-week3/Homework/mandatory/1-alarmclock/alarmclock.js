var alarmSeconds;
var alarmInterval;
var millisPerSecond = 1000;

function setAlarm() {
  var alarmInput = document.querySelector("#alarmSet");
  alarmSeconds = alarmInput.value;
  alarmInterval = setInterval(subtractAlarmSecond, millisPerSecond);
  displayTimeRemaining();
}

function subtractAlarmSecond() {
  alarmSeconds--;
  displayTimeRemaining();
  if (alarmSeconds === 0) {
    clearInterval(alarmInterval);
    playAlarm();
  }
}

function displayTimeRemaining() {
  var timeRemainingH1 = document.querySelector("#timeRemaining");

  var minutes = Math.floor(alarmSeconds / 60);
  var seconds = alarmSeconds - minutes * 60;

  var minutesString = "";
  if (minutes < 10) {
    minutesString = "0" + minutes;
  }
  else {
    minutesString = minutes;
  }

  var secondsString = "";
  if (seconds < 10) {
    secondsString = "0" + seconds;
  }
  else {
    secondsString = seconds;
  }

  timeRemainingH1.innerText = "Time Remaining: " + minutesString + ":" + secondsString;
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;