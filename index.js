const hamburger = document.querySelector(".hamburger");
const linkList = document.querySelector(".links");
const hamburgerBars = document.getElementsByClassName("bar");

hamburger.addEventListener("click", () => {
  const visible = linkList.dataset.visible;
  if (visible === "true") {
    linkList.dataset.visible = "false";
  } else {
    linkList.dataset.visible = "true";
  }
  for(var i = 0; i<hamburgerBars.length; i++)
  {
      hamburgerBars[i].classList.toggle("cross");
  }
});
