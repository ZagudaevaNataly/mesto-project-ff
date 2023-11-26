import "./pages/index.css";
import {initialCards, createCard, likeCard, deleteCard} from "./components/cards.js";
import { openPopup, closePopup } from "./components/modal.js";

// DOM узлы  карточки
const placesList = document.querySelector(".places__list");

// DOM узлы модальных окон
const profile = document.querySelector(".profile"),
    profileEditButton = profile.querySelector(".profile__edit-button"),
    profileTitle = profile.querySelector(".profile__title"),
    profileDescription = profile.querySelector(".profile__description"),
    profileAddButton = profile.querySelector(".profile__add-button");

const profileForm = document.querySelector('.popup__form[name="edit-profile"]'),
    nameInput = profileForm.querySelector(".popup__input_type_name"),
    jobInput = profileForm.querySelector(".popup__input_type_description");

const cardForm = document.querySelector('.popup__form[name="new-place"]'),
    cardNameInput = cardForm.querySelector(".popup__input_type_card-name"),
    cardLinkInput = cardForm.querySelector(".popup__input_type_url");

const popups = document.querySelectorAll(".popup"),
    popupEditProfile = document.querySelector(".popup_type_edit"),
    popupNewCard = document.querySelector(".popup_type_new-card"),
    popupImageContainer = document.querySelector(".popup_type_image"),
    popupImage = popupImageContainer.querySelector(".popup__image"),
    popupCaption = popupImageContainer.querySelector(".popup__caption");

// Вывести карточки на страницу 
initialCards.forEach(function(createCard) {
    const listItem = createCard(cardElement, handleImageClick, likeCard, deleteCard);
    placesList.append(listItem);
  });
  

// DOM узлы редактирования профиля 

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(popupEditProfile);
}

// Добавление карточки на страницу 

function handleNewCardFormSubmit(evt) {
    evt.preventDefault();
    const newCard = createCard(
        { name: cardNameInput.value, 
        link: cardLinkInput.value },
        handleImageClick,
        likeCard,
        deleteCard
    );
    placesList.prepend(newCard);
    closePopup(popupNewCard);
    cardForm.reset();
}

//Открыть изображение 

function handleImageClick(evt) {
    const card = evt.target.closest(".card"),
        cardImage = card.querySelector(".card__image"),
        cardTitle = card.querySelector(".card__title");
    popupImage.src = cardImage.src;
    popupImage.alt = cardTitle.alt;
    popupCaption.textContent = cardTitle.textContent;
    openPopup(popupImageContainer);
}

// События (попап)

profileForm.addEventListener("submit", handleProfileFormSubmit);
cardForm.addEventListener("submit", handleNewCardFormSubmit);
profileEditButton.addEventListener("click", () => {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
    openPopup(popupEditProfile);
});
profileAddButton.addEventListener("click", () => openPopup(popupNewCard));
popups.forEach((popup) => {
    popup.addEventListener("mousedown", (evt) => {
        if (evt.target.matches(".popup_is-opened, .popup__close"))
            closePopup(popup);
    });
});


