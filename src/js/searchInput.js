const input = document.getElementById("default-search");
const formEl = document.getElementById("form");
const result = document.querySelector(".result");
const errorMessage = document.querySelector(".errMessage");
const wrapperSite = document.querySelector(".wrapperSite");
import request from "./request";
import { createWrapper } from "./updateUI";

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() == "") {
    errorMessage.textContent = "Whoops, can’t be empty…";
    input.classList.add("focus:border-[#FF5252]");

    setTimeout(() => {
      errorMessage.textContent = "";
      input.classList.remove("focus:border-[#FF5252]");
    }, 2000);
  } else {
    let filtrApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`;
    console.log(filtrApi);

    //   title.textContent = filtrApi[0].word;

    request(filtrApi)
      .then((data) => {
        createWrapper(data);
        result.innerHTML = `
        <div class="noun">
            <h1 class="font-bold text-2xl mb-10 dark:text-white">noun</h1>
            <p class="text-[#757575] mb-6">Meaning</p>
            <ul class="nounList"></ul>
          </div>
          <div class="verb">
            <h1 class="font-bold text-2xl mb-10 dark:text-white">verb</h1>
            <p class="text-[#757575] mb-6">Meaning</p>
            <ul class="verbList"></ul>
          </div>
        `;
      })
      .catch((err) => {
        wrapperSite.innerHTML = "";
        result.innerHTML = `
        <div class="m-w-[46rem] m-auto text-center">
        <p class="text-6xl mb-11">😟</p>
        <h1 class="font-bold mb-6 dark:text-white">No Definitions Found</h1>
        <p class="text-[#757575]">
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
        `;
      });
  }
  input.value = "";
});
