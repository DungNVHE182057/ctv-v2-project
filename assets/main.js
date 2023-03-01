const { double } = require("webidl-conversions");

let moon = document.getElementById("moon");
let stars = document.getElementById("stars");
let mountains_behind = document.getElementById("mountains_behind");
let mountains_front = document.getElementById("mountains_front");
let description = document.getElementById("description");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
});
