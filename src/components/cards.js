

/*export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  }
];*/


import arkhyzImage from "../images/arkhyz.jpg";
import ChelyabinskImage from "../images/chelyabinsk-oblast.jpg";
import ivanovoImage from "../images/ivanovo.jpg";
import kamchatkaImage from "../images/kamchatka.jpg";
import kholmogorskyImage from "../images/kholmogorsky-rayon.jpg";
import baikalImage from "../images/baikal.jpg";

const initialCards = [
  {
    name: "Архыз",
    link: arkhyzImage,
  },
  {
    name: "Челябинская область",
    link: ChelyabinskImage,
  },
  {
    name: "Иваново",
    link: ivanovoImage,
  },
  {
    name: "Камчатка",
    link: kamchatkaImage,
  },
  {
    name: "Холмогорский район",
    link: kholmogorskyImage,
  },
  {
    name: "Байкал",
    link: baikalImage,
  },
];


// @todo: Темплейт карточки 
const cardTemplate = document.querySelector("#card-template").content;

// Функция создания карточки 
function createCard(cardElement, handleImageClick, likeCard, deleteCard) {
    const card = cardTemplate.querySelector(".card").cloneNode(true),
        cardImage = card.querySelector('.card__image'),
        cardTitle = card.querySelector('.card__title'),
        deleteButton = card.querySelector('.card__delete-button');
        cardLikeButton = card.querySelector(".card__like-button"),

    cardImage.src = cardElement.link;
    cardImage.alt = cardElement.name;
    cardTitle.textContent = cardElement.name;

    deleteButton.addEventListener("click", deleteCard);
    cardImage.addEventListener("click", handleImageClick);
    cardLikeButton.addEventListener("click", likeCard);

    return card;
}

// Функция удаления карточки 
function deleteCard(evt) {
  const card = evt.target.closest(".card");
  card.remove();
}

// Функция лайка
function likeCard(evt) {
  const card = evt.target.closest(".card"),
  cardLikeButton = card.querySelector(".card__like-button");
  cardLikeButton.classList.toggle("card__like-button_is-active");
}


// Вывод карточки на страницу 
initialCards.forEach((cardItem) =>
    placesList.append(createCard(cardItem, deleteCard))
); 

export { initialCards, createCard, likeCard, deleteCard };