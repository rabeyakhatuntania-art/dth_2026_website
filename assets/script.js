const articles = Array.from(document.getElementsByClassName("carouselArt"));
const btnLeft = document.getElementById("carouselBtnLeft");
const btnRight = document.getElementById("carouselBtnRight");

let current = 1;
articles.forEach((art) => {
  if (!art.classList.contains("outOfFocusArt")) {
    current = parseInt(art.dataset.artid);
  }
});

const setDisabled = (btn, off) => {
  if (off) {
    btn.setAttribute("disabled", "");
    btn.classList.add("btnDisabled");
  } else {
    btn.removeAttribute("disabled");
    btn.classList.remove("btnDisabled");
  }
};

const showArt = (i) => {
  current = i;
  articles.forEach((art) => {
    if (art.dataset.artid == i) {
      art.classList.remove("outOfFocusArt");
      art.classList.add("inFocusArt");
    } else {
      art.classList.add("outOfFocusArt");
      art.classList.remove("inFocusArt");
    }
  });
  setDisabled(btnLeft, i === 1);
  setDisabled(btnRight, i === articles.length);
};

if (btnLeft && btnRight) {
  btnLeft.addEventListener("click", () => {
    if (current > 1) showArt(current - 1);
  });
  btnRight.addEventListener("click", () => {
    if (current < articles.length) showArt(current + 1);
  });
}