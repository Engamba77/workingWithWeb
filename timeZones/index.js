function displayTime() {
  const date = new Date();
  const indiaTimeZone = date.toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
  });
  //   const tokyoTimeZone = date.toLocaleString("en-US", {
  //     timeZone: "Asia/Kolkata",
  //   });

  document.getElementById("time").innerHTML = indiaTimeZone;
  //   document.getElementById("time").innerHTML = tokyoTimeZone;
}
setInterval(displayTime, 0);
