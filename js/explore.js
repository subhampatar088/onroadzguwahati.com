let wrapper = document.querySelector(".wraper-box");
let activeBox = wrapper.querySelectorAll(".box");
let activeLable = document
  .querySelector(".activeCircle")
  .querySelectorAll(".fa-circle");
let nextBtn = document.querySelector("#nextBtn");
let preBtn = document.querySelector("#preBtn");
let imgInd = 0;

nextBtn.onclick = () => {
  imgInd++;
  changeBox();
};

preBtn.onclick = () => {
  imgInd--;
  changeBox();
};

let changeBox = () => {
  if (imgInd > activeBox.length - 1) {
    imgInd = 0;
  } else if (imgInd < 0) {
    imgInd = activeBox.length - 1;
  }

  for (let i = 0; i < activeBox.length; i++) {
    if (i === imgInd) {
      activeBox[i].classList.add("active");
      activeLable[i].classList.add("fa-solid");
      if (window.innerWidth > 450) {
        const translateValue = -i * activeBox[i].clientWidth;
        wrapper.style.transform = `translateX(${translateValue}px)`;
      }
    } else {
      activeBox[i].classList.remove("active");
      activeLable[i].classList.remove("fa-solid");
    }
  }
};

// Call changeBox initially
changeBox();

// Add a window resize event listener to re-calculate the translation when the window is resized
window.addEventListener("resize", () => {
  changeBox();
});

const rentButtons2 = document.querySelectorAll(".rent-btn");
const finalFormContainer2 = document.querySelector(".final-form-container");
const overlay2 = document.querySelector("#overlay2");

rentButtons2.forEach((button) => {
  button.addEventListener("click", () => {
    finalFormContainer2.classList.add("active");
    overlay2.style.display = "block";
  });
});

document.querySelector("#close-form2").onclick = () => {
  document.querySelector(".final-form-container").classList.remove("active");
  document.querySelector("#overlay2").style.display = "none";
};

//Final form submit logic
function submitForm2(event) {
  event.preventDefault();

  var carName2 = document.getElementById("carName2").value;
  var name2 = document.getElementById("fullName2").value;
  var pickup_date2 = document.getElementById("pickupDate2").value;
  var dropping_date2 = document.getElementById("dropDate2").value;

  var url =
    "https://wa.me/919707628882?text=" +
    "*Full%20Name*: " +
    name2 +
    "%0a" +
    "*Car%20Name*: " +
    carName2 +
    "%0a" +
    "*Start%20Date*: " +
    pickup_date2 +
    "%0a" + // Add %0a here
    "*End%20Date*: " +
    dropping_date2;

  window.open(url, "_blank").focus();
}

//footer message
function sendMessage2(event) {
  event.preventDefault();

  var msg = document.getElementById("input-msg2").value;

  var url = "https://wa.me/919707628882?text=" + msg;
  window.open(url, "_blank").focus();
}

//reveal
// sr.reveal(".text", { delay: 200, origin: "top" });
// sr.reveal(".home .btn", { delay: 800, origin: "bottom" });
// sr.reveal(".heading", { delay: 200, origin: "top" });
// sr.reveal(".guide-container .box", { delay: 200, origin: "top" });
// sr.reveal(".explore-container .box", { delay: 200, origin: "top" });
