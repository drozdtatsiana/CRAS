 const burger = document.querySelector('.menu__burger');
const menuList = document.querySelector('.menu__list');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menuList.classList.toggle('active');
});
 
 const swiper = new Swiper('.hero__slider', {
        pagination: {
          el: '.hero__pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
          navigation: {
          nextEl: '.hero__slide-btn--next',
          prevEl: '.hero__slide-btn--prev',
        },
      });

      const player = document.querySelector('.video__player');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      player.play();
    } else {
      player.pause();
    }
  });
}, { threshold: 0.3 });

observer.observe(player);

const reviewsSwiper = new Swiper('.reviews__slider', {
  speed: 600,
  spaceBetween: 60,              
  navigation: {
    nextEl: '.reviews__btn--next',
    prevEl: '.reviews__btn--prev',
  },

});
