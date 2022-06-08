import addCardForm from '../Forms/addCardForm';
import signOut from '../../helpers/signOut';
import sortAlpha from '../../helpers/sortAlpha';
import { getCards } from '../../../api/cardData';

const navEvents = (uid) => {
  document.querySelector('#create-card').addEventListener('click', addCardForm);

  document.querySelector('#logout').addEventListener('click', signOut);

  document.querySelector('#alphabetical').addEventListener('click', getCards(uid).then((cardArray) => sortAlpha(cardArray)));
};

export default navEvents;
