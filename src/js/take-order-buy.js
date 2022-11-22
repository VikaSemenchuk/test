import 'animate.css';
(() => {
  const refs = {
    openOrderModalBtn: document.querySelector('[data-order-modal-open]'),
    closeOrderModalBtn: document.querySelector('[data-order-modal-close]'),
    OrderModal: document.querySelector('[data-order-modal]'),
  };

  refs.openOrderModalBtn.addEventListener('click', toggleOrderModal);
  refs.closeOrderModalBtn.addEventListener('click', toggleOrderModal);

  function toggleOrderModal() {
    refs.OrderModal.classList.toggle('is-hidden');
  }
})();
