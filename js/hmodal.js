(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-hmodal-open]"),
      closeModalBtn: document.querySelector("[data-hmodal-close]"),
      modal: document.querySelector("[data-hmodal]"),
    };
  
    refs.openModalBtn.addEventListener("click", togglehmodal);
    refs.closeModalBtn.addEventListener("click", togglehmodal);
  
    function togglehmodal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();