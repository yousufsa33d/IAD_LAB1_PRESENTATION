let testActive = false;
let startTime = null;
let clickCount = 0;

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const startTimeDisplay = document.getElementById("startTime");
const averageDisplay = document.getElementById("average");

startBtn.addEventListener("click", startTest);
resetBtn.addEventListener("click", resetTest);

function startTest() {
  if (testActive) return;
  testActive = true;

  startTime = Date.now();
  clickCount = 0;

  while (Date.now() - startTime < 10000) {
    alert(`Alert ${clickCount + 1}`);
    clickCount++;
  }

  const average = (clickCount / 10).toFixed(2);

  startTimeDisplay.textContent = new Date(startTime).toLocaleTimeString();
  averageDisplay.textContent = average;

  setTimeout(function resultShow() {
    const resultsStart = Date.now();
    while (Date.now() - resultsStart < 2000) {
      alert(`Average speed: ${average} alerts/sec`);
    }
    testActive = false;
  }, 0);
}

function resetTest() {
  testActive = false;
  startTime = null;
  startTimeDisplay.textContent = "-";
  averageDisplay.textContent = "-";
}
