const loader = document.querySelector(".loaderCountry");
const overlay = document.querySelector(".overlaySite");
const loaderToggle = (load) => {
  if (load) {
    loader.classList.remove("hidden");
    overlay.classList.remove("hidden");
  } else {
    loader.classList.add("hidden");
    overlay.classList.add("hidden");
  }
};

export default loaderToggle;
