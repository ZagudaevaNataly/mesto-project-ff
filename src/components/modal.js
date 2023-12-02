function openModal(popupElement) {
    popupElement.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeModalByEsc);
    document.addEventListener('click', closeModalByOverlay);
};

function closeModal(popupElement) {
    popupElement.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeModalByEsc);
    document.removeEventListener('click', closeModalByOverlay);
};

function closeModalByEsc(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        closeModal(openedPopup);
    };
};

function closeModalByOverlay(evt) {
    if (evt.target.classList.contains('popup_is-opened')) {
        closeModal(evt.target);
    }
};

export { openModal, closeModal }