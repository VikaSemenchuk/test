!function(){var e,t,o,d,n,a,c;e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),o=document.querySelector("body"),e.addEventListener("click",(function(){var d="true"===e.getAttribute("aria-expended")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expended",!d),t.classList.toggle("is-open"),o.classList.toggle("no-scroll")})),d=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),c=function(){var e="true"===n.getAttribute("aria-expanded")||!1;n.setAttribute("aria-expanded",!e),d.classList.toggle("is-open"),n.classList.toggle("active"),bodyScrollLock[e?"enableBodyScroll":"disableBodyScroll"](document.body)},n.addEventListener("click",c),a.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(d.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}));new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0}});!function(){var e={openContactModalBtn:document.querySelector("[data-contact-modal-open]"),closeContactModalBtn:document.querySelector("[data-contact-modal-close]"),ContactModal:document.querySelector("[data-contact-modal]")};function t(){e.ContactModal.classList.toggle("is-hidden")}e.openContactModalBtn.addEventListener("click",t),e.closeContactModalBtn.addEventListener("click",t)}(),function(){var e={openAddModalBtn:document.querySelector("[data-add-modal-open]"),closeAddModalBtn:document.querySelector("[data-add-modal-close]"),addModal:document.querySelector("[data-add-modal]")};function t(){e.addModal.classList.toggle("is-hidden")}e.openAddModalBtn.addEventListener("click",t),e.closeAddModalBtn.addEventListener("click",t)}(),function(){var e={openOrderModalBtn:document.querySelector("[data-order-modal-open]"),closeOrderModalBtn:document.querySelector("[data-order-modal-close]"),orderModal:document.querySelector("[data-order-modal]")};function t(){e.orderModal.classList.toggle("is-hidden")}e.openOrderModalBtn.addEventListener("click",t),e.closeOrderModalBtn.addEventListener("click",t)}()}();
//# sourceMappingURL=accessories.6169c3be.js.map
