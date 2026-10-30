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