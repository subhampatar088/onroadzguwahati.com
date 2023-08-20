var btnSlide = document.getElementsByClassName("btnSlide");
var slide = document.getElementById("slide");
var currentIndex = 0;
var slideWidth = 800; // Adjust this based on the width of each slide
var touchStartX = 0;
var touchDeltaX = 0;

for (let i = 0; i < btnSlide.length; i++) {
  btnSlide[i].addEventListener("click", () => {
    currentIndex = i;
    updateSlidePosition();
    updateActiveIndicator();
  });
}

slide.addEventListener("touchstart", handleTouchStart, false);
slide.addEventListener("touchmove", handleTouchMove, false);
slide.addEventListener("touchend", handleTouchEnd, false);

window.addEventListener("keydown", handleArrowKeys, false);

function handleArrowKeys(event) {
  if (event.key === "ArrowRight" && currentIndex < btnSlide.length - 1) {
    currentIndex++;
    updateSlidePosition();
    updateActiveIndicator();
  } else if (event.key === "ArrowLeft" && currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
    updateActiveIndicator();
  }
}

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  touchDeltaX = event.touches[0].clientX - touchStartX;
  event.preventDefault(); // Prevent default touch behavior (scrolling)
}

function handleTouchEnd() {
  if (Math.abs(touchDeltaX) > slideWidth * 0.2) {
    // Adjust this threshold as needed
    if (touchDeltaX > 0 && currentIndex > 0) {
      currentIndex--;
    } else if (touchDeltaX < 0 && currentIndex < btnSlide.length - 1) {
      currentIndex++;
    }
  }
  touchDeltaX = 0;
  updateSlidePosition();
  updateActiveIndicator();
}

function updateSlidePosition() {
  slide.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function updateActiveIndicator() {
  for (let i = 0; i < btnSlide.length; i++) {
    btnSlide[i].classList.remove("active");
  }
  btnSlide[currentIndex].classList.add("active");
}
