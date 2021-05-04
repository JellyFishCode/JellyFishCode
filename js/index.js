const navToggle = document.querySelector('.nav-toggle'); // sucht die Klasse aus dem html aus
const navLinks = document.querySelectorAll('.nav__link');


navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
}); // öffnet die Navigationsleiste (Wenn man auf die Klasse nav-open klickt, wird dieser ausfgeführt, hier Navigationsleiste)

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	})
})

// Slider -----------------
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 