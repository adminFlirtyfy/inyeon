// Inyeon AI — shared site script.
// This file is intentionally small. Add any interactive behavior here
// and it will apply to every page (each page loads this same file).

document.addEventListener("DOMContentLoaded", function () {
  // Example: log that the page loaded — replace/remove as needed.
  console.log("Inyeon AI site loaded");
  // Featured-on badge carousel
  var carousel = document.getElementById("badgeCarousel");
  if (carousel) {
    var wrapper = carousel.closest(".carousel-wrapper");
    var prevBtn = wrapper.querySelector(".carousel-nav.prev");
    var nextBtn = wrapper.querySelector(".carousel-nav.next");
    var scrollAmount = 280;

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    }
  }
});
