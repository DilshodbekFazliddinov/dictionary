const modeBtn = document.getElementById("mode");
const nightSvg = document.querySelector(".nightSvg");
const sunSvg = document.querySelector(".sunSvg");
const html = document.querySelector("html");
const doth = document.getElementById("doth");

// function

function togle() {
  doth.classList.toggle("float-right");
  sunSvg.classList.toggle("hidden");
  nightSvg.classList.toggle("hidden");
}
const modeLocal = localStorage.getItem("mode")
  ? localStorage.getItem("mode")
  : null;

if (modeLocal) {
  html.classList.add(modeLocal);
}

if (localStorage.getItem("mode") == "dark") {
  togle();
}
modeBtn.addEventListener("click", () => {
  html.classList.toggle("dark");
  togle();

  localStorage.getItem("mode") == "dark"
    ? localStorage.setItem("mode", "light")
    : localStorage.setItem("mode", "dark");
});
