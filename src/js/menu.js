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