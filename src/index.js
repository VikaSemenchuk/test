(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const body = document.querySelector('body');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expended') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expended', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    body.classList.toggle('no-scroll');
  });
})();

{
  /* <include src="./js/contact-modal.js"></include> */
}

// @import './js/contact-modal.js';

{
  /* <script src="./js/contact-modal.js"></script> */
}

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-contactModal-open]'),
    closeModalBtn: document.querySelector('[data-contactModal-close]'),
    contactModal: document.querySelector('[data-contactModal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleContactModal);
  refs.closeModalBtn.addEventListener('click', toggleContactModal);

  function toggleModal() {
    refs.Modal.classList.toggle('is-hidden');
  }
})();

import './js/swiper-slider';