(() => {
  const refs = {
    openContactModalBtn: document.querySelector('[data-contact-modal-open]'),
    closeContactModalBtn: document.querySelector('[data-contact-modal-close]'),
    contactModal: document.querySelector('[data-contact-modal]'),
  };

  refs.openContactModalBtn.addEventListener('click', toggleContactModal);
  refs.closeContactModalBtn.addEventListener('click', toggleContactModal);

  function toggleContactModal() {
    refs.contactModal.classList.toggle('is-hidden');
  }
})();
