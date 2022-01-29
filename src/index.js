
const accordionButtons = document.querySelectorAll(".skills-accordion__button");
accordion(accordionButtons);

function accordion(elements) {
    elements.forEach((element) => {
        element.addEventListener('click', function() {
            element.lastElementChild.classList.toggle("arrow-down");
            element.lastElementChild.classList.toggle("arrow-up");
            element.nextElementSibling.classList.toggle('hidden');
        })
    })
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    hideOnClick: true,
  }
});