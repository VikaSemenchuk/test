!function(){var e,d,o;e=document.querySelector("[data-menu-button]"),d=document.querySelector("[data-menu]"),o=document.querySelector("body"),e.addEventListener("click",(function(){var t="true"===e.getAttribute("aria-expended")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expended",!t),d.classList.toggle("is-open"),o.classList.toggle("no-scroll")}));new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0}});!function(){var e={openAddModalBtn:document.querySelector("[data-add-modal-open]"),closeAddModalBtn:document.querySelector("[data-add-modal-close]"),addModal:document.querySelector("[data-add-modal]")};function d(){e.addModal.classList.toggle("is-hidden")}e.openAddModalBtn.addEventListener("click",d),e.closeAddModalBtn.addEventListener("click",d)}(),function(){var e={openOrderModalBtn:document.querySelector("[data-order-modal-open]"),closeOrderModalBtn:document.querySelector("[data-order-modal-close]"),orderModal:document.querySelector("[data-order-modal]")};function d(){e.orderModal.classList.toggle("is-hidden")}e.openOrderModalBtn.addEventListener("click",d),e.closeOrderModalBtn.addEventListener("click",d)}()}();
//# sourceMappingURL=accessories.b4b0956d.js.map