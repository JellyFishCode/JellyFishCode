const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const images = document.querySelectorAll('.open');
const close = document.getElementById("close");
const modal = document.getElementById("modal");
var modal__container = document.getElementById("modal__container");

// ----------------- Popup Image -----------------
images.forEach(img => {
  img.addEventListener('click', (e) => {
    modal.src = e.target.alt;
    modal__container.classList.add('show');
  })
})

close.addEventListener('click', () => {
  console.log("close");
  modal__container.classList.remove('show');
});

// ----------------- Navigation -----------------
navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	})
})

// ----------------- Slider -----------------
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
