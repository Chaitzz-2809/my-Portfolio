// Instagram modal logic
const instaIcon = document.getElementById("instagramIcon");
const instaModal = document.getElementById("instagramModal");
const instaClose = document.querySelector(".close-insta");

instaIcon.onclick = function () {
  instaModal.style.display = "flex";
}

instaClose.onclick = function () {
  instaModal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target === instaModal) {
    instaModal.style.display = "none";
  }
}
