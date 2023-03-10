const selectFonts = document.querySelector(".selectFonts");
const sans = document.getElementById("sans");
const serif = document.getElementById("serif");
const mono = document.getElementById("mono");
const list = document.getElementById("ul");
const body = document.querySelector("body");
selectFonts.addEventListener("click", () => {
  list.classList.toggle("hidden");
});

sans.addEventListener("click", () => {
  selectFonts.textContent = sans.textContent;
  list.classList.add("hidden");
  body.style.fontFamily = "sans-serif";
});
serif.addEventListener("click", () => {
  selectFonts.textContent = serif.textContent;
  list.classList.add("hidden");
  body.style.fontFamily = "serif";
});
mono.addEventListener("click", () => {
  selectFonts.textContent = mono.textContent;
  list.classList.add("hidden");
  body.style.fontFamily = "mono, sans-serif";
});
