(() => {
    const refs = {
    openModalBtn: document.querySelector("[data-table-open]"),
    closeModalBtn: document.querySelector("[data-table-close-table]"),
    modal: document.querySelector("[data-table]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    }
})();