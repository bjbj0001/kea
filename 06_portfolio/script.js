const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* PHOTOS */

// JavaScript
const photos = document.querySelectorAll(".tema_banner .photo");

function fadeInPhotos() {
  photos.forEach((photo) => {
    if (isElementInViewport(photo)) {
      photo.classList.add("fade-in");
    }
  });
}

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Attach the fadeInPhotos function to the scroll event
window.addEventListener("scroll", fadeInPhotos);

// Trigger the fade-in animation for initially visible photos
fadeInPhotos();
