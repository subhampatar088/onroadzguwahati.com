let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(".text", { delay: 200, origin: "top" });
sr.reveal(".home .btn", { delay: 800, origin: "bottom" });
sr.reveal(".heading", { delay: 200, origin: "top" });
sr.reveal(".guide-container .box", { delay: 200, origin: "top" });
sr.reveal(".explore-container .box", { delay: 200, origin: "top" });
sr.reveal(".about-container .box", { delay: 200, origin: "top" });
sr.reveal(".reviews-container", { delay: 100, origin: "top" });
sr.reveal(".newsletter .box", { delay: 200, origin: "bottom" });

// Footer Message Logic
function sendMessage(event) {
  event.preventDefault();

  var msg = document.getElementById("input-msg").value;

  var url = "https://wa.me/919707628882?text=" + msg;
  window.open(url, "_blank").focus();
}

//pop up form logic
const rentButtons = document.querySelectorAll(".rent-btn");
const finalFormContainer = document.querySelector(".final-form-container");
const overlay = document.querySelector("#overlay");

rentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    finalFormContainer.classList.add("active");
    overlay.style.display = "block";
  });
});

document.querySelector("#close-form").onclick = () => {
  document.querySelector(".final-form-container").classList.remove("active");
  document.querySelector("#overlay").style.display = "none";
};

//Final form submit logic
function submitForm(event) {
  event.preventDefault();

  var carName = document.getElementById("carName").value;
  var name = document.getElementById("fullName").value;
  var pickup_date = document.getElementById("pickupDate").value;
  var dropping_date = document.getElementById("dropDate").value;

  var url =
    "https://wa.me/919707628882?text=" +
    "*Full%20Name*: " +
    name +
    "%0a" +
    "*Car%20Name*: " +
    carName +
    "%0a" +
    "*Start%20Date*: " +
    pickup_date +
    "%0a" + // Add %0a here
    "*End%20Date*: " +
    dropping_date;

  window.open(url, "_blank").focus();
}
