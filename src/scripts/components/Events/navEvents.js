import addCardForm from '../Forms/addCardForm';
import signOut from '../../helpers/signOut';
import { sortAlpha, sortTimeNewest, sortTimeOldest } from '../../helpers/sort';
import { getCards, getPublicCards } from '../../../api/cardData';
import { showCards } from '../cardsPage';

const navEvents = (uid) => {
  document.querySelector('#create-card').addEventListener('click', addCardForm);

  document.querySelector('#logout').addEventListener('click', signOut);

  document.querySelector('#alphabetical').addEventListener('click', () => {
    getCards(uid).then((cardArray) => showCards(sortAlpha(cardArray)));
  });

  document.querySelector('#newest').addEventListener('click', () => {
    getCards(uid).then((cardArray) => showCards(sortTimeNewest(cardArray)));
  });

  document.querySelector('#oldest').addEventListener('click', () => {
    getCards(uid).then((cardArray) => showCards(sortTimeOldest(cardArray)));
  });

  document.querySelector('#search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    getCards(uid).then((cardsArray) => {
      const searchString = document.querySelector('#search-text').value.toLowerCase();
      const filteredCards = cardsArray.filter((card) => (
        card.title.toLowerCase().includes(searchString) || card.definition.toLowerCase().includes(searchString) || card.languageTech.toLowerCase().includes(searchString)
      ));
      showCards(filteredCards);
      document.querySelector('#search-text').value = '';
    });
  });

  document.querySelector('#community').addEventListener('click', () => {
    getPublicCards().then((cardArray) => showCards(Object.values(cardArray)));
  });
};

export default navEvents;
