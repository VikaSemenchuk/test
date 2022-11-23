(() => {
  const refs = {
    openOrderModalBtn: document.querySelector('[data-order-modal-open]'),
    closeOrderModalBtn: document.querySelector('[data-order-modal-close]'),
    orderModal: document.querySelector('[data-order-modal]'),
  };

  refs.openOrderModalBtn.addEventListener('click', toggleOrderModal);
  refs.closeOrderModalBtn.addEventListener('click', toggleOrderModal);

  function toggleOrderModal() {
    refs.orderModal.classList.toggle('is-hidden');
  }
})();
