// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;


// @todo: DOM узлы
const placesList = document.querySelector(".places__list");


// @todo: Функция создания карточки
function createCard(cardElement, deleteCard) {
    const card = cardTemplate.querySelector(".card").cloneNode(true),
        cardImage = card.querySelector('.card__image'),
        cardTitle = card.querySelector('.card__title'),
        deleteButton = card.querySelector('.card__delete-button');

    cardImage.src = cardElement.link;
    cardImage.alt = cardElement.name;
    cardTitle.textContent = cardElement.name;

    deleteButton.addEventListener("click", deleteCard);

    return card;
}

// @todo: Функция удаления карточки
function deleteCard(evt) {
    evt.target.closest('.places__item').remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach((cardItem) =>
    placesList.append(createCard(cardItem, deleteCard))
);

