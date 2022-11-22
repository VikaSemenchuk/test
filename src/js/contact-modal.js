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
