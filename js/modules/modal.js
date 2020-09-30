function closeModal(modalSelestor) {
    const modal = document.querySelector(modalSelestor);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = "";
}

function openModal(modalSelestor, modalTimerId) {
    const modal = document.querySelector(modalSelestor);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = "hidden";

    if (modalTimerId) {
        clearInterval(modalTimerId);
    }

}

function modal(triggerSelector, modalSelestor, modalTimerId) {
    // Modal
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelestor);

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            openModal(modalSelestor, modalTimerId);
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') === "") {
            closeModal(modalSelestor);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains("show")) {
            closeModal(modalSelestor);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelestor, modalTimerId);
        }
        window.removeEventListener('scroll', showModalByScroll);
    }

    window.addEventListener('scroll', showModalByScroll);
}
export default modal;
export {
    closeModal
};
export {
    openModal
};