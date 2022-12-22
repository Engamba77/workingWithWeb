const container = document.getElementById("container");

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowUp":
      container.style.top = container.offsetTop - 30 + "px";
      break;
    case "ArrowDown":
      container.style.top = container.offsetTop + 30 + "px";
      break;
    case "ArrowLeft":
      container.style.left = container.offsetLeft - 30 + "px";
      break;
    case "ArrowRight":
      container.style.left = container.offsetLeft + 30 + "px";
      break;
  }
});
