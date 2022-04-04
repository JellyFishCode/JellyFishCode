const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const images = document.querySelectorAll('.open');
const close = document.getElementById("close");
const modal = document.getElementById("modal");
var modal__container = document.getElementById("modal__container");

// ----------------- Navigation -----------------
navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});


// ----------------- Popup Image -----------------
images.forEach(img => {
  img.addEventListener('click', (e) => {
    modal__container.classList.add('show');
    modal.src = e.target.alt;
  });
});

close.addEventListener('click', () => {
  console.log("close");
  modal__container.classList.remove('show');
});

