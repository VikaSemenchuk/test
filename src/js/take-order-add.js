(() => {
  const refs = {
    openAddModalBtn: document.querySelector('[data-add-modal-open]'),
    closeAddModalBtn: document.querySelector('[data-add-modal-close]'),
    addModal: document.querySelector('[data-add-modal]'),
  };

  refs.openAddModalBtn.addEventListener('click', toggleAddModal);
  refs.closeAddModalBtn.addEventListener('click', toggleAddModal);

  function toggleAddModal() {
    refs.addModal.classList.toggle('is-hidden');
  }
})();
