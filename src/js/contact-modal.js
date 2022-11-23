(() => {
  const refs = {
    openContactModalBtn: document.querySelector('[data-modal-open]'),
    closeContactModalBtn: document.querySelector('[data-modal-close]'),
    contactModal: document.querySelector('[data-modal]'),
  };

  refs.openContactModalBtn.addEventListener('click', toggleContactModal);
  refs.closeContactModalBtn.addEventListener('click', toggleContactModal);

  function toggleContactModal() {
    refs.contactModal.classList.toggle('is-hidden');
  }
})();
