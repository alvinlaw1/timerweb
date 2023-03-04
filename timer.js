let elapsedSeconds = 0;
let isTiming = false;
let startTime;

// get timer element from HTML
const timer = document.getElementById("timer");

// hide cursor
document.body.style.cursor = "none";

// add event listener for key presses
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key === " ") {
    if (!isTiming) {
      startTime = Date.now();
      isTiming = true;
    } else {
      const endTime = Date.now();
      elapsedSeconds = (endTime - startTime) / 1000;
      isTiming = false;

      // write time to console
      console.log(elapsedSeconds);
    }
  } else if (key === "Enter") {
    elapsedSeconds = 0;
    isTiming = false;
  } else if (key === "Escape") {
    // exit program
    window.close();
  } else {
    // Stop the timer if any other key is pressed
    isTiming = false;
  }
});

// update timer every millisecond
setInterval(() => {
  if (isTiming) {
    const endTime = Date.now();
    elapsedSeconds = (endTime - startTime) / 1000;
  }

  // update timer element
  timer.textContent = elapsedSeconds.toFixed(2);
}, 1);
