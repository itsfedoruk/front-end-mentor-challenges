let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".testimonial");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "grid";
}

document.addEventListener("keydown", function(e) {
  typeSlide(e.key);
});

function typeSlide(key) {
  switch (key) {
    case "ArrowLeft":
      plusSlides(-1);
      break;
    case "ArrowRight":
      plusSlides(1);
      break;
  }
}