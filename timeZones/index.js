const timezone1 = document.getElementById("timezone1");
const timezone2 = document.getElementById("timezone2");
const timezone3 = document.getElementById("timezone3");
const btn = document.getElementById("btn");

let isPlaying = false;
let clockHandler;

function displayTime() {
  const time1 = new Date().toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
  });
  const time2 = new Date().toLocaleTimeString("en-US", {
    timeZone: "Europe/Paris",
  });
  const time3 = new Date().toLocaleTimeString("ar-EG", {
    timeZone: "Asia/Tokyo",
  });

  timezone1.innerHTML = time1;
  timezone2.innerHTML = time2;
  timezone3.innerHTML = time3;
}

btn.addEventListener("click", playClock);

function playClock() {
  if (isPlaying) {
    clearInterval(clockHandler);
    isPlaying = false;
    btn.innerHTML = "Play";
    return;
  }
  isPlaying = true;
  btn.innerHTML = "Pause";
  clockHandler = setInterval(displayTime, 1000);
}
playClock();
