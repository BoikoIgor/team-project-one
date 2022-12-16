(() => {
    const refs = {
    openModalBtn: document.querySelector("[data-room-open]"),
    closeModalBtn: document.querySelector("[data-room-close]"),
    modal: document.querySelector("[data-room]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    }
})();