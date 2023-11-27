import './pages/index.css';
import { initialCards } from './components/cards.js';
import { createCard, deleteCard, likeCard } from './components/card.js';
import { openModal, closeModal } from './components/modal.js'


// DOM узлы 

const placesList = document.querySelector('.places__list');

const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");

const formElementEditProfile = document.forms['edit-profile'];
const nameInput = formElementEditProfile.elements.name;
const jobInput = formElementEditProfile.elements.description;
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const formElementNewCard = document.forms['new-place'];
const placeNameInput = formElementNewCard.elements['place-name'];
const linkInput = formElementNewCard.elements.link;


// @todo: Вывести карточки на страницу 
initialCards.forEach((cardElement) =>
    placesList.append(createCard(cardElement, deleteCard, likeCard, openPopupImg))
);

// Открытие Popup

profileEditButton.addEventListener('click', function () {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;

    openModal(popupTypeEdit);
});

profileAddButton.addEventListener('click', function () {
    openModal(popupTypeNewCard);
});

function openPopupImg(evt) {
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    popupCaption.textContent = evt.target.alt;
    openModal(popupTypeImage);
};

// Закрытие Popup

closeButtons.forEach(function (element) {
    element.addEventListener('click', function (evt) {
        const popupElement = evt.target.closest('.popup');
        closeModal(popupElement);
    });
});

// Плавное открытие и закрытие Popup

const popups = [popupTypeEdit, popupTypeNewCard, popupTypeImage]
popups.forEach(function (popupElement) {
    popupElement.classList.add('popup_is-animated');
});

// Редактирование профиля

function handleEditProfileFormSubmit(evt) {
    evt.preventDefault();

    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;

    closeModal(popupTypeEdit);
};

formElementEditProfile.addEventListener('submit', handleEditProfileFormSubmit);

// Добавление карточки

function handleNewCardFormSubmit(evt) {
    evt.preventDefault();

    const cards = {
        name: placeNameInput.value,
        link: linkInput.value,
    };

    const newCard = createCard(cards, deleteCard, openPopupImg, likeCard);
    placesList.prepend(newCard);

    closeModal(popupTypeNewCard);
    formElementNewCard.reset();
}

formElementNewCard.addEventListener('submit', handleNewCardFormSubmit);

