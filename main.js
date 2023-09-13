let search = document.querySelector(".search-box");

document.querySelector("#search").onclick = () => {
  search.classList.toggle("active");
};

let selengkapnya = document.querySelector(".wrapper");

document.querySelector("#selengkapnya").onclick = () => {
  selengkapnya.classList.toggle("active");
};

let cancel = document.querySelector(".wrapper");

document.querySelector("#cancel").onclick = () => {
  cancel.classList.remove("active");
};
const allStar = document.querySelectorAll(".rating .star");
const ratingValue = document.querySelector(".rating input");

allStar.forEach((item, idx) => {
  item.addEventListener("click", function () {
    let click = 0;
    ratingValue.value = idx + 1;

    allStar.forEach((i) => {
      i.classList.replace("bxs-star", "bx-star");
      i.classList.remove("active");
    });
    for (let i = 0; i < allStar.length; i++) {
      if (i <= idx) {
        allStar[i].classList.replace("bx-star", "bxs-star");
        allStar[i].classList.add("active");
      } else {
        allStar[i].style.setProperty("--i", click);
        click++;
      }
    }
  });
});
