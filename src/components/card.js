// @todo: Темплейт карточки 
const cardTemplate = document.querySelector("#card-template").content;


// @todo: DOM узлы 
const placesList = document.querySelector(".places__list");

// @todo: Функция создания карточки 
function createCard(cardElement, deleteCard, likeCard, openPopupImg) {
    const cardItem = cardTemplate.querySelector(".card").cloneNode(true),
        cardImage = cardItem.querySelector('.card__image'),
        cardTitle = cardItem.querySelector('.card__title'),
        deleteButton = cardItem.querySelector('.card__delete-button'),
        cardLikeButton = cardItem.querySelector(".card__like-button");

    cardImage.src = cardElement.link;
    cardImage.alt = cardElement.name;
    cardTitle.textContent = cardElement.name;

    deleteButton.addEventListener("click", deleteCard);

    cardLikeButton.addEventListener('click', likeCard);

    cardImage.addEventListener('click', openPopupImg);

    return cardItem;
}

// @todo: Функция удаления карточки 
function deleteCard(evt) {
    evt.target.closest('.places__item').remove();
}

// Фукция лайка
function likeCard(evt) {
    evt.target.classList.toggle("card__like-button_is-active");
};

export { createCard, deleteCard, likeCard }


