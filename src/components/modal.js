// openPopup, closePopup, closeByEsc
function openPopup(querySelectorClassName) {
    const popup = querySelectorClassName;
    popup.classList.add("popup_is-opened");
    document.addEventListener("keydown", closeByEsc);
}

function closePopup(querySelectorClassName) {
    const popup = querySelectorClassName;
    popup.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", closeByEsc);
}

function closeByEsc(evt) {
    if (evt.key === "Escape") {
        const openedPopup = document.querySelector(".popup_is-opened");
        closePopup(openedPopup);
    }
}

// Плавное открытие и закрытие 
const popups = [popupTypeEdit, popupTypeNewCard, popupTypeImage]
popups.forEach(function(popupElement){
  popupElement.classList.add('popup_is-animated');
});

export { openPopup, closePopup };