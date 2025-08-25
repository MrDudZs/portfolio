class Carousel {
  constructor(container) {
    this.container = container;
    this.slides = container.getElementsByClassName("mySlides");
    this.dots = container.getElementsByClassName("demo");
    this.captionText = container.querySelector(".caption-container p");
    this.slideIndex = 1;

    const prev = container.querySelector(".prev");
    const next = container.querySelector(".next");
    if (prev) prev.onclick = () => this.plusSlides(-1);
    if (next) next.onclick = () => this.plusSlides(1);

    Array.from(this.dots).forEach((dot, idx) => {
      dot.onclick = () => this.currentSlide(idx + 1);
    });

    this.showSlides(this.slideIndex);
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    if (n > this.slides.length) this.slideIndex = 1;
    if (n < 1) this.slideIndex = this.slides.length;
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = "none";
    }
    for (let i = 0; i < this.dots.length; i++) {
      this.dots[i].className = this.dots[i].className.replace(" active", "");
    }
    this.slides[this.slideIndex - 1].style.display = "block";
    this.dots[this.slideIndex - 1].className += " active";
    if (this.captionText)
      this.captionText.innerHTML = this.dots[this.slideIndex - 1].alt || "";
  }
}

window.addEventListener("DOMContentLoaded", function() {
  const carouselContainers = document.querySelectorAll(".carousel-container");
  window.carousels = [];
  carouselContainers.forEach(container => {
    window.carousels.push(new Carousel(container));
  });
});