import addCardForm from '../Forms/addCardForm';
import signOut from '../../helpers/signOut';
import { sortAlpha, sortTimeNewest, sortTimeOldest } from '../../helpers/sort';
import { getCards } from '../../../api/cardData';
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
};

export default navEvents;
