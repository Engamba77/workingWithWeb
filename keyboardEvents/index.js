const keyboard = document.getElementById("keyboard");

keyboard.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.keyCode === 50 || e.keyCode === 90) {
    alert("Sorry! You cannot use " + e.key);
    e.preventDefault();
  }
});
// keyboard.addEventListener("keyup", (e) => {
//   console.log(e);
// });
// keyboard.addEventListener("keypress", (e) => {
//   console.log(e);
// });
