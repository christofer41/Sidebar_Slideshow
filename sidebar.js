var slideIndex = 1;
document.getElementsByClassName("slideshowImages")[0].style.display = "block";

setInterval(showSlides, 5000, 0);

function showSlides() {

  let slides = document.getElementsByClassName("slideshowImages");
  for (i = 0; i < slides.length; i++) {

    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
  if (slideIndex == slides.length-1){
      slideIndex = 0;
  }
  else{
    slideIndex++;
  }
}