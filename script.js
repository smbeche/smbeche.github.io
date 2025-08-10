// Hikaru Vision - Main JavaScript
// This file contains all the interactive functionality for the website
// Last updated for GitHub Pages compatibility

console.log('Hikaru Vision JavaScript loaded successfully');

document.querySelector(".icon-menu").addEventListener("click", function (event) {
  event.preventDefault();
  document.body.classList.toggle("menu-open");
});

const spollerButtons = document.querySelectorAll("[data-spoller] .spollers-faq__button");

spollerButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const currentItem = button.closest("[data-spoller]");
    const content = currentItem.querySelector(".spollers-faq__text");

    const parent = currentItem.parentNode;
    const isOneSpoller = parent.hasAttribute("data-one-spoller");

    if (isOneSpoller) {
      const allItems = parent.querySelectorAll("[data-spoller]");
      allItems.forEach((item) => {
        if (item !== currentItem) {
          const otherContent = item.querySelector(".spollers-faq__text");
          item.classList.remove("active");
          otherContent.style.maxHeight = null;
        }
      });
    }

    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
      content.style.maxHeight = null;
    } else {
      currentItem.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.testimonial__slide');
  const leftArrow = document.querySelector('.testimonial__arrow--left');
  const rightArrow = document.querySelector('.testimonial__arrow--right');
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 10000);

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  rightArrow.addEventListener('click', function() {
    nextSlide();
    resetInterval();
  });

  leftArrow.addEventListener('click', function() {
    prevSlide();
    resetInterval();
  });

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 10000);
  }

  // Main background slideshow logic
  const bgSlides = document.querySelectorAll('.main-bg-slide');
  const bgLeftArrow = document.querySelector('.main-bg-arrow--left');
  const bgRightArrow = document.querySelector('.main-bg-arrow--right');
  let bgCurrent = 0;
  let bgInterval = setInterval(bgNext, 5000);

  function showBgSlide(idx) {
    bgSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
    });
    bgCurrent = idx;
  }

  function bgNext() {
    let next = (bgCurrent + 1) % bgSlides.length;
    showBgSlide(next);
  }

  function bgPrev() {
    let prev = (bgCurrent - 1 + bgSlides.length) % bgSlides.length;
    showBgSlide(prev);
  }

  bgRightArrow.addEventListener('click', function() {
    bgNext();
    resetBgInterval();
  });

  bgLeftArrow.addEventListener('click', function() {
    bgPrev();
    resetBgInterval();
  });

  function resetBgInterval() {
    clearInterval(bgInterval);
    bgInterval = setInterval(bgNext, 5000);
  }

  showSlide(0);
  showBgSlide(0);
});
