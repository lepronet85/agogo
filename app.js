let intervalId;

function chrono(minutes) {
  const chronoDisplay = document.querySelector(".chrono-container h1");

  let totalSeconds = minutes * 60;

  function updateDisplay() {
    let hours = Math.floor(totalSeconds / 3600);
    let remainingSeconds = totalSeconds % 3600;
    let minutes = Math.floor(remainingSeconds / 60);
    let seconds = remainingSeconds % 60;

    let hourDisplay = (hours < 10 ? "0" : "") + hours;
    let minuteDisplay = (minutes < 10 ? "0" : "") + minutes;
    let secondDisplay = (seconds < 10 ? "0" : "") + seconds;

    chronoDisplay.textContent = `${hourDisplay}:${minuteDisplay}:${secondDisplay}`;

    if (totalSeconds === 0) {
      clearInterval(intervalId);
    } else {
      totalSeconds--;
    }
  }

  if (intervalId) {
    clearInterval(intervalId);
  }

  updateDisplay();

  intervalId = setInterval(updateDisplay, 1000);
}

let backTime = document.getElementById("back-time");
const date = new Date();
backTime.textContent = `${date.getHours() < 10 ? "0" : ""}${date.getHours()}:${
  date.getMinutes() < 10 ? "0" : ""
}${date.getMinutes()}:${date.getSeconds() < 10 ? "0" : ""}${date.getSeconds()}`;

const timneMapping = [
  {
    element: document.getElementById("btn1"),
    time: 1 / 3,
  },
  {
    element: document.getElementById("btn2"),
    time: 5,
  },
  {
    element: document.getElementById("btn3"),
    time: 15,
  },
  {
    element: document.getElementById("btn4"),
    time: 20,
  },
  {
    element: document.getElementById("btn5"),
    time: 30,
  },
];

timneMapping.forEach(({ element, time }) => {
  element.addEventListener("click", () => chrono(time));
});

let agogoInput = document.getElementById("agogo-input");

agogoInput.addEventListener("change", function () {
  if (parseInt(this.value) < 0) return;
  chrono(parseInt(this.value));
});

agogoInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    if (parseInt(this.value) < 0) return;
    chrono(parseInt(this.value));
  }
});
