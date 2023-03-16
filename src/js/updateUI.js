const wrapperSite = document.querySelector(".wrapperSite");
const noun = document.querySelector(".noun");
const verb = document.querySelector(".verb");
const nounList = document.querySelector(".nounList");
const verbList = document.querySelector(".verbList");
const synonim = document.querySelector(".synonim");

export const createWrapper = (wraps) => {
  wraps.forEach((wrap) => {
    const { word, phonetics, meanings } = wrap;
    const text =
      phonetics.length > 1
        ? Object.values(phonetics[2])[0]
        : Object.values(phonetics[0])[0];
    const audios =
      phonetics.length > 1
        ? Object.values(phonetics[1])[1] == ""
          ? Object.values(phonetics[2])[1]
          : Object.values(phonetics[1])[1]
        : Object.values(phonetics[0])[1];

    const nounn = Object.values(meanings[0])[0];
    const verbb = Object.values(meanings[1])[0];
    const definitionNoun = Object.values(meanings[0])[1];
    const definitionVerb = Object.values(meanings[1])[1];
    const synonims = Object.values(meanings[0].synonyms);

    wrapperSite.innerHTML = `
    <div>
            <h1
              class="font-bold text-[4rem] text-[#2D2D2D] dark:text-white mb-2"
              id="title"
            >
              ${word}
              
            </h1>
            <p class="text-[#A445ED]">${text}</p>
          </div>
          <div
            class="w-[4.68rem] h-[4.68rem] rounded-[2.37rem] bg-[#A445ED] bg-opacity-25 flex items-center justify-center"
            id="musicBtn"
          >
          <audio src="${audios}" id="audio"></audio>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0V21L21 10.5L0 0Z"
                fill="#A445ED"
              />
            </svg>
          </div>
    `;
    synonim.textContent = `${synonims}`;

    if (nounn || verbb) {
      nounFunction();
      verbFunction();
    } else if (nounn) {
      nounFunction();
      verb.classList.add("hidden");
    } else if (verbb) {
      verbFunction();
      noun.classList.add("hidden");
    }

    // noun vs verb

    function nounFunction() {
      definitionNoun.forEach((item) => {
        nounList.innerHTML += `
              <li class="list-disc marker:text-purple-600 p-1 ml-16 dark:text-white">${item.definition}</li>
        `;
        synonim.textContent += `
        
        `;
      });
    }

    function verbFunction() {
      definitionVerb.forEach((item) => {
        verbList.innerHTML += `
                    <li class="list-disc marker:text-purple-600 p-1 ml-16 dark:text-white">${item.definition}</li>
              `;
      });
    }

    const musics = document.querySelector("#audio");
    const musicBtn = document.getElementById("musicBtn");
    musicBtn.addEventListener("click", () => {
      musics.play();
    });
  });
};
