(() => {
  const refs = {
    openContactModalBtn: document.querySelector('[data-contact-modal-open]'),
    closeContactModalBtn: document.querySelector('[data-contact-modal-close]'),
    ContactModal: document.querySelector('[data-contact-modal]'),
  };

  refs.openContactModalBtn.addEventListener('click', toggleContactModal);
  refs.closeContactModalBtn.addEventListener('click', toggleContactModal);

  function toggleContactModal() {
    refs.ContactModal.classList.toggle('is-hidden');
  }
})();
