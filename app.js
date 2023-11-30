const heart = document.getElementsByClassName("card");
container = document.getElementById("container");
let initialLikes = localStorage.getItem("likes");
container.querySelector(".likes-count-child").textContent = initialLikes
container.addEventListener("click", (e) => {
  let clickedElement = e.target;
  let countElement =
    clickedElement.parentElement.parentElement.querySelector(".like-count");
    let countElementChild = 
    clickedElement.parentElement.parentElement.querySelector(
      ".likes-count-child"
    );

  if (clickedElement.className == "fa-solid fa-heart") {
    clickedElement.style.color = "red";

    if (localStorage.getItem("likes") == null) {
      ++countElementChild.textContent;
      localStorage.setItem("likes", countElementChild.textContent);
    } else {
      let localValue = localStorage.getItem("likes");
      localStorage.setItem("likes", ++localValue);
      countElementChild.textContent = localStorage.getItem("likes");
    }
  }
});
