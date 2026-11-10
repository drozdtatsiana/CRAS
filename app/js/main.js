const burger = document.querySelector('.menu__burger');
const menuList = document.querySelector('.menu__list');

if (burger && menuList) {
  burger.addEventListener('click', () => {
    const isOpen = burger.classList.toggle('active');
    menuList.classList.toggle('active');
    burger.setAttribute('aria-expanded', isOpen);
  });

  menuList.querySelectorAll('.menu__link').forEach((link) => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      menuList.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

if (document.querySelector('.hero__slider')) {
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
}

const player = document.querySelector('.video__player');

if (player) {
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
}

if (document.querySelector('.reviews__slider')) {
  const reviewsSwiper = new Swiper('.reviews__slider', {
    speed: 600,
    spaceBetween: 60,
    navigation: {
      nextEl: '.reviews__btn--next',
      prevEl: '.reviews__btn--prev',
    },
  });
}

const modal = document.querySelector('.modal');

if (modal) {
  const form = modal.querySelector('.modal__form');
  const success = modal.querySelector('.modal__success');
  const title = modal.querySelector('#modal-title');
  const packageText = modal.querySelector('.modal__package');
  const packageInput = modal.querySelector('.modal__package-input');

  document.querySelectorAll('[data-package]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const customTitle = link.dataset.title;
      title.textContent = customTitle || 'Заказать пакет';
      packageText.textContent = customTitle ? '' : `Пакет: ${link.dataset.package}`;
      packageInput.value = link.dataset.package;
      form.hidden = false;
      success.hidden = true;
      modal.showModal();
      document.body.classList.add('no-scroll');
    });
  });

  modal.querySelector('.modal__close').addEventListener('click', () => modal.close());
  modal.querySelector('.modal__submit--close').addEventListener('click', () => modal.close());

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });

  modal.addEventListener('close', () => {
    document.body.classList.remove('no-scroll');
    form.reset();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.hidden = true;
    success.hidden = false;
  });
}
